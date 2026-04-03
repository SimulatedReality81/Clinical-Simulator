// ══════════════════════════════════════════════════════════════
// PROCEDURES — Procedure reference page + practice chatbot
// ══════════════════════════════════════════════════════════════
import { PROC_DATA } from './data_procedures.js';
import { esc, fmtMd } from './ui.js';
import { WORKER_URL, PROC_CHAT_MAX_TOKENS, MODEL } from './config.js';

let currentProcSpec=null;

export function initProcPage(){
  const nav=document.getElementById('proc-nav');
  const specs=Object.keys(PROC_DATA);
  nav.innerHTML=specs.map((s,i)=>'<button class="ref-nav-btn'+(s==='ICU'?' icu-btn':'')+(i===0?' active':'')+'" onclick="selectProcSpec(\''+s+'\')">'+s+'</button>').join('');
  currentProcSpec=specs[0];
  renderProcSubcats();
}

function selectProcSpec(spec){
  currentProcSpec=spec;
  document.querySelectorAll('#proc-nav .ref-nav-btn').forEach(b=>{b.classList.toggle('active',b.textContent===spec);});
  renderProcSubcats();document.getElementById('proc-detail').innerHTML='';
}
window.selectProcSpec=selectProcSpec;

function renderProcSubcats(){
  const procs=Object.keys(PROC_DATA[currentProcSpec]||{});
  const el=document.getElementById('proc-subcats');
  el.innerHTML='<div class="ref-subcat-header">Procedures</div><div class="ref-subcat-chips">'+procs.map(p=>'<button class="ref-subcat-btn" onclick="selectProc(\''+p.replace(/'/g,"\\'")+'\')">'+p+'</button>').join('')+'</div>';
}

function selectProc(procName){
  document.querySelectorAll('#proc-subcats .ref-subcat-btn').forEach(b=>{b.classList.toggle('active',b.textContent===procName);});
  const proc=PROC_DATA[currentProcSpec]?.[procName];if(!proc)return;
  const el=document.getElementById('proc-detail');
  const stepsHTML=proc.steps.map((s,i)=>'<div class="proc-step"><span class="proc-step-num">'+(i+1)+'</span><span class="proc-step-text">'+esc(s)+'</span></div>').join('');
  const sitesHTML=proc.sites?proc.sites.map(s=>'<span style="display:inline-block;padding:.15rem .4rem;border-radius:4px;background:rgba(59,130,246,.1);color:var(--accent-blue);font-size:.7rem;margin:.1rem .2rem;">'+esc(s)+'</span>').join(''):'';
  const usTipHTML=proc.usTip?'<div class="proc-us-tip"><strong>🔊 Ultrasound Guidance:</strong> '+esc(proc.usTip)+'</div>':'';
  const resourcesHTML=proc.resources?'<div class="proc-resources"><strong style="color:var(--text-dim);font-size:.65rem;">📚 FURTHER READING:</strong><div class="proc-resources-list">'+proc.resources.map(r=>{const parts=r.split('|');return '<a href="'+esc(parts[0])+'" target="_blank" rel="noopener noreferrer" class="proc-resource-link">'+esc(parts[1]||parts[0])+'<span class="proc-resource-arrow">↗</span></a>';}).join('')+'</div></div>':'';
  el.innerHTML='<div class="proc-detail"><h4>'+esc(procName)+'</h4><div style="margin-bottom:.5rem;font-size:.76rem;color:var(--text-secondary);line-height:1.5;"><strong style="color:var(--text-dim);font-size:.65rem;">INDICATION:</strong> '+esc(proc.indication)+'</div>'+(sitesHTML?'<div style="margin-bottom:.5rem;"><strong style="color:var(--text-dim);font-size:.65rem;">SITES: </strong>'+sitesHTML+'</div>':'')+'<div style="margin-bottom:.5rem;"><strong style="color:var(--text-dim);font-size:.65rem;">STEPS:</strong></div>'+stepsHTML+usTipHTML+'<div class="proc-pearl"><strong>💡 Pearls:</strong> '+esc(proc.pearls)+'</div>'+resourcesHTML+'<button class="proc-practice-btn" data-proc="'+esc(procName)+'" onclick="openProcChat(this.dataset.proc)">🧠 Practice This Procedure — Test Your Knowledge</button></div>';
}
window.selectProc=selectProc;

// ── Procedure Practice Chatbot ──
let procChatConv=[],procChatName='',procChatSysPrompt='';

function openProcChat(procName){
  procChatName=procName;procChatConv=[];
  const proc=PROC_DATA[currentProcSpec]?.[procName];if(!proc)return;
  procChatSysPrompt=`You are a procedural skills instructor testing a medical trainee on the procedure: "${procName}".\n\nYour role is to quiz them interactively in TWO PHASES.\n\n## PHASE 1: PROCEDURE WALKTHROUGH\nStart by asking them to walk you through the procedure step-by-step (materials/equipment needed, patient positioning, technique).\n\nAfter they attempt to articulate the procedure:\n1. **First, provide detailed feedback on their attempt.** Go through each fundamental step they mentioned and confirm what was correct (✅). Then clearly identify ALL steps, materials, or technique details they MISSED or got wrong (⚠️), and explain the correct approach for each.\n2. **Give them a clear summary** of what they nailed and what they need to review regarding the procedural steps.\n3. **Only AFTER providing this feedback**, transition to Phase 2 by saying something like: "Now that we've reviewed the procedural steps, let's discuss the broader knowledge around this procedure."\n\n## PHASE 2: BROADER KNOWLEDGE\nAfter completing Phase 1 feedback, quiz them on:\n- Indications and contraindications\n- Potential complications and how to manage them\n- Relevant anatomy\n- Special considerations\n\nAsk ONE question at a time in Phase 2.\n\nRULES:\n1. Ask ONE question at a time.\n2. After each response, give brief feedback: ✅ for correct points, ⚠️ for missing/incorrect points with the correct information.\n3. Be encouraging but rigorous — this is board-level preparation.\n4. Reference these key facts:\n   - Indication: ${proc.indication}\n   - Sites: ${proc.sites?.join('; ')||'N/A'}\n   - Key steps: ${proc.steps?.join(' → ')||'N/A'}\n   - Pearls: ${proc.pearls||'N/A'}\n5. After Phase 2 is complete, give a brief overall summary of what they got right and what to review across both phases.\n6. Keep responses concise (3-5 sentences per turn). Use bullet points for corrections.\n7. If the user says "Tell me" or "I don't know", provide the complete correct answer for the current question, then move on to the next question.\n\nBegin by greeting them and asking them to walk you through the procedure step-by-step (Phase 1).`;
  document.getElementById('proc-chat-title').textContent='🩺 Practice: '+procName;
  document.getElementById('proc-chat-msgs').innerHTML='';
  document.getElementById('proc-chat-overlay').style.display='flex';
  procChatConv.push({role:'user',content:'I want to practice the procedure: '+procName});
  sendProcChatAPI();
}
window.openProcChat=openProcChat;

function closeProcChat(){document.getElementById('proc-chat-overlay').style.display='none';procChatConv=[];}
window.closeProcChat=closeProcChat;

function tellMeProcChat(){
  addProcChatMsg("Tell me the answer.","user");
  procChatConv.push({role:'user',content:"I'm not sure. Please tell me the complete correct answer for this question, then move on to the next topic."});
  sendProcChatAPI();
}
window.tellMeProcChat=tellMeProcChat;

function addProcChatMsg(text,type){
  const msgs=document.getElementById('proc-chat-msgs');
  const d=document.createElement('div');d.className='proc-chat-msg '+type;
  d.innerHTML=type==='ai'?fmtMd(text):esc(text);
  msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;
}

async function sendProcChat(){
  const inp=document.getElementById('proc-chat-input');
  const t=inp.value.trim();if(!t)return;inp.value='';
  addProcChatMsg(t,'user');
  procChatConv.push({role:'user',content:t});
  await sendProcChatAPI();
}
window.sendProcChat=sendProcChat;

async function sendProcChatAPI(){
  try{
    const r=await fetch(WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:MODEL,max_tokens:PROC_CHAT_MAX_TOKENS,system:procChatSysPrompt,messages:procChatConv})});
    if(!r.ok)throw new Error('API error '+r.status);
    const d=await r.json();
    const txt=d.content.map(b=>b.text||'').join('\n').trim();
    procChatConv.push({role:'assistant',content:txt});
    addProcChatMsg(txt,'ai');
  }catch(e){addProcChatMsg('⚠️ '+e.message,'ai');}
}

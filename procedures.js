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
  el.innerHTML='<div class="proc-detail"><h4>'+esc(procName)+'</h4><div style="margin-bottom:.5rem;font-size:.76rem;color:var(--text-secondary);line-height:1.5;"><strong style="color:var(--text-dim);font-size:.65rem;">INDICATION:</strong> '+esc(proc.indication)+'</div>'+(sitesHTML?'<div style="margin-bottom:.5rem;"><strong style="color:var(--text-dim);font-size:.65rem;">SITES: </strong>'+sitesHTML+'</div>':'')+'<div style="margin-bottom:.5rem;"><strong style="color:var(--text-dim);font-size:.65rem;">STEPS:</strong></div>'+stepsHTML+'<div class="proc-pearl"><strong>💡 Pearls:</strong> '+esc(proc.pearls)+'</div><button class="proc-practice-btn" data-proc="'+esc(procName)+'" onclick="openProcChat(this.dataset.proc)">🧠 Practice This Procedure — Test Your Knowledge</button></div>';
}
window.selectProc=selectProc;

// ── Procedure Practice Chatbot ──
let procChatConv=[],procChatName='',procChatSysPrompt='';

function openProcChat(procName){
  procChatName=procName;procChatConv=[];
  const proc=PROC_DATA[currentProcSpec]?.[procName];if(!proc)return;
  procChatSysPrompt=`You are a procedural skills instructor testing a medical trainee on the procedure: "${procName}".\n\nYour role is to quiz them interactively. Start by asking them to walk you through the procedure from start to finish — including indications, contraindications, materials/equipment needed, patient positioning, step-by-step technique, and potential complications.\n\nRULES:\n1. Ask ONE question at a time. Start broad then drill into specifics they miss.\n2. After each response, give brief feedback: ✅ for correct points, ⚠️ for missing/incorrect points with the correct information.\n3. Be encouraging but rigorous — this is board-level preparation.\n4. Reference these key facts:\n   - Indication: ${proc.indication}\n   - Sites: ${proc.sites?.join('; ')||'N/A'}\n   - Key steps: ${proc.steps?.join(' → ')||'N/A'}\n   - Pearls: ${proc.pearls||'N/A'}\n5. After they've completed the walkthrough, give a brief summary of what they got right and what to review.\n6. Keep responses concise (3-5 sentences per turn). Use bullet points for corrections.\n\nBegin by greeting them and asking them to walk you through the procedure.`;
  document.getElementById('proc-chat-title').textContent='🩺 Practice: '+procName;
  document.getElementById('proc-chat-msgs').innerHTML='';
  document.getElementById('proc-chat-overlay').style.display='flex';
  procChatConv.push({role:'user',content:'I want to practice the procedure: '+procName});
  sendProcChatAPI();
}
window.openProcChat=openProcChat;

function closeProcChat(){document.getElementById('proc-chat-overlay').style.display='none';procChatConv=[];}
window.closeProcChat=closeProcChat;

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

// ══════════════════════════════════════════════════════════════
// SCORES — Session-only score tracking, stats rendering, recent sims
// ══════════════════════════════════════════════════════════════
import * as ST from './state.js';
import { esc } from './ui.js';

// Save score (session-only — resets on page reload)
export function saveSc(s){
  const entry={score:s,date:new Date().toISOString(),diff:ST.S.diff,fb:ST.S.fb,scType:ST.S.scType,doc:ST.S.docName||'?',inputMode:ST.S.inputMode,pgy:ST.S.pgy};
  ST.pushScore(entry);
}
window.saveSc=saveSc;

export function saveSim(){
  const sim={date:new Date().toISOString(),type:ST.S.scType,diff:ST.S.diff,fb:ST.S.fb,graded:ST.S.grade==='graded',tp:ST.S.diff==='hard'&&ST.S.scType==='acls'&&ST.S.tp==='on',doc:ST.S.docName||'?',inputMode:ST.S.inputMode,msgs:ST.conv.map(m=>({role:m.role,content:m.content.replace(/HISTORIAN_LOG:\{[^\n]+\}/g,'').replace(/FINAL_SCORE:\d+/g,'').trim()})).filter(m=>m.content)};
  ST.pushRecSim(sim);
}
window.saveSim=saveSim;

// ── Stats rendering ──
export function renderStats(){
  const c=document.getElementById('stats-c');
  const hasFT=ST.scores.length>0,hasMC=ST.mcScores.length>0;
  if(!hasFT&&!hasMC){c.innerHTML='<div class="sc"><div class="no-s">No graded sims yet this session.</div></div>';return;}
  let tabHTML='<div class="stats-tabs"><button class="stats-tab active" onclick="switchStatsTab(this,\'ft\')">✏️ Free Text ('+ST.scores.length+')</button><button class="stats-tab" onclick="switchStatsTab(this,\'mc\')">🔘 Multiple Choice ('+ST.mcScores.length+')</button></div>';
  c.innerHTML=tabHTML+'<div id="stats-ft-content"></div><div id="stats-mc-content" style="display:none;"></div>';
  renderStatsTab('ft');renderStatsTab('mc');
}

function switchStatsTab(btn,tab){document.querySelectorAll('.stats-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.getElementById('stats-ft-content').style.display=tab==='ft'?'':'none';document.getElementById('stats-mc-content').style.display=tab==='mc'?'':'none';}
window.switchStatsTab=switchStatsTab;

function renderStatsTab(tab){
  const data=tab==='ft'?ST.scores:ST.mcScores;
  const containerId=tab==='ft'?'stats-ft-content':'stats-mc-content';
  const el=document.getElementById(containerId);
  if(!data.length){el.innerHTML='<div class="sc"><div class="no-s">No '+(tab==='ft'?'free text':'multiple choice')+' graded sims yet.</div></div>';return;}
  const s=data.map(x=>x.score);const av=Math.round(s.reduce((a,b)=>a+b,0)/s.length);const bst=Math.max(...s);const lat=s[s.length-1];
  function cl(v){return v>=80?'s-hi':v>=60?'s-mi':'s-lo';}
  el.innerHTML=`<div class="sc"><h3>Overview — ${tab==='ft'?'Free Text':'Multiple Choice'}</h3><div class="ssr"><div class="sm"><div class="v ${cl(av)}">${av}</div><div class="l">Avg</div></div><div class="sm"><div class="v ${cl(bst)}">${bst}</div><div class="l">Best</div></div><div class="sm"><div class="v ${cl(lat)}">${lat}</div><div class="l">Latest</div></div><div class="sm"><div class="v" style="color:var(--text-primary)">${data.length}</div><div class="l">Total</div></div></div></div><div class="sc"><h3>Trend</h3><div class="cc-c"><canvas id="sc-ch-${tab}"></canvas></div></div><div class="sc"><h3>History</h3><div class="shl">${data.slice().reverse().map((x,i)=>{const d=new Date(x.date);return`<div class="shi"><div><span style="color:var(--text-dim)">#${data.length-i}</span> <span style="margin-left:.3rem">${d.toLocaleDateString('en-US',{month:'short',day:'numeric'})} ${d.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'})}</span> <span class="badge badge-${x.scType==='rapid'?'rapid':'acls'}" style="margin-left:.2rem">${x.scType==='rapid'?'RR':x.scType==='genim'?'IM':'ACLS'}</span>${x.pgy?'<span class="badge badge-graded" style="margin-left:.2rem;">'+x.pgy+'</span>':''}</div><div class="scv ${cl(x.score)}">${x.score}/100</div></div>`;}).join('')}</div></div>`;
  setTimeout(()=>{const ctx=document.getElementById('sc-ch-'+tab);if(!ctx)return;new Chart(ctx,{type:'line',data:{labels:data.map((_,i)=>`#${i+1}`),datasets:[{data:s,borderColor:'#a855f7',backgroundColor:'rgba(168,85,247,.1)',borderWidth:2,pointBackgroundColor:'#a855f7',pointRadius:3,fill:true,tension:.3}]},options:{responsive:true,maintainAspectRatio:false,scales:{y:{min:0,max:100,ticks:{color:'#64748b',stepSize:20},grid:{color:'rgba(42,53,80,.5)'}},x:{ticks:{color:'#64748b'},grid:{color:'rgba(42,53,80,.3)'}}},plugins:{legend:{display:false}}}});},80);
}

// ── Recent sims ──
export function renderSims(){
  const c=document.getElementById('sims-c');
  if(!ST.recSims.length){c.innerHTML='<div class="sc"><div class="no-s">No sims saved yet this session.</div></div>';return;}
  c.innerHTML=ST.recSims.map((sim,idx)=>{const d=new Date(sim.date);const ds=d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});const ts=d.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'});const badges=`<span class="badge badge-${sim.type==='rapid'?'rapid':'acls'}">${sim.type==='rapid'?'RR':'ACLS'}</span> <span class="badge badge-${sim.diff==='easy'?'easy':'hard'}">${sim.diff}</span>${sim.graded?' <span class="badge badge-graded">Graded</span>':''}`;
  const msgs=sim.msgs.map(m=>`<div class="sm-m sm-${m.role==='user'?'u':'ai'}"><div class="sm-r ${m.role==='user'?'u-r':'ai-r'}">${m.role==='user'?(sim.doc?'Dr. '+sim.doc:'You'):'Sim'}</div><div class="sm-t">${esc(m.content.substring(0,1500))}</div></div>`).join('');
  return`<div class="si"><div class="si-h" onclick="togSI(this)"><div class="si-m"><span>${ds} ${ts}</span>${badges}</div><span class="si-a">▶</span></div><div class="si-b">${msgs}</div></div>`;}).join('');
}

function togSI(h){h.classList.toggle('open');h.nextElementSibling.classList.toggle('open');}
window.togSI=togSI;

// ══════════════════════════════════════════════════════════════
// UI — Page navigation, theme, toggles, formatting, helpers
// ══════════════════════════════════════════════════════════════
import * as ST from './state.js';
import { renderStats, renderSims } from './scores.js';
import { initDrugsPage } from './drugs.js';
import { initProcPage } from './procedures.js';
import { renderRef } from './references.js';

// ── Escape HTML ──
export function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

// ── Markdown-lite formatter ──
export function fmtMd(t){let h=t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');h=h.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g,'<em>$1</em>');h=h.replace(/^### (.+)$/gm,'<h3>$1</h3>').replace(/^## (.+)$/gm,'<h3>$1</h3>').replace(/^---$/gm,'<hr>').replace(/^- (.+)$/gm,'<li>$1</li>');h=h.replace(/(<li>[\s\S]*?<\/li>)/g,'<ul>$1</ul>').replace(/<\/ul>\s*<ul>/g,'');h=h.replace(/\n\n/g,'</p><p>').replace(/\n/g,'<br>');return'<p>'+h+'</p>';}

// ── Typing indicator ──
export function showT(s){document.getElementById('ti').style.display=s?'flex':'none';if(s)document.getElementById('ma').scrollTop=document.getElementById('ma').scrollHeight;}

// ── Input state ──
export function updIS(){document.getElementById('send-btn').disabled=ST.wait;document.getElementById('ci').disabled=ST.wait;document.getElementById('ci').placeholder=ST.wait?'Waiting...':'Type your response...';}

// ── Page navigation ──
export function showPage(id){
  ['home','chat','stats','sims','library','drugs','procedures'].forEach(p=>{document.getElementById(p).classList.remove('active');document.getElementById(p).style.display='none';});
  const el=document.getElementById(id);el.classList.add('active');el.style.display='flex';
  if(id==='stats')renderStats();
  if(id==='sims')renderSims();
  if(id==='drugs')initDrugsPage();
  if(id==='procedures')initProcPage();
}
window.showPage=showPage;

export function goHome(){
  if(ST.isRec)window.togVoice();
  if(ST.simPhase!=='active'||ST.simEnd)window.saveSim();
  ST.setCurrentCaseTopics([]);
  renderRef();
  const mp=document.getElementById('meds-panel');if(mp)mp.classList.add('mp-hide');
  const op=document.getElementById('orders-panel');if(op)op.classList.add('op-hide');
  showPage('home');
}
window.goHome=goHome;

// ── Action row ──
export function showActionRow(btns){
  const row=document.getElementById('action-row');
  row.innerHTML=btns.map(b=>`<button class="action-btn ${b.cls}" onclick="${b.fn}">${b.label}</button>`).join('');
  row.style.display='flex';
}

export function showBackHomeBtn(){
  showActionRow([{label:'🏠 Back to Homepage',cls:'debrief-action',fn:'goHome()'}]);
}

// ── Messages ──
export function addMsg(t,type){
  const a=document.getElementById('ma');const d=document.createElement('div');
  if(type==='ai'){
    d.className='msg msg-ai';
    if(ST.S.inputMode==='mc'&&ST.simPhase==='active'){
      const mcMatch=t.match(/([\s\S]*?)(?:^|\n)(A\)[\s\S]*?)$/m);
      if(mcMatch){
        const narrative=mcMatch[1].trim();
        const optionsBlock=mcMatch[2].trim();
        const opts=optionsBlock.match(/[A-D]\)\s*[^\n]+/g);
        if(opts&&opts.length>=2){
          d.innerHTML=fmtMd(narrative);
          const mcDiv=document.createElement('div');mcDiv.className='mc-options';
          opts.forEach(opt=>{
            const letter=opt.charAt(0);const text=opt.substring(2).trim();
            const btn=document.createElement('button');btn.className='mc-opt';
            btn.innerHTML='<span class="mc-label">'+letter+'</span><span>'+esc(text)+'</span>';
            btn.onclick=()=>window.selectMCOption(letter,text,mcDiv);
            mcDiv.appendChild(btn);
          });
          d.appendChild(mcDiv);
        } else {d.innerHTML=fmtMd(t);}
      } else {d.innerHTML=fmtMd(t);}
    } else {d.innerHTML=fmtMd(t);}
  }else{d.className='msg msg-user';d.textContent=t;}
  a.insertBefore(d,document.getElementById('ti'));a.scrollTop=a.scrollHeight;
}

export function addSysMsg(t){const a=document.getElementById('ma');const d=document.createElement('div');d.className='msg msg-sys';d.textContent=t;a.insertBefore(d,document.getElementById('ti'));a.scrollTop=a.scrollHeight;}

// ── Theme ──
function applyAutoTheme(){const h=new Date().getHours();applyTheme(h>=7&&h<20?'light':'dark');}

export function applyTheme(mode){
  const r=document.documentElement.style;
  if(mode==='auto'){
    if(ST.autoThemeInterval)clearInterval(ST.autoThemeInterval);
    applyAutoTheme();
    ST.setAutoThemeInterval(setInterval(applyAutoTheme,60000));
    return;
  }
  if(ST.autoThemeInterval){clearInterval(ST.autoThemeInterval);ST.setAutoThemeInterval(null);}
  if(mode==='light'){r.setProperty('--user-bg','#f0f2f5');r.setProperty('--user-text','#1a1a2e');r.setProperty('--bg-primary','#f0f2f5');r.setProperty('--bg-secondary','#e2e5ea');r.setProperty('--bg-card','#ffffff');r.setProperty('--bg-card-hover','#f5f5f5');r.setProperty('--text-primary','#1a1a2e');r.setProperty('--text-secondary','#4a5568');r.setProperty('--text-dim','#718096');r.setProperty('--border','#d1d5db');r.setProperty('--border-light','#c0c4cc');}
  else{r.setProperty('--user-bg','#0a0e17');r.setProperty('--user-text','#f1f5f9');r.setProperty('--bg-primary','#0a0e17');r.setProperty('--bg-secondary','#111827');r.setProperty('--bg-card','#1a2235');r.setProperty('--bg-card-hover','#1f2a40');r.setProperty('--text-primary','#f1f5f9');r.setProperty('--text-secondary','#94a3b8');r.setProperty('--text-dim','#64748b');r.setProperty('--border','#2a3550');r.setProperty('--border-light','#334155');}
}

export function togTheme(btn){
  btn.parentElement.querySelectorAll('.tb').forEach(b=>b.className='tb');
  const v=btn.dataset.v;
  btn.classList.add(v==='dark'?'a-d-dark':v==='light'?'a-d-light':'a-d-auto');
  applyTheme(v);
}
window.togTheme=togTheme;

export function togThemeBtn(mode){
  document.querySelectorAll('#theme-bar .tb').forEach(b=>b.classList.remove('a-d-dark','a-d-light','a-d-auto'));
  const btn=document.querySelector(`#theme-bar .tb[onclick*="${mode}"]`);
  if(btn)btn.classList.add(mode==='dark'?'a-d-dark':mode==='light'?'a-d-light':'a-d-auto');
  applyTheme(mode);
}
window.togThemeBtn=togThemeBtn;

// ── Setting toggles ──
export function tog(btn){
  const g=btn.dataset.g,v=btn.dataset.v;
  const gm={fb:'fb',diff:'diff',grade:'grade',scType:'scType',tp:'tp',inputMode:'inputMode'};
  ST.S[gm[g]||g]=v;
  btn.parentElement.querySelectorAll('.tb').forEach(b=>b.className='tb');
  const cm={fb:{realtime:'a-fb-rt',end:'a-fb-end'},diff:{easy:'a-d-easy',hard:'a-d-hard'},grade:{graded:'a-graded',ungraded:'a-ungraded'},scType:{acls:'a-acls',rapid:'a-rapid',genim:'a-rapid',genicu:'a-genicu'},tp:{on:'a-tp-on',off:'a-tp-off'},inputMode:{freetext:'a-freetext',mc:'a-mc'}};
  btn.classList.add(cm[g]?.[v]||'');
  refreshUI();
}
window.tog=tog;

export function togPGY(btn){ST.S.pgy=btn.dataset.v;document.querySelectorAll('#pgy-g .tb').forEach(b=>b.className='tb');btn.classList.add('a-pgy');}
window.togPGY=togPGY;

export function isGr(){return ST.S.grade==='graded';}
export function useTP(){return ST.S.diff==='hard'&&ST.S.scType==='acls'&&ST.S.tp==='on';}

export function refreshUI(){
  const h=ST.S.diff==='hard',a=ST.S.scType==='acls',r=ST.S.scType==='rapid',g=ST.S.scType==='genim',icu=ST.S.scType==='genicu';
  const rrLabel=document.getElementById('rr-cats-label');
  if(rrLabel){const maxCatText=g?'up to 4':'up to 2';const arrow=rrLabel.querySelector('.collapse-arrow');rrLabel.innerHTML=`IM Categories (select ${maxCatText}) `;if(arrow){rrLabel.appendChild(arrow);}}
  const rrActive=document.querySelectorAll('#rr-cats .cc.active');
  const maxCats=g?4:2;
  if(rrActive.length>maxCats){[...rrActive].slice(maxCats).forEach(c=>c.classList.remove('active'));ST.S.selCatsRR=[...document.querySelectorAll('#rr-cats .cc.active')].map(x=>x.dataset.cat);}
  document.getElementById('grade-g').classList.toggle('hidden',!(h||r||g||icu));
  document.getElementById('pgy-g').classList.toggle('hidden',ST.S.grade!=='graded');
  if(!h&&!r&&!g&&!icu)ST.S.grade='ungraded';
  document.getElementById('tp-g').classList.toggle('hidden',!(h&&a));if(!(h&&a))ST.S.tp='off';
  document.getElementById('rr-cats-group').classList.toggle('hidden',!(r||g));
  document.getElementById('acls-cats-group').classList.toggle('hidden',!a);
  document.getElementById('icu-cats-group').classList.toggle('hidden',!icu);
  if(!r&&!g){ST.S.selCatsRR=[];document.querySelectorAll('#rr-cats .cc.active').forEach(c=>c.classList.remove('active'));}
  if(!a){ST.S.selCatsACLS=[];document.querySelectorAll('#acls-cats .cc.active').forEach(c=>c.classList.remove('active'));}
  if(!icu){ST.S.selCatsICU=[];document.querySelectorAll('#icu-cats .cc.active').forEach(c=>c.classList.remove('active'));}
  const titles={'acls':'ACLS Code Blue Simulator','rapid':'Rapid Response Simulator','genim':'General IM Simulator','genicu':'General ICU Simulator'};
  document.getElementById('home-title').textContent=titles[ST.S.scType]||'ACLS Code Blue Simulator';
  document.getElementById('case-len-g').classList.toggle('hidden',ST.S.diff==='easy');
}

// ── Case length (sim length toggle) ──
export function resolveMinR(){
  if(ST.S.diff==='easy')return 5;
  const map={short:5,medium:10,long:16};
  return map[ST.S.simLength]||10;
}

export function togSimLen(btn){
  const v=btn.dataset.v;
  ST.S.simLength=v;
  btn.parentElement.querySelectorAll('.tb').forEach(b=>b.className='tb');
  const cm={short:'a-simlen-short',medium:'a-simlen-med',long:'a-simlen-long'};
  btn.classList.add(cm[v]||'');
}
window.togSimLen=togSimLen;

// ── Default name (localStorage) ──
export function initDefaultName(){
  const saved=localStorage.getItem('sim_default_name');
  if(saved){
    document.getElementById('doc-name').value=saved;
    const btn=document.getElementById('default-name-btn');
    btn.classList.add('saved');btn.textContent='★ Default';
  }
}

export function toggleDefaultName(){
  const inp=document.getElementById('doc-name');
  const btn=document.getElementById('default-name-btn');
  const name=inp.value.trim();
  if(btn.classList.contains('saved')){
    localStorage.removeItem('sim_default_name');
    btn.classList.remove('saved');btn.textContent='☆ Default';
  } else {
    if(!name){alert('Enter your name first.');return;}
    localStorage.setItem('sim_default_name',name);
    btn.classList.add('saved');btn.textContent='★ Default';
  }
}
window.toggleDefaultName=toggleDefaultName;

// ── Meds panel toggle ──
export function toggleMedsPanel(){
  const mp=document.getElementById('meds-panel');
  mp.classList.toggle('mp-hide');
}
window.toggleMedsPanel=toggleMedsPanel;

// ── Orders panel toggle ──
export function togOrders(){
  document.getElementById('orders-panel').classList.toggle('op-hide');
}
window.togOrders=togOrders;

// ── Collapsible category panels ──
export function toggleCatPanel(id){const el=document.getElementById(id);const arrow=el.parentElement.previousElementSibling?.querySelector('.collapse-arrow');if(!arrow)return;const isOpen=arrow.classList.contains('open');arrow.classList.toggle('open');el.style.display=isOpen?'none':'flex';}
window.toggleCatPanel=toggleCatPanel;

// ── Speech ──
function cvP(t){return[[/\bperiod\b/gi,'.'],[/\bfull stop\b/gi,'.'],[/\bcomma\b/gi,','],[/\bquestion mark\b/gi,'?'],[/\bexclamation point?\b/gi,'!'],[/\bcolon\b/gi,':'],[/\bsemicolon\b/gi,';'],[/\bopen paren(?:thesis)?\b/gi,'('],[/\bclose paren(?:thesis)?\b/gi,')'],[/\bleft paren(?:thesis)?\b/gi,'('],[/\bright paren(?:thesis)?\b/gi,')'],[/\b(?:forward )?slash\b/gi,'/'],[/\bbackslash\b/gi,'\\'],[/\bhyphen\b/gi,'-'],[/\bdash\b/gi,'—'],[/\bquote\b/gi,'"'],[/\bapostrophe\b/gi,"'"],[/\bnew ?line\b/gi,'\n']].reduce((s,[p,r])=>s.replace(p,r),t);}

export function initSp(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return;
  ST.setRec(new SR());ST.rec.continuous=true;ST.rec.interimResults=false;ST.rec.lang='en-US';
  ST.rec.onresult=e=>{let t='';for(let i=e.resultIndex;i<e.results.length;i++)if(e.results[i].isFinal)t+=e.results[i][0].transcript;t=cvP(t);const inp=document.getElementById('ci');inp.value+=(inp.value&&!inp.value.endsWith(' ')?' ':'')+t;inp.style.height='auto';inp.style.height=Math.min(inp.scrollHeight,100)+'px';};
  ST.rec.onerror=e=>{if(e.error==='no-speech'||e.error==='aborted')return;stopR();};
  ST.rec.onend=()=>{if(ST.isRec)try{ST.rec.start();}catch(e){}};
}

function stopR(){ST.setIsRec(false);document.getElementById('mic-btn').classList.remove('recording');}

export function togVoice(){
  if(!ST.rec){initSp();if(!ST.rec){alert('Use Chrome for speech.');return;}}
  if(ST.isRec){ST.setIsRec(false);ST.rec.stop();stopR();}
  else{ST.setIsRec(true);try{ST.rec.start();}catch(e){}document.getElementById('mic-btn').classList.add('recording');}
}
window.togVoice=togVoice;

// ── Progress bar ──
let _maxPct=0; // high-water mark — progress never goes backwards

export function resetProgress(){_maxPct=0;}

export function updateProgress(){
  const maxR=resolveMinR();
  const rawPct=Math.min(100,Math.round((ST.uaCount/maxR)*100));
  // Never allow progress to decrease
  if(rawPct>_maxPct)_maxPct=rawPct;
  document.getElementById('progress-fill').style.width=_maxPct+'%';
  document.getElementById('progress-lbl').textContent=_maxPct+'%';
  if(_maxPct>=90&&ST.simPhase==='active'&&!document.getElementById('wrapup-shown')){
    const marker=document.createElement('span');marker.id='wrapup-shown';marker.style.display='none';document.body.appendChild(marker);
    addSysMsg('📊 You\'ve reached ~90% of the target case length. You may wrap up now without penalty'+(isGr()?' to your grade':'')+', or continue if the case naturally has more to go.');
    showActionRow([{label:'✅ Wrap Up Simulation',cls:'debrief-action',fn:'endEarly()'}]);
  }
}

// ── Historian ──
export function addHE(e){
  ST.pushHistEntry(e);
  document.getElementById('hist-time').textContent=e.time||'T+??';
  const b=document.getElementById('hist-body');const d=document.createElement('div');
  d.className='he'+(e.correction?' hc':'');
  if(e.correction&&e.original)d.innerHTML=`<span class="ht">${esc(e.time)}</span><span class="hs">${esc(e.original)}</span><br><span class="hcr">→ ${esc(e.event)}</span>`;
  else d.innerHTML=`<span class="ht">${esc(e.time)}</span>${esc(e.event)}`;
  b.appendChild(d);b.scrollTop=b.scrollHeight;
}

// ══════════════════════════════════════════════════════════════
// LIBRARY — File upload, institution-specific sims, and landmark trials
// ══════════════════════════════════════════════════════════════
import * as ST from './state.js';
import { esc, showPage } from './ui.js';
import { LANDMARK_TRIALS } from './data_trials.js';

let libFiles=JSON.parse(localStorage.getItem('lib_files')||'[]');
let currentTrialSpecialty='Cardiology';

export function initLibrary(){renderLibFiles();renderTrials();}

export function handleLibUpload(e){
  const files=e.target.files;if(!files.length)return;
  Array.from(files).forEach(file=>{
    if(file.size>10*1024*1024){alert(file.name+' exceeds 10MB limit.');return;}
    if(libFiles.length>=5){alert('Maximum 5 files. Remove one first.');return;}
    const reader=new FileReader();
    reader.onload=ev=>{
      libFiles.push({name:file.name,size:file.size,type:file.type,data:ev.target.result,date:new Date().toISOString()});
      localStorage.setItem('lib_files',JSON.stringify(libFiles));
      renderLibFiles();
    };
    reader.readAsText(file);
  });
  e.target.value='';
}
window.handleLibUpload=handleLibUpload;

export function removeLibFile(idx){
  libFiles.splice(idx,1);
  localStorage.setItem('lib_files',JSON.stringify(libFiles));
  renderLibFiles();
}
window.removeLibFile=removeLibFile;

function renderLibFiles(){
  const list=document.getElementById('lib-file-list');
  const btn=document.getElementById('lib-sim-btn');
  if(!list)return;
  if(!libFiles.length){list.innerHTML='<p style="font-size:.72rem;color:var(--text-dim);text-align:center;padding:.5rem;">No files uploaded yet.</p>';btn.disabled=true;return;}
  btn.disabled=false;
  list.innerHTML=libFiles.map((f,i)=>{
    const sz=f.size>1024*1024?(f.size/1024/1024).toFixed(1)+'MB':(f.size/1024).toFixed(0)+'KB';
    return '<div class="lib-file"><div class="lib-file-info"><span>📄</span><span class="lib-file-name">'+esc(f.name)+'</span><span class="lib-file-size">'+sz+'</span></div><div class="lib-file-actions"><button class="lib-file-btn" onclick="removeLibFile('+i+')">✕</button></div></div>';
  }).join('');
}

export function startLibSim(){
  if(!libFiles.length){alert('Upload at least one document first.');return;}
  const ctx=libFiles.map(f=>'--- '+f.name+' ---\n'+(f.data||'').substring(0,15000)).join('\n\n');
  ST.S.prompt='Institution-specific simulation based on uploaded protocols/documents';
  document.getElementById('custom-prompt').value=ST.S.prompt;
  window._libContext=ctx;
  showPage('home');
  setTimeout(()=>window.startSim(),100);
}
window.startLibSim=startLibSim;

// ── Landmark Trials ──
function renderTrials(){
  const nav=document.getElementById('trials-nav');
  const body=document.getElementById('trials-body');
  if(!nav||!body)return;

  const specialties=Object.keys(LANDMARK_TRIALS);
  nav.innerHTML=specialties.map(s=>{
    const cls=s===currentTrialSpecialty?'trials-nav-btn active':'trials-nav-btn';
    return `<button class="${cls}" onclick="selectTrialSpecialty('${esc(s)}')">${esc(s)}</button>`;
  }).join('');

  const data=LANDMARK_TRIALS[currentTrialSpecialty];
  if(!data){body.innerHTML='';return;}

  // Handle both object (subcategories) and array (flat list like Oncology)
  if(Array.isArray(data)){
    body.innerHTML=data.map((t,i)=>renderTrialCard(t,`flat-${i}`)).join('');
  } else {
    body.innerHTML=Object.entries(data).map(([subcat,trials])=>{
      const cards=trials.map((t,i)=>renderTrialCard(t,`${subcat}-${i}`)).join('');
      return `<div class="trials-subcat">${esc(subcat)}</div>${cards}`;
    }).join('');
  }
}

function renderTrialCard(t,id){
  return `<div class="trial-card" id="trial-${esc(id)}" onclick="toggleTrialCard('trial-${esc(id)}')"><div class="trial-card-hdr"><div><span class="trial-name">${esc(t.name)}</span></div><div style="display:flex;align-items:center;gap:.4rem;"><span class="trial-meta">${t.year} · ${esc(t.journal)}</span><span class="trial-arrow">▼</span></div></div><div class="trial-body"><div class="trial-summary">${esc(t.summary)}</div><div class="trial-takeaway"><div class="trial-takeaway-label">Key Takeaway</div><div class="trial-takeaway-text">${esc(t.takeaway)}</div></div></div></div>`;
}

function selectTrialSpecialty(s){
  currentTrialSpecialty=s;
  renderTrials();
}
window.selectTrialSpecialty=selectTrialSpecialty;

function toggleTrialCard(id){
  const el=document.getElementById(id);
  if(el)el.classList.toggle('open');
}
window.toggleTrialCard=toggleTrialCard;

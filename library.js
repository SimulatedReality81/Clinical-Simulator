// ══════════════════════════════════════════════════════════════
// LIBRARY — File upload, landmark trials, clinical reference
// ══════════════════════════════════════════════════════════════
import * as ST from './state.js';
import { esc, showPage } from './ui.js';
import { LANDMARK_TRIALS } from './data_trials.js';
import { CLIN_REF_ALL } from './data_references.js';

let libFiles=JSON.parse(localStorage.getItem('lib_files')||'[]');
let currentTrialSpecialty='Cardiology';
let currentMGHChapter='All';

export function initLibrary(){renderLibFiles();renderTrials();renderLibMGH();}

// ── Tab switching ──
function switchLibTab(btn,tab){
  document.querySelectorAll('.lib-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.lib-section').forEach(s=>s.style.display='none');
  const sec=document.getElementById('lib-sec-'+tab);
  if(sec)sec.style.display='';
  if(tab==='trials')renderTrials();
  if(tab==='mgh')renderLibMGH();
}
window.switchLibTab=switchLibTab;

// ── File Upload ──
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

function selectTrialSpecialty(s){currentTrialSpecialty=s;renderTrials();}
window.selectTrialSpecialty=selectTrialSpecialty;

function toggleTrialCard(id){const el=document.getElementById(id);if(el)el.classList.toggle('open');}
window.toggleTrialCard=toggleTrialCard;

// ── MGH Reference (Library version) ──
const MGH_CHAPTER_COLORS={
  'Cardiology':'var(--accent-red)',
  'Pulmonary':'var(--accent-cyan)',
  'Nephrology':'var(--accent-blue)',
  'Gastroenterology':'var(--accent-amber)',
  'Endocrinology':'var(--accent-purple)',
  'Hematology':'var(--accent-orange)',
  'Infectious Disease':'var(--accent-green)',
  'Neurology':'#ec4899',
  'Rheumatology':'#8b5cf6',
  'General Medicine':'var(--text-secondary)',
};

function getChapterColor(ch){
  for(const[key,color] of Object.entries(MGH_CHAPTER_COLORS)){
    if(ch.toLowerCase().includes(key.toLowerCase()))return color;
  }
  return 'var(--accent-cyan)';
}

function cleanMGHContent(s){
  return s
    .replace(/\u2192/g,'→').replace(/\u2190/g,'←').replace(/\u2191/g,'↑').replace(/\u2193/g,'↓')
    .replace(/\u2194/g,'↔').replace(/\u21D2/g,'⇒')
    .replace(/\u2022/g,'•').replace(/\u25b6/g,'►').replace(/\u25ba/g,'►')
    .replace(/\u25cf/g,'●').replace(/\u25cb/g,'○')
    .replace(/\u2713/g,'✓').replace(/\u2714/g,'✓').replace(/\u2717/g,'✗').replace(/\u2718/g,'✗')
    .replace(/\u2264/g,'≤').replace(/\u2265/g,'≥').replace(/\u00b1/g,'±').replace(/\u00d7/g,'×')
    .replace(/\u00f7/g,'÷').replace(/\u2260/g,'≠').replace(/\u221e/g,'∞').replace(/\u2248/g,'≈')
    .replace(/\u00b0/g,'°').replace(/\u2030/g,'‰')
    .replace(/\u03b1/g,'α').replace(/\u03b2/g,'β').replace(/\u03b3/g,'γ')
    .replace(/\u03b4/g,'δ').replace(/\u03bc/g,'μ').replace(/\u03c3/g,'σ')
    .replace(/\u03b5/g,'ε').replace(/\u03bb/g,'λ').replace(/\u03c0/g,'π')
    .replace(/\u2070/g,'⁰').replace(/\u00b9/g,'¹').replace(/\u00b2/g,'²').replace(/\u00b3/g,'³')
    .replace(/\u2074/g,'⁴').replace(/\u2075/g,'⁵').replace(/\u207a/g,'⁺').replace(/\u207b/g,'⁻')
    .replace(/\u2080/g,'₀').replace(/\u2081/g,'₁').replace(/\u2082/g,'₂').replace(/\u2083/g,'₃')
    .replace(/\ufb01/g,'fi').replace(/\ufb02/g,'fl').replace(/\ufb00/g,'ff')
    .replace(/\ufb03/g,'ffi').replace(/\ufb04/g,'ffl')
    .replace(/\u2013/g,'–').replace(/\u2014/g,'—')
    .replace(/\u201c/g,'"').replace(/\u201d/g,'"').replace(/\u2018/g,"'").replace(/\u2019/g,"'")
    // Replace box-drawing and block element characters with meaningful symbols
    .replace(/[\u2580-\u259F]/g,'')
    .replace(/[\u25A0-\u25FF]/g,'●')
    .replace(/\uFFFD/g,'')
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g,'')
    // Clean spacing
    .replace(/([a-z])([A-Z]{2,})/g,'$1 $2')
    .replace(/[ \t]{3,}/g,'  ')
    .replace(/^\s+|\s+$/gm,'');
}

function formatMGHForLibrary(content, chapterColor){
  let cleaned=cleanMGHContent(content);
  // Limit length
  if(cleaned.length>2000)cleaned=cleaned.substring(0,2000)+'…';
  
  let html=cleaned
    .replace(/\\n/g,'\n')
    .replace(/\n{3,}/g,'\n\n')
    // Section headers (ALL CAPS lines)
    .replace(/^([A-Z][A-Z\s&:\/\-,()]{4,})$/gm,`<div class="mgh-section-hdr" style="color:${chapterColor}">$1</div>`)
    // Sub-headers with colons
    .replace(/^([A-Z][A-Za-z\s]{2,}:)/gm,`<span class="mgh-sub-hdr" style="color:${chapterColor}">$1</span>`)
    // Bullet points
    .replace(/^[•\-]\s*(.+)$/gm,'<div class="mgh-bullet">$1</div>')
    // Numbered items
    .replace(/^(\d+)[.)]\s*(.+)$/gm,'<div class="mgh-numbered"><strong>$1.</strong> $2</div>')
    // Sub-bullets (lines starting with 'o ')
    .replace(/^o\s+(.+)$/gm,'<div class="mgh-sub-bullet">$1</div>')
    // Line breaks
    .replace(/\n/g,'<br>');

  return html;
}

function renderLibMGH(){
  const nav=document.getElementById('lib-mgh-nav');
  const body=document.getElementById('lib-mgh-body');
  if(!nav||!body)return;

  const searchVal=(document.getElementById('lib-mgh-search')?.value||'').toLowerCase().trim();
  
  // Get unique chapters
  const chapters=['All',...new Set(CLIN_REF_ALL.map(r=>r.chapter))];
  nav.innerHTML=chapters.map(ch=>{
    const cls=ch===currentMGHChapter?'trials-nav-btn active':'trials-nav-btn';
    const color=ch!=='All'?getChapterColor(ch):'';
    const style=color?` style="border-color:${color};${ch===currentMGHChapter?'background:'+color+'22;color:'+color:'color:'+color}"`:``; 
    return `<button class="${cls}" onclick="selectMGHChapter('${esc(ch)}')"${style}>${esc(ch)}</button>`;
  }).join('');

  // Filter
  let refs=CLIN_REF_ALL;
  if(currentMGHChapter!=='All'){
    refs=refs.filter(r=>r.chapter===currentMGHChapter);
  }
  if(searchVal){
    refs=refs.filter(r=>r.topic.toLowerCase().includes(searchVal)||r.chapter.toLowerCase().includes(searchVal)||r.content.toLowerCase().includes(searchVal));
  }

  body.innerHTML=`<div style="font-size:.62rem;color:var(--text-dim);margin-bottom:.5rem;">${refs.length} topic${refs.length!==1?'s':''} found</div>`+
    refs.map((r,i)=>{
      const color=getChapterColor(r.chapter);
      const formattedContent=formatMGHForLibrary(r.content,color);
      return `<div class="mgh-lib-card" id="mgh-lib-${i}" onclick="toggleMGHLib(${i})">
        <div class="mgh-lib-hdr">
          <div><span class="mgh-lib-chapter" style="color:${color};border-color:${color}33;background:${color}11;">${esc(r.chapter)}</span>
          <span class="mgh-lib-topic">${esc(r.topic)}</span></div>
          <div style="display:flex;align-items:center;gap:.3rem;flex-shrink:0;">
            <span style="font-size:.5rem;color:var(--text-dim);font-family:'JetBrains Mono',monospace;">${esc(r.page)}</span>
            <span class="trial-arrow">▼</span>
          </div>
        </div>
        <div class="mgh-lib-body"><div class="mgh-lib-content">${formattedContent}</div>
          <div style="font-size:.55rem;color:var(--text-dim);font-style:italic;margin-top:.5rem;">Clinical Reference, ${esc(r.page)}</div>
        </div>
      </div>`;
    }).join('');
}

function selectMGHChapter(ch){currentMGHChapter=ch;renderLibMGH();}
window.selectMGHChapter=selectMGHChapter;

function toggleMGHLib(i){const el=document.getElementById('mgh-lib-'+i);if(el)el.classList.toggle('open');}
window.toggleMGHLib=toggleMGHLib;

function filterLibMGH(){renderLibMGH();}
window.filterLibMGH=filterLibMGH;

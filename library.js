// ══════════════════════════════════════════════════════════════
// LIBRARY — File upload and institution-specific simulations
// ══════════════════════════════════════════════════════════════
import * as ST from './state.js';
import { esc, showPage } from './ui.js';

let libFiles=JSON.parse(localStorage.getItem('lib_files')||'[]');

export function initLibrary(){renderLibFiles();}

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

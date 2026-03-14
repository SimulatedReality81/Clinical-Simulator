// ══════════════════════════════════════════════════════════════
// DRUGS — Drug reference page rendering
// ══════════════════════════════════════════════════════════════
import { DRUGS_DATA } from './data_drugs.js';
import { esc } from './ui.js';

let currentDrugSpec=null,currentDrugCat=null;

export function initDrugsPage(){
  const nav=document.getElementById('drugs-nav');
  const specs=Object.keys(DRUGS_DATA);
  nav.innerHTML=specs.map((s,i)=>'<button class="ref-nav-btn'+(s==='ICU'?' icu-btn':'')+(i===0?' active':'')+'" onclick="selectDrugSpec(\''+s+'\')">'+s+'</button>').join('');
  currentDrugSpec=specs[0];currentDrugCat=null;
  renderDrugSubcats();
}

function selectDrugSpec(spec){
  currentDrugSpec=spec;currentDrugCat=null;
  document.querySelectorAll('#drugs-nav .ref-nav-btn').forEach(b=>{b.classList.toggle('active',b.textContent===spec);});
  renderDrugSubcats();document.getElementById('drugs-detail').innerHTML='';
}
window.selectDrugSpec=selectDrugSpec;

function renderDrugSubcats(){
  const cats=Object.keys(DRUGS_DATA[currentDrugSpec]||{});
  const el=document.getElementById('drugs-subcats');
  el.innerHTML='<div class="ref-subcat-header">Drug Categories</div><div class="ref-subcat-chips">'+cats.map(c=>'<button class="ref-subcat-btn" onclick="selectDrugCat(\''+c.replace(/'/g,"\\'")+'\')">'+c+'</button>').join('')+'</div>';
}

function selectDrugCat(cat){
  currentDrugCat=cat;
  document.querySelectorAll('#drugs-subcats .ref-subcat-btn').forEach(b=>{b.classList.toggle('active',b.textContent===cat);});
  const drugs=DRUGS_DATA[currentDrugSpec]?.[cat]||[];
  const el=document.getElementById('drugs-detail');
  el.innerHTML=drugs.map(d=>{
    const tags=d.tags?d.tags.map(t=>'<span class="drug-tag '+t+'">'+t.replace('-',' ')+'</span>').join(''):'';
    return '<div class="drug-detail"><h4>'+tags+' '+esc(d.name)+'</h4><table><tr><th>MOA</th><td>'+esc(d.moa)+'</td></tr><tr><th>Dose</th><td>'+esc(d.dose)+'</td></tr><tr><th>Route</th><td>'+esc(d.route)+'</td></tr><tr><th>Indication</th><td>'+esc(d.indication)+'</td></tr><tr><th>Pearls</th><td style="color:var(--accent-amber);">'+esc(d.pearls)+'</td></tr><tr><th>Side Effects</th><td style="color:var(--accent-red);">'+esc(d.se)+'</td></tr></table></div>';
  }).join('');
}
window.selectDrugCat=selectDrugCat;

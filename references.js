// ══════════════════════════════════════════════════════════════
// REFERENCES — MGH Whitebook reference panel
// ══════════════════════════════════════════════════════════════
import { MGH_REF_ALL } from './data_references.js';
import { esc } from './ui.js';
import * as ST from './state.js';

export function togRef(){document.getElementById('ref-panel').classList.toggle('rp-hide');}
window.togRef=togRef;

function cleanRefText(s){
  return s.replace(/\u2192/g,'→').replace(/\u2190/g,'←').replace(/\u2191/g,'↑').replace(/\u2193/g,'↓')
    .replace(/\u2022/g,'•').replace(/\u25b6/g,'►').replace(/\u25ba/g,'►').replace(/\u25cf/g,'•')
    .replace(/\u2713/g,'✓').replace(/\u2714/g,'✓').replace(/\u2717/g,'✗').replace(/\u2718/g,'✗')
    .replace(/\u2264/g,'≤').replace(/\u2265/g,'≥').replace(/\u00b1/g,'±').replace(/\u00d7/g,'×')
    .replace(/\u00f7/g,'÷').replace(/\u03b1/g,'α').replace(/\u03b2/g,'β').replace(/\u03b3/g,'γ')
    .replace(/\u03b4/g,'δ').replace(/\u03bc/g,'μ').replace(/\u03c3/g,'σ')
    .replace(/\u2070/g,'⁰').replace(/\u00b9/g,'¹').replace(/\u00b2/g,'²').replace(/\u00b3/g,'³')
    .replace(/\u2070|\x00|\ufffd/g,'')
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g,'')
    .replace(/\ufb01/g,'fi').replace(/\ufb02/g,'fl').replace(/\ufb00/g,'ff')
    .replace(/\ufb03/g,'ffi').replace(/\ufb04/g,'ffl')
    .replace(/([a-z])([A-Z]{2,})/g,'$1 $2')
    .replace(/[ \t]{3,}/g,'  ')
    .replace(/[\u2580-\u259F\uFFFD\u25A0-\u25FF]/g,'')
    .replace(/(\w)\n(\w)/g,'$1 $2')
    .replace(/^\s+|\s+$/gm,'');
}

export function renderRef(){
  const body=document.getElementById('ref-body');
  const searchVal=document.getElementById('ref-search')?document.getElementById('ref-search').value.toLowerCase().trim():'';
  let toShow;
  if(searchVal.length>0){
    toShow=MGH_REF_ALL.filter(r=>r.topic.toLowerCase().includes(searchVal)||r.chapter.toLowerCase().includes(searchVal)||r.content.toLowerCase().includes(searchVal));
  } else if(ST.currentCaseTopics.length>0){
    toShow=MGH_REF_ALL.filter(r=>{const tl=r.topic.toLowerCase(),cl=r.chapter.toLowerCase();return ST.currentCaseTopics.some(kw=>tl.includes(kw.toLowerCase())||cl.includes(kw.toLowerCase()));});
    if(toShow.length===0)toShow=MGH_REF_ALL;
  } else {toShow=MGH_REF_ALL;}
  const inCase=ST.currentCaseTopics.length>0&&searchVal.length===0;
  if(inCase&&toShow.length>5)toShow=toShow.slice(0,5);
  const headerEl=document.getElementById('ref-filter-info');
  if(headerEl){headerEl.textContent=searchVal.length>0?`Search: ${toShow.length} results`:inCase?`Top 5 case-relevant sections · Search for any topic`:`All topics (${toShow.length})`;}
  body.innerHTML=toShow.map((r)=>{
    const cleanContent=cleanRefText(r.content);
    const truncated=cleanContent.length>1500?cleanContent.substring(0,1500)+'...':cleanContent;
    const formattedContent=truncated
      .replace(/\\n/g,'\n').replace(/\n{3,}/g,'\n\n')
      .replace(/^([A-Z][A-Z\s&:\/\-]{4,})$/gm,'<strong style="color:var(--accent-cyan);font-size:.72rem;">$1</strong>')
      .replace(/^[•\-]\s*(.+)$/gm,'<span style="display:block;padding-left:.6rem;border-left:2px solid var(--accent-blue);margin:.15rem 0;">$1</span>')
      .replace(/^(\d+)[.)]\s*(.+)$/gm,'<span style="display:block;padding-left:.6rem;border-left:2px solid var(--accent-purple);margin:.15rem 0;"><strong>$1.</strong> $2</span>')
      .replace(/\n/g,'<br>');
    return `<div class="ref-item" data-topic="${esc(r.topic).toLowerCase()}"><div class="ref-item-hdr" onclick="togRefItem(this)"><span style="font-size:.58rem;color:var(--text-dim);margin-right:.25rem;">[${esc(r.chapter)}]</span>${esc(r.topic)} <span style="font-size:.6rem;color:var(--text-dim)">▶</span></div><div class="ref-item-body"><div style="line-height:1.55;font-size:.69rem;">${formattedContent}</div><div class="ref-item-src">Source: MGH Housestaff Manual 2023-2024, ${r.page}</div></div></div>`;
  }).join('');
}

function togRefItem(hdr){hdr.classList.toggle('open');hdr.nextElementSibling.classList.toggle('open');}
window.togRefItem=togRefItem;

export function filterRef(){renderRef();}
window.filterRef=filterRef;

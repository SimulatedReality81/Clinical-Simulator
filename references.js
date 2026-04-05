// ══════════════════════════════════════════════════════════════
// REFERENCES — Clinical reference panel (in-simulation)
// ══════════════════════════════════════════════════════════════
import { CLIN_REF_ALL } from './data_references.js';
import { esc } from './ui.js';
import * as ST from './state.js';

export function togRef(){document.getElementById('ref-panel').classList.toggle('rp-hide');}
window.togRef=togRef;

function cleanRefText(s){
  return s
    // Common Unicode arrows and symbols
    .replace(/\u2192/g,'→').replace(/\u2190/g,'←').replace(/\u2191/g,'↑').replace(/\u2193/g,'↓')
    .replace(/\u2194/g,'↔').replace(/\u21D2/g,'⇒').replace(/\u21D0/g,'⇐')
    // Bullets and shapes
    .replace(/\u2022/g,'•').replace(/\u25b6/g,'►').replace(/\u25ba/g,'►').replace(/\u25cf/g,'●')
    .replace(/\u25cb/g,'○').replace(/\u25a0/g,'■').replace(/\u25a1/g,'□').replace(/\u25aa/g,'▪')
    // Checkmarks and crosses
    .replace(/\u2713/g,'✓').replace(/\u2714/g,'✓').replace(/\u2717/g,'✗').replace(/\u2718/g,'✗')
    // Math symbols
    .replace(/\u2264/g,'≤').replace(/\u2265/g,'≥').replace(/\u00b1/g,'±').replace(/\u00d7/g,'×')
    .replace(/\u00f7/g,'÷').replace(/\u2260/g,'≠').replace(/\u221e/g,'∞').replace(/\u2248/g,'≈')
    .replace(/\u00b0/g,'°').replace(/\u2030/g,'‰')
    // Greek letters
    .replace(/\u03b1/g,'α').replace(/\u03b2/g,'β').replace(/\u03b3/g,'γ')
    .replace(/\u03b4/g,'δ').replace(/\u03bc/g,'μ').replace(/\u03c3/g,'σ')
    .replace(/\u03b5/g,'ε').replace(/\u03bb/g,'λ').replace(/\u03c0/g,'π')
    // Superscripts and subscripts
    .replace(/\u2070/g,'⁰').replace(/\u00b9/g,'¹').replace(/\u00b2/g,'²').replace(/\u00b3/g,'³')
    .replace(/\u2074/g,'⁴').replace(/\u2075/g,'⁵').replace(/\u2076/g,'⁶')
    .replace(/\u2077/g,'⁷').replace(/\u2078/g,'⁸').replace(/\u2079/g,'⁹')
    .replace(/\u207a/g,'⁺').replace(/\u207b/g,'⁻')
    .replace(/\u2080/g,'₀').replace(/\u2081/g,'₁').replace(/\u2082/g,'₂').replace(/\u2083/g,'₃')
    // Ligatures
    .replace(/\ufb01/g,'fi').replace(/\ufb02/g,'fl').replace(/\ufb00/g,'ff')
    .replace(/\ufb03/g,'ffi').replace(/\ufb04/g,'ffl')
    // Dashes and quotes
    .replace(/\u2013/g,'–').replace(/\u2014/g,'—')
    .replace(/\u201c/g,'"').replace(/\u201d/g,'"').replace(/\u2018/g,"'").replace(/\u2019/g,"'")
    // Remove junk characters — boxes, replacement chars, null bytes, block elements
    .replace(/[\u2580-\u259F\uFFFD\u25A0-\u25FF]/g,'')
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g,'')
    .replace(/\x00|\ufffd/g,'')
    // Clean up spacing
    .replace(/([a-z])([A-Z]{2,})/g,'$1 $2')
    .replace(/[ \t]{3,}/g,'  ')
    .replace(/(\w)\n(\w)/g,'$1 $2')
    .replace(/^\s+|\s+$/gm,'');
}

export function renderRef(){
  const body=document.getElementById('ref-body');
  const searchVal=document.getElementById('ref-search')?document.getElementById('ref-search').value.toLowerCase().trim():'';
  let toShow;
  if(searchVal.length>0){
    toShow=CLIN_REF_ALL.filter(r=>r.topic.toLowerCase().includes(searchVal)||r.chapter.toLowerCase().includes(searchVal)||r.content.toLowerCase().includes(searchVal));
  } else if(ST.currentCaseTopics.length>0){
    toShow=CLIN_REF_ALL.filter(r=>{const tl=r.topic.toLowerCase(),cl=r.chapter.toLowerCase();return ST.currentCaseTopics.some(kw=>tl.includes(kw.toLowerCase())||cl.includes(kw.toLowerCase()));});
    if(toShow.length===0)toShow=CLIN_REF_ALL;
  } else {toShow=CLIN_REF_ALL;}
  const inCase=ST.currentCaseTopics.length>0&&searchVal.length===0;
  if(inCase&&toShow.length>5)toShow=toShow.slice(0,5);
  const headerEl=document.getElementById('ref-filter-info');
  if(headerEl){headerEl.textContent=searchVal.length>0?`Search: ${toShow.length} results`:inCase?`Top 5 case-relevant sections · Search for any topic`:`All topics (${toShow.length})`;}

  const chapterColors={
    'Cardiology':'#ef4444','Pulmonary':'#06b6d4','Nephrology':'#3b82f6',
    'Gastroenterology':'#f59e0b','Endocrinology':'#a855f7','Hematology':'#f97316',
    'Infectious':'#22c55e','Neurology':'#ec4899','Rheumatology':'#8b5cf6'
  };
  function getColor(ch){for(const[k,v] of Object.entries(chapterColors)){if(ch.toLowerCase().includes(k.toLowerCase()))return v;}return '#06b6d4';}

  body.innerHTML=toShow.map((r)=>{
    const cleanContent=cleanRefText(r.content);
    const truncated=cleanContent.length>1500?cleanContent.substring(0,1500)+'…':cleanContent;
    const color=getColor(r.chapter);
    const formattedContent=truncated
      .replace(/\\n/g,'\n').replace(/\n{3,}/g,'\n\n')
      .replace(/^([A-Z][A-Z\s&:\/\-,()]{4,})$/gm,`<div style="font-family:'JetBrains Mono',monospace;font-size:.6rem;font-weight:700;color:${color};margin:.5rem 0 .2rem;padding:.15rem .3rem;border-left:3px solid ${color};background:${color}08;">$1</div>`)
      .replace(/^([A-Z][A-Za-z\s]{2,}:)/gm,`<span style="font-weight:700;color:${color};">$1</span>`)
      .replace(/^[•\-]\s*(.+)$/gm,'<span style="display:block;padding-left:.5rem;border-left:2px solid var(--accent-blue);margin:.1rem 0;font-size:.66rem;">$1</span>')
      .replace(/^(\d+)[.)]\s*(.+)$/gm,'<span style="display:block;padding-left:.5rem;border-left:2px solid var(--accent-purple);margin:.1rem 0;font-size:.66rem;"><strong>$1.</strong> $2</span>')
      .replace(/\n/g,'<br>');
    return `<div class="ref-item" data-topic="${esc(r.topic).toLowerCase()}"><div class="ref-item-hdr" onclick="togRefItem(this)"><span style="font-size:.5rem;color:${color};font-weight:600;margin-right:.25rem;font-family:'JetBrains Mono',monospace;">[${esc(r.chapter)}]</span>${esc(r.topic)} <span style="font-size:.6rem;color:var(--text-dim)">▶</span></div><div class="ref-item-body"><div style="line-height:1.55;font-size:.67rem;">${formattedContent}</div><div class="ref-item-src">Clinical Reference, ${r.page}</div></div></div>`;
  }).join('');
}

function togRefItem(hdr){hdr.classList.toggle('open');hdr.nextElementSibling.classList.toggle('open');}
window.togRefItem=togRefItem;

export function filterRef(){renderRef();}
window.filterRef=filterRef;

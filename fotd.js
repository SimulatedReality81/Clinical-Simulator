// ══════════════════════════════════════════════════════════════
// FOTD — Fact of the Day
// ══════════════════════════════════════════════════════════════
import { FOTD_FACTS } from './data_fotd.js';

const FOTD_CATEGORIES = [...new Set(FOTD_FACTS.map(f => f.cat))];
let currentFOTD=null;
let lastFOTDCategory=null;

export function initFOTD(){
  const idx=Math.floor(Math.random()*FOTD_FACTS.length);
  currentFOTD=FOTD_FACTS[idx];
  lastFOTDCategory=currentFOTD.cat;
  document.getElementById('fotd-cat').textContent=currentFOTD.topic + ' · ' + currentFOTD.cat;
  document.getElementById('fotd-txt').textContent=currentFOTD.fact;
}

export function nextFOTD(){
  const otherCats=FOTD_CATEGORIES.filter(c=>c!==lastFOTDCategory);
  const nextCat=otherCats[Math.floor(Math.random()*otherCats.length)];
  const pool=FOTD_FACTS.filter(f=>f.cat===nextCat&&f.topic!==(currentFOTD?currentFOTD.topic:''));
  const idx=Math.floor(Math.random()*pool.length);
  currentFOTD=pool[idx]||FOTD_FACTS[0];
  lastFOTDCategory=currentFOTD.cat;
  document.getElementById('fotd-cat').textContent=currentFOTD.topic + ' · ' + currentFOTD.cat;
  document.getElementById('fotd-txt').textContent=currentFOTD.fact;
}
window.nextFOTD=nextFOTD;

export function showFOTDModal(){
  if(!currentFOTD)return;
  var el_t=document.getElementById('fotd-modal-title');
  var el_b=document.getElementById('fotd-modal-body');
  var el_o=document.getElementById('fotd-overlay');
  if(el_t)el_t.textContent=currentFOTD.topic+' ('+currentFOTD.cat+')';
  if(el_b)el_b.textContent=currentFOTD.context||currentFOTD.fact;
  if(el_o)el_o.style.display='flex';
}
window.showFOTDModal=showFOTDModal;

export function closeFOTD(){var el=document.getElementById('fotd-overlay');if(el)el.style.display='none';}
window.closeFOTD=closeFOTD;

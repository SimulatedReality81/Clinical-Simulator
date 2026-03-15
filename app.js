// ══════════════════════════════════════════════════════════════
// APP — Main entry point, initializes all modules
// ══════════════════════════════════════════════════════════════
import * as ST from './state.js';
import { applyTheme, initSp, refreshUI, initDefaultName } from './ui.js';
import { initFOTD } from './fotd.js';
import { initLibrary } from './library.js';
import { renderRef } from './references.js';
import './simulation.js';

// Initialize category chips
(function(){
  const rc=document.getElementById('rr-cats');
  ST.IM_CATS.forEach(c=>{
    const b=document.createElement('button');b.className='cc';b.textContent=`${c.n} (${c.p}%)`;b.dataset.cat=c.n;
    b.onclick=()=>{
      const maxCats=ST.S.scType==='genim'?ST.MAX_CATS_ACLS:ST.MAX_CATS_RR;
      if(!b.classList.contains('active')&&document.querySelectorAll('#rr-cats .cc.active').length>=maxCats){alert(`Maximum ${maxCats} ${maxCats===1?'category':'categories'} for ${ST.S.scType==='genim'?'General IM':'Rapid Response'}. Deselect one first.`);return;}
      b.classList.toggle('active');ST.S.selCatsRR=[...document.querySelectorAll('#rr-cats .cc.active')].map(x=>x.dataset.cat);
    };rc.appendChild(b);
  });
  const ac=document.getElementById('acls-cats');
  ST.HT_CATS.forEach(c=>{
    const b=document.createElement('button');b.className='cc acls-cat';b.textContent=c;b.dataset.cat=c;
    b.onclick=()=>{
      if(!b.classList.contains('active')&&document.querySelectorAll('#acls-cats .cc.active').length>=ST.MAX_CATS_ACLS){alert('Maximum 4 categories. Deselect one first.');return;}
      b.classList.toggle('active');ST.S.selCatsACLS=[...document.querySelectorAll('#acls-cats .cc.active')].map(x=>x.dataset.cat);
    };ac.appendChild(b);
  });
  // ICU/CCM categories
  const ic=document.getElementById('icu-cats');
  ST.CCM_CATS.forEach(c=>{
    const b=document.createElement('button');b.className='cc icu-cat';b.textContent=`${c.n} (${c.p}%)`;b.dataset.cat=c.n;
    b.onclick=()=>{
      if(!b.classList.contains('active')&&document.querySelectorAll('#icu-cats .cc.active').length>=ST.MAX_CATS_ICU){alert('Maximum 3 categories. Deselect one first.');return;}
      b.classList.toggle('active');ST.S.selCatsICU=[...document.querySelectorAll('#icu-cats .cc.active')].map(x=>x.dataset.cat);
    };ic.appendChild(b);
  });
})();

// Initialize
initSp();
applyTheme('auto');
initDefaultName();
initFOTD();
initLibrary();
renderRef();

// ══════════════════════════════════════════════════════════════
// SIMULATION — Core simulation logic, API calls via backend proxy
// ══════════════════════════════════════════════════════════════
import { WORKER_URL, MODEL, MAX_TOKENS } from './config.js';
import * as ST from './state.js';
import { esc, fmtMd, showT, updIS, addMsg, addSysMsg, showPage, showActionRow, showBackHomeBtn, isGr, useTP, resolveMinR, updateProgress, resetProgress, addHE, togOrders } from './ui.js';
import { renderRef } from './references.js';
import { saveSc, saveSim } from './scores.js';

// ── Helpers ──
function wRC(){const pool=ST.IM_CATS;const t=pool.reduce((s,c)=>s+c.p,0);let r=Math.random()*t;for(const c of pool){r-=c.p;if(r<=0)return c.n;}return pool[pool.length-1].n;}
function wRC_ICU(){const pool=ST.CCM_CATS;const t=pool.reduce((s,c)=>s+c.p,0);let r=Math.random()*t;for(const c of pool){r-=c.p;if(r<=0)return c.n;}return pool[pool.length-1].n;}
function pickACLSCause(){const avail=ST.HT_CATS.filter(c=>c!==ST.S.lastACLSCause);const pick=avail[Math.floor(Math.random()*avail.length)];ST.S.lastACLSCause=pick;return pick;}

// ── System Prompt Builder ──
function buildSP(){
  const ez=ST.S.diff==='easy',rt=ST.S.fb==='realtime',gr=isGr(),tp=useTP(),nm=ST.S.docName?`Dr. ${ST.S.docName}`:'Doctor',isA=ST.S.scType==='acls',isGenIM=ST.S.scType==='genim',isICU=ST.S.scType==='genicu',cp=ST.S.prompt.trim(),mr=resolveMinR();
  let catInst='';
  if(isA){
    if(ST.S.selCatsACLS.length>0)catInst=`User wants a scenario involving: ${ST.S.selCatsACLS.join(', ')}. Build around one of these.`;
    else if(!cp){const cause=pickACLSCause();catInst=`Generate a scenario caused by: **${cause}**. Never repeat the same cause consecutively.`;}
  }else if(isICU){
    if(ST.S.selCatsICU.length>0){
      if(ST.S.selCatsICU.length>1)catInst=`User selected ${ST.S.selCatsICU.length} CCM categories: ${ST.S.selCatsICU.join(', ')}. Create a COMPLEX ICU patient who has active issues from EACH of these categories simultaneously.`;
      else catInst=`User wants a CCM scenario in: ${ST.S.selCatsICU[0]}.`;
    }
    else if(!cp){const cat=wRC_ICU();catInst=`Generate a scenario in: **${cat}**. Use CCM board weighted distribution.`;}
  }else{
    if(ST.S.selCatsRR.length>0){
      if(ST.S.selCatsRR.length>1)catInst=`User selected ${ST.S.selCatsRR.length} categories: ${ST.S.selCatsRR.join(', ')}. Create a COMPLEX patient who has active issues from EACH of these categories simultaneously. The patient should require the resident to address problems from all ${ST.S.selCatsRR.length} disciplines during the case.`;
      else catInst=`User wants a scenario in: ${ST.S.selCatsRR[0]}.`;
    }
    else if(!cp){const cat=wRC();catInst=`Generate a scenario in: **${cat}**. Use IM board weighted distribution.`;}
  }

  const admissionInstructions=`ED ADMISSION SIMULATION — ${isICU?'ICU':'General IM'} Clinical Case

You are the ${isICU?'ICU fellow/resident':'medicine resident'} receiving a new ${isICU?'ICU':'floor/stepdown'} admission from the ED. The scenario begins with a sign-out call from the ED provider.

FORMAT:
1. **ED Sign-Out Opening:** Start as an ED provider calling to give you a sign-out. Present the patient conversationally: chief complaint, brief history, relevant PMH, key vitals, ED exam findings, and what the ED has started. DO NOT provide lab results or imaging findings — the user will order their own workup. Mention only that "labs are pending" or "we drew a panel" without giving results.
2. **After Questions:** The simulation begins when you (the user) receive the patient. Present new information ONLY as the user orders it — if they order labs, return those results; if they order imaging, return those findings.
3. **ORDERS SYSTEM:** The user will submit orders through an orders panel. When orders are submitted, acknowledge them and return results for the ordered tests. If the user orders something inappropriate or unnecessary, return the results anyway but note it in feedback if applicable. NEVER suggest what to order.
4. **HOME MEDICATION RECONCILIATION:** You MUST include a HOME_MEDS block with an ANSWER_KEY in your first response (see format below). Some meds should clearly need to be held and some continued given the acute presentation. The user will make continue/hold/change decisions before the simulation progresses.
5. **Progression:** As the case develops, new issues arise that require management decisions. The case should build complexity over time.${isICU?'\n6. **ICU-SPECIFIC:** Include ventilator management, vasopressor titration, sedation, invasive monitoring, organ support decisions as appropriate. Focus on critical care management principles.':''}
6. **If the resident misses important orders** (e.g. DVT prophylaxis, appropriate diet, key labs), do NOT prompt them — reflect it in feedback.`;

  const typeLabel=isA?'ACLS':isGenIM?'Internal Medicine':isICU?'Critical Care Medicine':'Rapid Response';
  const typeDesc=isA?'ACLS CODE BLUE':isGenIM?'GENERAL INTERNAL MEDICINE — ED ADMISSION':isICU?'GENERAL ICU — ED ADMISSION':'RAPID RESPONSE';
  const typeExpl=isA?'Cardiac arrest → ACLS algorithms → ROSC or termination.':(isGenIM||isICU)?admissionInstructions:'Acute deterioration. Focus on recognition, stabilization, escalation. May progress to arrest if mismanaged.';

  const libCtx=window._libContext||'';
  const libInst=libCtx?'\n## INSTITUTION-SPECIFIC CONTEXT\nThe following are institution-specific documents uploaded by the user. Incorporate relevant protocols, antibiograms, and clinical pathways into the simulation when appropriate:\n'+libCtx.substring(0,12000)+'\n':'';
  let prompt = `You are an expert ${typeLabel} simulation instructor for **${nm}**.

## TYPE: ${typeDesc}
${typeExpl}
${catInst}
${libInst}${cp?`## USER SCENARIO: "${cp}"\n`:'## Generate a UNIQUE random scenario each time.\n'}

## DIFFICULTY: ${ez?'EASY':'HARD'}
${ez?`Straightforward. ${isA?'Standard rhythms: VFib, pVTach, PEA, Asystole.':'Clear presentations.'} Core decisions.`:`Full realism. 80% classic causes, 20% complex. Include vitals, rhythm descriptions, labs, PE, imaging. Team dynamics.`}

## STAFF NAMES: Do NOT use names for any team members (nurses, respiratory therapists, pharmacy, etc.). Refer to them only by role: "the nurse," "the respiratory therapist," "the pharmacist," "the tech." Only the user (${nm}) should be addressed by name.

## VITAL SIGNS: Whenever you report a blood pressure, ALWAYS include the MAP. Format: "BP 85/60 (MAP 68)" — no exceptions.

## SIMULATION FLOW
1. **Opening:** Vivid scenario. Setting, patient, how response was called, initial picture.
2. **HOME MEDICATIONS LIST:** In your VERY FIRST response, you MUST include a structured list of the patient's home medications. This list should be realistic and relevant to the patient's medical history. Format it as a special block:
   HOME_MEDS_START
   MED: [Drug Name] | [Dose & Frequency] | [Indication] | [CORRECT_ACTION: continue/hold/change] | [REASON: 1 sentence why]
   MED: [Drug Name] | [Dose & Frequency] | [Indication] | [CORRECT_ACTION: continue/hold/change] | [REASON: 1 sentence why]
   ...
   HOME_MEDS_END
   Include 6-12 medications that are realistic for the patient's age and comorbidities. IMPORTANT: At least 2-3 medications MUST clearly need to be HELD given the acute presentation (e.g. holding ACE inhibitor in AKI, holding metformin before contrast, holding anticoagulant pre-procedure). The CORRECT_ACTION and REASON fields are used for feedback — they will NOT be shown to the user until they submit their decisions. This block will be parsed and displayed in a side panel for the user to make decisions on.
3. **Decision Points:** After each segment, STOP and ask ONLY neutral prompts:
   - "What would you like to do next, ${nm}?"
   - "What are your orders?"
   - "How do you want to proceed?"
   
   **ABSOLUTE RULES FOR PROMPTING:**
   - NEVER suggest, hint at, or list possible next actions
   - NEVER have nurses/staff suggest treatments or ask leading questions like "Should we intubate?" or "What about [specific treatment]?"
   - NEVER list available medications or interventions unless ${nm} specifically asks what's available
   - Staff should only report OBJECTIVE findings: vitals, labs, rhythm, physical exam findings
   - Staff can say things like "Labs are back" or "The monitor shows..." but NEVER "Should we consider..." or "[Drug] is available if needed"
   - If the user misses something important, do NOT prompt them — let it be reflected in feedback/grading

3. **Realism:** Evolve based on actions. Wrong actions → realistic consequences.
4. **Length:** The case should aim for approximately ${mr} user responses as a MAXIMUM. As the case approaches this limit, begin wrapping up the scenario naturally — resolve the acute problem and bring the case to a clear conclusion. Do NOT introduce new complications after reaching 70% of this target (roughly ${Math.round(mr*0.7)} responses). By 90% of the target, the case MUST be concluding with "SIMULATION COMPLETE." The complexity of the case should match the allotted length.
5. **SIMULATION END PROTOCOL:**
   - When ROSC is achieved or the scenario reaches its natural conclusion, clearly state "**SIMULATION COMPLETE**" 
   - Provide a brief outcome summary
   - Then STOP. Do not provide feedback yet. Do not ask more questions.
   - Wait for the user to request feedback or debrief.

6. **"I'M NOT SURE" REQUESTS:** If the resident says "I'm not sure" or asks for help with the next step, tell them the correct next step with a brief clinical explanation of why. Then continue the simulation. In graded simulations, each "I'm not sure" usage costs 5 points automatically — track every occurrence and deduct in the final score.

## FEEDBACK FORMAT (when requested after debrief):
When providing feedback, ALWAYS begin with a comprehensive list of ALL possible orders and actions the user could have considered at each step of the simulation. Format as:
**Complete List of Possible Orders (by step):**
- Step 1 (initial assessment): [all reasonable orders]
- Step 2 (after [finding]): [all reasonable orders]
- ... continue for each step
Then provide detailed performance feedback.${isA?' Include all H&T causes that should have been considered.':''}

${tp?`## TIME PRESSURE
Track simulated time from T+0:00. Every response MUST include timestamp with units (e.g., T+2:00 min, T+5:30 min). Narrate time realistically with units: "2 minutes of CPR have elapsed," "It has been 8 minutes since the last dose of epinephrine." Track CPR cycles (switch every 2 minutes), medication timing (epi every 3-5 minutes, amio timing). Create urgency.
Each response MUST include on its own line: HISTORIAN_LOG:{"time":"T+X:XX min","event":"description","correction":false}
For corrections: HISTORIAN_LOG:{"time":"T+X:XX min","event":"Corrected: [new]","correction":true,"original":"[old]"}
Grade medication timing as part of Core Algorithm Adherence.`:''}

## FEEDBACK MODE: ${rt?'REAL-TIME':'END-OF-SIMULATION'}
${rt?`After each action:
- Correct: ✅ 1-2 sentence confirmation in a clearly separated feedback line.
- Incorrect: ⚠️ Explain what's wrong and what's better in a clearly separated feedback line.
- **Separate feedback visually** — put it on its own line with the ✅ or ⚠️ prefix. Do NOT weave suggestions into the narrative.
- Then continue the simulation. NEVER hint at next steps after feedback.`
:`- No feedback during sim. If incorrect: one retry — "Are you sure? [relevant clinical info]. What would you like to do?"
- Wrong twice: state correct action, continue as if correct.
- DO NOT provide feedback until user explicitly requests it after simulation ends.`}

${gr?`## GRADING
After user requests feedback post-simulation, provide score 1-100. GRADE STRICTLY — this is for medical residents who need honest assessment.
**Criteria (3 categories only — NO team leadership category):**
1. **Core Algorithm Adherence (45 pts):** Correct rhythm/condition identification, appropriate interventions, proper medication TIMING and dosing, CPR quality, airway management, defibrillation decisions.${tp?' Medication timing accuracy is critical — track intervals between doses.':''}
   - **Medication timing is heavily weighted:** Epinephrine should be given every 3-5 minutes. If a resident waits 8+ minutes between epi doses, deduct 5-8 points. If they wait 10+ minutes, deduct 8-12 points. Delays in time-critical medications are serious errors.
   - **Inappropriate interventions:** If a resident attempts defibrillation on a non-shockable rhythm (PEA, asystole), deduct 8-10 points. This demonstrates a fundamental misunderstanding of the algorithm.
   - **Missed rhythm recognition:** Failure to correctly identify the rhythm should result in 5-8 point deduction.

2. **Reversible Cause Identification & Treatment (30 pts):** Identifying the underlying cause and initiating ALL appropriate cause-specific treatments.
   - **Partial identification:** If the resident identifies the cause but misses key treatments, deduct proportionally.
   - **Failure to identify cause:** If the resident never identifies the reversible cause, deduct 20-25 points.
   - **Late identification:** If identification comes very late in the simulation, deduct 5-10 points.

3. **Medical Insight & Clinical Reasoning (25 pts):** Deeper understanding beyond rote algorithm, anticipation of complications, recognition of subtle clues, appropriate prioritization.
   - Grade this SEPARATELY and explain it separately in the debrief.
   - This rewards residents who demonstrate WHY they're making decisions, not just WHAT decisions.
   - Residents who show only basic algorithm knowledge with no deeper reasoning should score 10-15/25 maximum.

   - **"I'm not sure" button usage:** The user loses 5 points EACH TIME they use the help button. Track this — the system will tell you how many times it was used.

**STRICT GRADING RULES:**
- Do NOT penalize for brevity/informal language ("push epi" = correct) or minor typos.
- DO penalize HEAVILY for: wrong interventions, missed critical steps, medication timing delays, failure to identify reversible causes, dangerous decisions.
- A "perfect" simulation should score around 85-90, NOT 95-100. Reserve 95+ for truly exceptional performance.
- An "adequate" simulation with some errors should score 65-75.
- A simulation with significant errors should score 40-60.
- End-of-sim feedback mode: wrong 1st try corrected 2nd = 50% credit. Wrong both = 0 credit.
**Format:**
---
## 📊 Score: [X]/100
**Core Algorithm Adherence:** [X]/45 — [detailed explanation]
**Reversible Cause ID & Treatment:** [X]/30 — [detailed explanation]
**Medical Insight & Clinical Reasoning:** [X]/25 — [detailed explanation]
**Points Lost — Detailed Breakdown:**
- [Specific action/inaction]: -[X] points — [why this matters clinically]
---
End with: FINAL_SCORE:[number]`:''}

${ST.S.inputMode==='mc'?`
## MULTIPLE CHOICE MODE
After EVERY decision point, present EXACTLY 4 options labeled A, B, C, D. These must be **concrete clinical ACTIONS** the physician would physically DO — NOT discussion topics or communication choices.

**Format EXACTLY like this:**
**What is the best next step?**
A) [Specific clinical ACTION]
B) [Specific clinical ACTION]
C) [Specific clinical ACTION]
D) [Specific clinical ACTION]

**CRITICAL RULES:**
1. **ONE clearly correct answer** — the single best next action based on current clinical evidence and guidelines
2. **THREE incorrect answers** — plausible but clearly wrong
3. Randomize which letter (A-D) is correct
4. **All options must be ACTIONS** — orders, interventions, medications with doses, or physical maneuvers
5. After the user selects, respond with:
   - If CORRECT: "✅ **Correct!**" followed by explanation, then continue
   - If INCORRECT: "❌ **Incorrect.** The correct answer was [X]." followed by explanation. Continue AS IF the correct action was taken
6. NEVER have two options that could both be considered "correct"`:''}

Begin now.`;
  return prompt;
}

// ── Start Simulation ──
export async function startSim(){
  ST.S.docName=document.getElementById('doc-name').value.trim();
  ST.S.prompt=document.getElementById('custom-prompt').value.trim();
  ST.S.selCatsRR=[...document.querySelectorAll('#rr-cats .cc.active')].map(x=>x.dataset.cat);
  ST.S.selCatsACLS=[...document.querySelectorAll('#acls-cats .cc.active')].map(x=>x.dataset.cat);
  ST.S.selCatsICU=[...document.querySelectorAll('#icu-cats .cc.active')].map(x=>x.dataset.cat);
  ST.setSysP(buildSP());ST.resetForNewSim();resetProgress();
  const wm=document.getElementById('wrapup-shown');if(wm)wm.remove();
  window._medsSubmitted=false;window._ordersSubmitted=false;

  showPage('chat');
  const titleMap={'acls':'Code Blue Simulation','rapid':'Rapid Response Simulation','genim':'General IM Simulation','genicu':'General ICU Simulation'};
  document.getElementById('ct').textContent=titleMap[ST.S.scType]||'Simulation';

  // Badges
  const bb=document.getElementById('ch-badges');const a=ST.S.scType==='acls';const icu=ST.S.scType==='genicu';
  const typeLabels={'acls':'ACLS','rapid':'RR','genim':'Gen IM','genicu':'Gen ICU'};
  const badgeType=a?'acls':icu?'genicu':'rapid';
  let bg=`<span class="badge badge-${badgeType}">${typeLabels[ST.S.scType]}</span><span class="badge badge-${ST.S.fb==='realtime'?'fb-rt':'fb-end'}">${ST.S.fb==='realtime'?'RT':'End'}</span><span class="badge badge-${ST.S.diff==='easy'?'easy':'hard'}">${ST.S.diff}</span><span class="badge badge-${ST.S.inputMode==='mc'?'mc':'ft'}">${ST.S.inputMode==='mc'?'MC':'Free Text'}</span>`;
  bg+=`<span class="badge badge-${isGr()?'graded':'ungraded'}">${isGr()?'Graded':'Ungraded'}</span>`;
  if(useTP())bg+=`<span class="badge badge-tp">TP</span>`;
  const selCats=a?ST.S.selCatsACLS:icu?ST.S.selCatsICU:ST.S.selCatsRR;
  if(ST.S.prompt.trim()){bg+=`<span class="badge" style="background:rgba(168,85,247,.15);color:var(--accent-purple);max-width:none;white-space:normal;line-height:1.3;" title="${ST.S.prompt.trim()}">"${ST.S.prompt.trim()}"</span>`;}
  else if(selCats.length>0){bg+=`<span class="badge" style="background:rgba(6,182,212,.15);color:var(--accent-cyan);max-width:none;white-space:normal;line-height:1.3;">${selCats.join(' + ')}</span>`;}
  else{bg+=`<span class="badge" style="background:rgba(100,116,139,.15);color:var(--text-dim);">Random</span>`;}
  bb.innerHTML=bg;

  // Reset UI
  document.getElementById('ma').querySelectorAll('.msg,.msg-sys').forEach(m=>m.remove());
  document.getElementById('end-btn').style.display='';
  document.getElementById('qs-sb').disabled=true;
  document.getElementById('qs-body').innerHTML='<div class="qs-empty">Add questions during sim. Highlight AI text to ask about it. Submit after sim ends.</div>';
  resetQComposer();
  document.getElementById('qs-panel').classList.add('qp-hide');
  document.getElementById('ci').disabled=false;document.getElementById('send-btn').disabled=false;
  document.getElementById('inp-area').style.display='';
  document.getElementById('action-row').style.display='none';
  document.getElementById('action-row').innerHTML='';
  document.getElementById('hl-banner').style.display='none';

  const hp=document.getElementById('hist-panel');
  if(useTP()){hp.classList.remove('hp-hide');document.getElementById('hist-body').innerHTML='';document.getElementById('hist-time').textContent='T+0:00';}
  else hp.classList.add('hp-hide');

  // Show home meds panel (populated after first API response)
  const mp=document.getElementById('meds-panel');
  mp.classList.remove('mp-hide');
  document.getElementById('meds-body').innerHTML='<div style="font-size:.7rem;color:var(--text-dim);padding:.5rem;text-align:center;">Waiting for patient data...</div>';
  document.getElementById('meds-footer').style.display='none';

  // Orders panel — show for IM/ICU sims
  const op=document.getElementById('orders-panel');
  const ob=document.getElementById('orders-btn');
  if(ST.S.scType==='genim'||ST.S.scType==='genicu'){
    op.classList.add('op-hide');ob.style.display='';
    initOrdersPanel();
  } else {op.classList.add('op-hide');ob.style.display='none';}

  // Set MGH reference topics
  let caseKeywords=[];
  if(ST.S.scType==='acls'){caseKeywords=['Cardiology','ACLS','EKG','Atrial','QTc','Tachycardia','Bradycardia','Wide Complex','Heart Failure','Cardiac','Coronary','Pericardial','Aortic','Syncope','Mechanical Circulatory'];if(ST.S.selCatsACLS.length>0)caseKeywords=[...caseKeywords,...ST.S.selCatsACLS];}
  else if(ST.S.scType==='rapid'){const rrBase=['Sepsis','Shock','Respiratory','Hypoxemia','Mechanical Ventilation','Vasopressor','Acid-Base','Potassium','Sodium'];caseKeywords=ST.S.selCatsRR.length>0?[...rrBase,...ST.S.selCatsRR.map(c=>c.split(' ').slice(0,2).join(' '))]:rrBase;}
  else if(ST.S.scType==='genicu'){const icuBase=['Shock','Ventilation','Vasopressor','Sepsis','ARDS','Sedation','AKI','Acid-Base'];caseKeywords=ST.S.selCatsICU.length>0?[...icuBase,...ST.S.selCatsICU.map(c=>c.split(' ').slice(0,2).join(' '))]:icuBase;}
  else{caseKeywords=ST.S.selCatsRR.length>0?ST.S.selCatsRR.map(c=>c.split(' ').slice(0,2).join(' ')):[];}
  if(ST.S.prompt.trim()){caseKeywords=[...caseKeywords,...ST.S.prompt.trim().split(/\s+/).filter(w=>w.length>4)];}
  ST.setCurrentCaseTopics(caseKeywords);
  renderRef();

  if(ST.S.inputMode==='mc'){document.getElementById('ci').placeholder='MC mode — select from options above (or type to override)';}
  await callAPI([{role:'user',content:'Begin the simulation.'}],true);
}
window.startSim=startSim;

// ── Home Medications Panel ──
function parseAndRenderHomeMeds(block){
  const lines=block.trim().split('\n').filter(l=>l.startsWith('MED:'));
  const meds=lines.map((l,i)=>{
    const parts=l.replace('MED:','').split('|').map(s=>s.trim());
    const correctRaw=(parts[3]||'').replace(/CORRECT_ACTION:\s*/i,'').toLowerCase().trim();
    const correct=correctRaw.startsWith('hold')?'hold':correctRaw.startsWith('change')?'change':'continue';
    const reason=(parts[4]||'').replace(/REASON:\s*/i,'').trim();
    return {id:i,name:parts[0]||'Unknown',details:parts[1]||'',indication:parts[2]||'',correctAction:correct,reason:reason,status:null,changeText:''};
  });
  const body=document.getElementById('meds-body');
  body.innerHTML='';
  meds.forEach(med=>{
    const div=document.createElement('div');div.className='med-item';div.id='med-'+med.id;
    div.innerHTML=`<div class="med-name">${esc(med.name)}</div><div class="med-details">${esc(med.details)}${med.indication?' — '+esc(med.indication):''}</div><div class="med-actions"><button class="med-action-btn btn-continue" data-med="${med.id}" data-action="continue" onclick="toggleMedAction(${med.id},'continue')" title="Continue">+</button><button class="med-action-btn btn-hold" data-med="${med.id}" data-action="hold" onclick="toggleMedAction(${med.id},'hold')" title="Hold">−</button><button class="med-action-btn btn-change" data-med="${med.id}" data-action="change" onclick="toggleMedAction(${med.id},'change')" title="Change">Δ</button></div><div class="med-change-input" id="med-change-${med.id}"><input type="text" placeholder="e.g. change to sliding scale insulin, change route to IV..." oninput="updateMedChangeText(${med.id},this.value)"></div>`;
    body.appendChild(div);
  });
  window._homeMeds=meds;
  document.getElementById('meds-footer').style.display='';
}

// ── Submit Home Meds (med rec with feedback) ──
function submitHomeMeds(){
  if(!window._homeMeds||window._medsSubmitted)return;
  const meds=window._homeMeds;
  const allDecided=meds.every(m=>m.status!==null);
  if(!allDecided){alert('Please make a decision (continue, hold, or change) for every medication before submitting.');return;}
  window._medsSubmitted=true;
  document.getElementById('meds-submit-btn').disabled=true;

  // Show feedback on each med
  meds.forEach(med=>{
    const item=document.getElementById('med-'+med.id);
    const btns=item.querySelectorAll('.med-action-btn');
    btns.forEach(b=>{b.style.pointerEvents='none';b.style.opacity='.6';});
    const isCorrect=(med.status===med.correctAction)||(med.status==='change'&&med.correctAction==='change');
    item.classList.remove('med-continue','med-hold','med-change');
    item.classList.add(isCorrect?'med-correct':'med-incorrect');
    const fb=document.createElement('div');
    fb.className='med-feedback '+(isCorrect?'fb-correct':'fb-incorrect');
    fb.textContent=isCorrect?`✅ ${med.reason||'Correct decision.'}`:`❌ Should ${med.correctAction}. ${med.reason||''}`;
    item.appendChild(fb);
  });

  // Build summary for AI context
  const summary=meds.map(m=>`${m.name}: user chose ${m.status}, correct was ${m.correctAction}${m.status===m.correctAction?' ✅':' ❌'}`).join('\n');
  const correct=meds.filter(m=>m.status===m.correctAction).length;
  addSysMsg(`📋 Med Rec submitted: ${correct}/${meds.length} correct. You can minimize the panel to free up space.`);

  // Inform the AI about the med rec decisions silently
  ST.pushConv({role:'user',content:`[SYSTEM: Med rec completed. Results:\n${summary}\nScore: ${correct}/${meds.length}. Continue the simulation — the patient is now on the floor/in the ICU. Do NOT re-present the medications or comment on the med rec unless asked.]`});
}
window.submitHomeMeds=submitHomeMeds;

// ── Orders Panel ──
const ORDER_CATALOG={
  labs:{
    'CBC':'Complete blood count',
    'BMP':'Basic metabolic panel (Na, K, Cl, CO2, BUN, Cr, Glucose, Ca)',
    'CMP':'Comprehensive metabolic panel',
    'Magnesium':'Serum magnesium level',
    'Phosphorus':'Serum phosphorus level',
    'Lactate':'Serum lactate',
    'Troponin':'Troponin I/T',
    'BNP/NT-proBNP':'B-type natriuretic peptide',
    'PT/INR':'Prothrombin time / INR',
    'PTT':'Partial thromboplastin time',
    'D-dimer':'D-dimer level',
    'Fibrinogen':'Fibrinogen level',
    'LFTs':'Liver function tests (AST, ALT, ALP, Tbili)',
    'Lipase':'Serum lipase',
    'TSH':'Thyroid stimulating hormone',
    'Free T4':'Free thyroxine',
    'Cortisol':'Random cortisol level',
    'Procalcitonin':'Procalcitonin level',
    'Blood cultures x2':'Two sets of blood cultures',
    'Urinalysis + culture':'UA with reflex culture',
    'Urine drug screen':'Urine toxicology',
    'ABG':'Arterial blood gas',
    'VBG':'Venous blood gas',
    'Type and screen':'Blood type and antibody screen',
    'A1c':'Hemoglobin A1c',
    'ESR/CRP':'Inflammatory markers',
    'LDH':'Lactate dehydrogenase',
    'Ammonia':'Serum ammonia',
    'Haptoglobin':'Haptoglobin level'
  },
  imaging:{
    'CXR (portable)':'Portable chest X-ray',
    'CXR (PA/lateral)':'Standard chest X-ray 2-view',
    'CT Head w/o contrast':'Non-contrast CT head',
    'CT Chest w/ contrast':'CT chest with IV contrast',
    'CTA Chest (PE protocol)':'CT angiography for PE',
    'CT Abdomen/Pelvis w/ contrast':'CT abd/pelvis with contrast',
    'CT Abdomen/Pelvis w/o contrast':'CT abd/pelvis without contrast',
    'RUQ Ultrasound':'Right upper quadrant ultrasound',
    'Echocardiogram (TTE)':'Transthoracic echocardiogram',
    'CTPA + CT Aortogram':'Combined PE and aortic protocol',
    'MRI Brain':'MRI of the brain',
    'Doppler U/S (lower extremity)':'Venous duplex of legs',
    'KUB':'Kidney-ureter-bladder X-ray',
    'CT Angiography (head/neck)':'CTA head and neck'
  },
  meds:{
    'NS 500mL bolus':'Normal saline 500mL IV bolus',
    'LR 1L bolus':'Lactated Ringer\'s 1L IV bolus',
    'NS maintenance (125mL/hr)':'NS at maintenance rate',
    'Heparin drip (VTE protocol)':'Heparin infusion per protocol',
    'Enoxaparin (DVT ppx)':'Enoxaparin 40mg SQ daily',
    'SQ heparin (DVT ppx)':'Heparin 5000u SQ q8h',
    'Pantoprazole 40mg IV':'PPI IV',
    'Acetaminophen 650mg PO PRN':'Tylenol for pain/fever',
    'Ondansetron 4mg IV PRN':'Zofran for nausea',
    'Morphine 2mg IV PRN':'Opioid for pain',
    'Insulin sliding scale':'Regular insulin per sliding scale',
    'Vancomycin (dose per pharmacy)':'Vancomycin IV',
    'Piperacillin-tazobactam 4.5g IV':'Zosyn IV',
    'Ceftriaxone 2g IV':'Ceftriaxone IV',
    'Azithromycin 500mg IV':'Azithromycin IV',
    'Metoprolol 5mg IV':'IV beta-blocker',
    'Furosemide 40mg IV':'IV loop diuretic',
    'Norepinephrine drip':'Vasopressor infusion'
  },
  other:{
    'Telemetry monitoring':'Continuous cardiac monitoring',
    'Continuous pulse oximetry':'SpO2 monitoring',
    'Strict I&Os':'Intake and output monitoring',
    'Foley catheter':'Urinary catheter placement',
    'NPO':'Nothing by mouth',
    'Cardiac diet':'Heart-healthy diet',
    'Regular diet':'Regular diet',
    'Diabetic diet':'Carb-controlled diet',
    'Fall precautions':'Fall risk protocol',
    'Bed rest':'Strict bed rest',
    'Activity as tolerated':'Ambulate as tolerated',
    'O2 via nasal cannula (titrate)':'Supplemental oxygen',
    'Consult: Cardiology':'Cardiology consultation',
    'Consult: Pulmonology':'Pulmonology consultation',
    'Consult: GI':'Gastroenterology consultation',
    'Consult: ID':'Infectious disease consultation',
    'Consult: Surgery':'Surgical consultation',
    'Consult: Nephrology':'Nephrology consultation',
    '12-lead EKG':'Standard 12-lead electrocardiogram',
    'Central line placement':'Central venous catheter',
    'Arterial line placement':'Arterial catheter for monitoring'
  }
};

let currentOrderTab='labs';
let selectedOrders=new Set();
let customOrders=[];

function initOrdersPanel(){
  currentOrderTab='labs';selectedOrders=new Set();customOrders=[];
  document.querySelectorAll('.orders-tab').forEach(t=>{t.classList.toggle('active',t.textContent.toLowerCase()==='labs');});
  renderOrderItems();
}

function switchOrderTab(btn,tab){
  currentOrderTab=tab;
  document.querySelectorAll('.orders-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  renderOrderItems();
}
window.switchOrderTab=switchOrderTab;

function renderOrderItems(){
  const body=document.getElementById('orders-body');
  const items=ORDER_CATALOG[currentOrderTab]||{};
  let html=Object.entries(items).map(([name,desc])=>{
    const key=currentOrderTab+':'+name;
    const sel=selectedOrders.has(key)?'selected':'';
    return `<div class="order-item ${sel}" onclick="toggleOrder('${esc(key)}',this)"><span class="order-check">${sel?'✓':''}</span><div><div style="font-weight:600;">${esc(name)}</div><div style="font-size:.58rem;color:var(--text-dim);margin-top:.05rem;">${esc(desc)}</div></div></div>`;
  }).join('');
  // Show custom orders for this tab
  customOrders.filter(o=>o.tab===currentOrderTab).forEach(o=>{
    const key='custom:'+o.name;
    const sel=selectedOrders.has(key)?'selected':'';
    html+=`<div class="order-item ${sel}" onclick="toggleOrder('${esc(key)}',this)"><span class="order-check">${sel?'✓':''}</span><div><div style="font-weight:600;">${esc(o.name)}</div></div><span class="order-custom-tag">Custom</span></div>`;
  });
  body.innerHTML=html;
}

function toggleOrder(key,el){
  if(window._ordersSubmitted)return;
  if(selectedOrders.has(key)){selectedOrders.delete(key);el.classList.remove('selected');el.querySelector('.order-check').textContent='';}
  else{selectedOrders.add(key);el.classList.add('selected');el.querySelector('.order-check').textContent='✓';}
}
window.toggleOrder=toggleOrder;

function addCustomOrder(){
  const inp=document.getElementById('orders-custom-input');
  const t=inp.value.trim();if(!t)return;
  customOrders.push({tab:currentOrderTab,name:t});
  const key='custom:'+t;
  selectedOrders.add(key);
  inp.value='';
  renderOrderItems();
}
window.addCustomOrder=addCustomOrder;

async function submitOrders(){
  if(selectedOrders.size===0){alert('Select at least one order before submitting.');return;}
  if(window._ordersSubmitted&&ST.wait)return;
  window._ordersSubmitted=true;
  document.getElementById('orders-submit-btn').disabled=true;

  const orderList=[...selectedOrders].map(k=>{
    const [cat,...rest]=k.split(':');const name=rest.join(':');
    return name;
  });

  addMsg('I\'m placing the following orders: '+orderList.join(', '),'user');
  ST.incUaCount();updateProgress();
  await callAPI([{role:'user',content:`I am placing the following orders:\n${orderList.map((o,i)=>`${i+1}. ${o}`).join('\n')}\n\nPlease acknowledge these orders and provide results for the lab and imaging orders. Then continue the simulation based on the results. After providing results, evaluate whether any ordered tests were unnecessary and if any important orders were missed — communicate this through your standard feedback mechanism (${ST.S.fb==='realtime'?'real-time feedback after this response':'end-of-sim feedback'}).`}]);

  // Re-enable for next round of orders
  setTimeout(()=>{
    window._ordersSubmitted=false;
    document.getElementById('orders-submit-btn').disabled=false;
    selectedOrders.clear();
    renderOrderItems();
  },500);
}
window.submitOrders=submitOrders;

window.toggleMedAction=function(medId,action){
  const med=window._homeMeds?.find(m=>m.id===medId);if(!med)return;
  const item=document.getElementById('med-'+medId);
  const btns=item.querySelectorAll('.med-action-btn');
  const changeInput=document.getElementById('med-change-'+medId);
  // Toggle off if same action clicked again
  if(med.status===action){
    med.status=null;
    btns.forEach(b=>b.classList.remove('active-continue','active-hold','active-change'));
    item.classList.remove('med-continue','med-hold','med-change');
    changeInput.classList.remove('open');
    return;
  }
  // Set new action
  med.status=action;
  btns.forEach(b=>b.classList.remove('active-continue','active-hold','active-change'));
  item.classList.remove('med-continue','med-hold','med-change');
  const btn=item.querySelector(`[data-action="${action}"]`);
  if(action==='continue'){btn.classList.add('active-continue');item.classList.add('med-continue');changeInput.classList.remove('open');}
  else if(action==='hold'){btn.classList.add('active-hold');item.classList.add('med-hold');changeInput.classList.remove('open');}
  else if(action==='change'){btn.classList.add('active-change');item.classList.add('med-change');changeInput.classList.add('open');changeInput.querySelector('input').focus();}
};

window.updateMedChangeText=function(medId,val){
  const med=window._homeMeds?.find(m=>m.id===medId);if(med)med.changeText=val;
};

// ── API Call (through backend proxy) ──
async function callAPI(msgs,init=false){
  ST.setWait(true);updIS();showT(true);
  if(!init&&msgs.length>0)ST.pushConv(msgs[msgs.length-1]);else if(init)ST.pushConv({role:'user',content:'Begin the simulation.'});
  try{
    const r=await fetch(WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:MODEL,max_tokens:MAX_TOKENS,system:ST.sysP,messages:ST.conv})});
    if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e.error?.message||`Error ${r.status}`);}
    const d=await r.json();let txt=d.content.map(b=>b.text||'').join('\n');
    ST.pushConv({role:'assistant',content:txt});
    // Parse home medications (from first response)
    const medsMatch=txt.match(/HOME_MEDS_START\n([\s\S]*?)HOME_MEDS_END/);
    if(medsMatch){parseAndRenderHomeMeds(medsMatch[1]);}
    // Parse historian
    for(const m of[...txt.matchAll(/HISTORIAN_LOG:(\{[^\n]+\})/g)])try{addHE(JSON.parse(m[1]));}catch(e){}
    const clean=txt.replace(/HOME_MEDS_START[\s\S]*?HOME_MEDS_END\n?/g,'').replace(/HISTORIAN_LOG:\{[^\n]+\}/g,'').replace(/FINAL_SCORE:\d+/g,'').trim();
    showT(false);addMsg(clean,'ai');
    // Score
    const sm=txt.match(/FINAL_SCORE:(\d+)/);
    if(sm){saveSc(parseInt(sm[1]));ST.setSimPhase('complete');ST.setFbDone(true);showBackHomeBtn();}
    // Sim complete detection — check 'active' (natural end) or 'ended' (user triggered endEarly)
    if((ST.simPhase==='active'||ST.simPhase==='ended')&&/SIMULATION COMPLETE|simulation complete/i.test(txt)){
      ST.setSimPhase('ended');ST.setSimEnd(true);
      document.getElementById('progress-fill').style.width='100%';
      document.getElementById('progress-lbl').textContent='100%';
      document.getElementById('end-btn').style.display='none';
      showDebriefBtn();
    }
    // After ungraded feedback delivered
    if(ST.simPhase==='feedback'&&!sm&&/Areas for improvement|What.*did well|Key teaching|Overall.*performance|Possible orders|could have considered/i.test(txt)){
      ST.setSimPhase('complete');ST.setFbDone(true);showBackHomeBtn();
    }
  }catch(e){showT(false);addMsg(`⚠️ ${e.message}`,'ai');}
  ST.setWait(false);updIS();
}

// ── Send message ──
export async function sendMsg(){
  const inp=document.getElementById('ci');const t=inp.value.trim();if(!t||ST.wait)return;
  if(ST.isRec)window.togVoice();inp.value='';inp.style.height='auto';
  clearHLRef();addMsg(t,'user');
  if(ST.simPhase==='active'){ST.incUaCount();updateProgress();}
  await callAPI([{role:'user',content:t}]);
  if(ST.simPhase==='debrief'&&!ST.fbDone){
    showActionRow([
      {label:'📊 Get Feedback'+(isGr()?' & Score':''),cls:'end-sim-action',fn:'goToFeedback()'},
      {label:'🏠 Back to Homepage',cls:'debrief-action',fn:'goHome()'}
    ]);
  }
}
window.sendMsg=sendMsg;

export function ik(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();}setTimeout(()=>{e.target.style.height='auto';e.target.style.height=Math.min(e.target.scrollHeight,100)+'px';},0);}
window.ik=ik;

// ── MC selection ──
export async function selectMCOption(letter,text,container){
  if(ST.wait||container.dataset.answered)return;container.dataset.answered='true';
  container.querySelectorAll('.mc-opt').forEach(btn=>{btn.style.pointerEvents='none';});
  const selected=container.querySelector('.mc-opt:nth-child('+(letter.charCodeAt(0)-64)+')');
  if(selected){selected.classList.add('selected');selected.style.opacity='1';}
  container.querySelectorAll('.mc-opt:not(.selected)').forEach(btn=>{btn.style.opacity='.5';});
  addMsg(letter+') '+text,'user');
  if(ST.simPhase==='active'){ST.incUaCount();updateProgress();}
  await callAPI([{role:'user',content:'I choose '+letter+') '+text}]);
  const lastAiMsg=ST.conv[ST.conv.length-1]?.content||'';
  if(selected){
    if(/correct|✅/i.test(lastAiMsg.substring(0,80))){selected.classList.remove('selected');selected.classList.add('correct');}
    else if(/incorrect|❌|wrong/i.test(lastAiMsg.substring(0,80))){
      selected.classList.remove('selected');selected.classList.add('incorrect');
      const correctMatch=lastAiMsg.match(/correct answer was ([A-D])/i);
      if(correctMatch){const correctIdx=correctMatch[1].charCodeAt(0)-64;const correctBtn=container.querySelector('.mc-opt:nth-child('+correctIdx+')');if(correctBtn){correctBtn.classList.add('correct');correctBtn.style.opacity='1';}}
    }
  }
}
window.selectMCOption=selectMCOption;

// ── Debrief / Feedback ──
function showDebriefBtn(){
  ST.setSimPhase('debrief');
  document.getElementById('action-row').innerHTML='';
  document.getElementById('action-row').style.display='none';
  document.getElementById('ci').disabled=false;
  document.getElementById('send-btn').disabled=false;
  document.getElementById('qs-sb').disabled=false;
  document.getElementById('unsure-btn').style.display='none';
  const qs=document.getElementById('qs-panel');
  if(qs.classList.contains('qp-hide'))qs.classList.remove('qp-hide');
  document.getElementById('inp-area').style.display='';
  document.getElementById('ci').placeholder='Ask a follow-up question or type a comment...';
  if(ST.qList.length>0){addSysMsg('Simulation complete! Your debrief panel is open. Submit questions or type follow-ups below. Skip to feedback when ready.');}
  else{addSysMsg('Simulation complete! Ask follow-up questions in the debrief panel (right side) or type below. Skip to feedback when ready.');}
  showActionRow([
    {label:'⏭ Skip → Feedback',cls:'end-sim-action',fn:'goToFeedback()'},
    {label:'🏠 Home',cls:'debrief-action',fn:'goHome()'}
  ]);
}

export async function goToFeedback(){
  ST.setSimPhase('feedback');
  document.getElementById('action-row').style.display='none';
  document.getElementById('inp-area').style.display='none';
  addMsg('Please provide my feedback now.','user');
  const feedbackPrompt=isGr()
    ?'Provide comprehensive feedback AND my graded score. IMPORTANT: Before giving feedback, first list ALL possible orders/actions the user could have considered at each step of this simulation as a comprehensive bullet-point list. Then provide detailed feedback and the numerical score with breakdown.'
    :'Provide comprehensive feedback on my performance. IMPORTANT: Before giving feedback, first list ALL possible orders/actions the user could have considered at each step of this simulation as a comprehensive bullet-point list. Then give detailed feedback on strengths and areas for improvement.';
  await callAPI([{role:'user',content:feedbackPrompt}]);
}
window.goToFeedback=goToFeedback;

export async function endEarly(){
  if(ST.wait||ST.simEnd)return;
  if(isGr()&&ST.uaCount<3){if(!confirm(`Only ${ST.uaCount} answer${ST.uaCount!==1?'s':''} — need 3 for grading. End as UNGRADED?`))return;ST.S.grade='ungraded';const b=document.querySelector('.badge-graded');if(b){b.className='badge badge-ungraded';b.textContent='Ungraded';}ST.setSysP(buildSP());addSysMsg('⚠️ Converted to UNGRADED (< 3 answers).');}
  ST.setSimEnd(true);ST.setSimPhase('ended');
  document.getElementById('end-btn').style.display='none';
  document.getElementById('inp-area').style.display='none';
  document.getElementById('progress-fill').style.width='100%';
  document.getElementById('progress-lbl').textContent='100%';
  addMsg('End the simulation now.','user');
  await callAPI([{role:'user',content:'End simulation now. State the outcome with "SIMULATION COMPLETE" then stop. I will request debrief and feedback separately.'}]);
  // Fallback: if callAPI response didn't trigger showDebriefBtn, force it
  if(ST.simPhase==='ended'){showDebriefBtn();}
}
window.endEarly=endEarly;

// ── I'm not sure ──
export async function notSure(){
  if(ST.wait||ST.simPhase!=='active')return;
  ST.setUnsureCount(ST.unsureCount+1);
  addMsg("I'm not sure what to do next.","user");
  if(isGr()){addSysMsg('⚠️ -5 points deducted for using help. ('+ST.unsureCount+' total uses)');}
  ST.incUaCount();updateProgress();
  await callAPI([{role:'user',content:"I'm not sure what to do next. Please tell me what the correct next step would be and explain why, then continue the simulation from that correct action."+(isGr()?' Note: the user has used the help button — deduct 5 points from their final score for this use.':'')}]);
}
window.notSure=notSure;

// ── Highlight / Tooltip ──
const ttip=document.getElementById('hl-tooltip');
document.addEventListener('mouseup',e=>{
  setTimeout(()=>{const sel=window.getSelection();const t=sel?.toString().trim();
  if(t&&t.length>2){const an=sel.anchorNode;const msg=an?.parentElement?.closest?.('.msg-ai');
    if(msg){ST.setPendHL(t);ST.setSelRange(sel.getRangeAt(0).cloneRange());const rect=sel.getRangeAt(0).getBoundingClientRect();ttip.style.display='flex';ttip.style.left=rect.left+(rect.width/2)-80+'px';ttip.style.top=rect.top-34+'px';return;}}
  if(!e.target.closest('#hl-tooltip')){ttip.style.display='none';ST.setPendHL('');ST.setSelRange(null);}},10);
});

export function askAboutHL(){
  if(!ST.pendHL)return;ttip.style.display='none';
  const qs=document.getElementById('qs-panel');if(qs.classList.contains('qp-hide'))qs.classList.remove('qp-hide');
  document.getElementById('hl-banner').style.display='flex';
  document.getElementById('hl-banner-text').textContent=ST.pendHL.length>80?ST.pendHL.substring(0,80)+'...':ST.pendHL;
  document.getElementById('qs-i').focus();document.getElementById('qs-i').dataset.hlRef=ST.pendHL;
  document.getElementById('qs-i').placeholder='Ask about highlighted text...';
  window.getSelection()?.removeAllRanges();ST.setPendHL('');
}
window.askAboutHL=askAboutHL;

export function highlightText(){
  if(!ST.selRange)return;ttip.style.display='none';
  try{const span=document.createElement('span');span.className='user-hl';ST.selRange.surroundContents(span);}
  catch(e){try{const fragment=ST.selRange.extractContents();const span=document.createElement('span');span.className='user-hl';span.appendChild(fragment);ST.selRange.insertNode(span);}catch(e2){}}
  window.getSelection()?.removeAllRanges();ST.setPendHL('');ST.setSelRange(null);
}
window.highlightText=highlightText;

function clearHLRef(){
  document.getElementById('hl-banner').style.display='none';
  document.getElementById('qs-i').dataset.hlRef='';
  document.getElementById('qs-i').placeholder='Type a question...';
}
window.clearHLRef=clearHLRef;

// ── Questions panel ──
function togQS(){document.getElementById('qs-panel').classList.toggle('qp-hide');}
window.togQS=togQS;

function addQ(){const inp=document.getElementById('qs-i');const t=inp.value.trim();if(!t)return;ST.pushQ({text:t,hlRef:inp.dataset.hlRef||null});inp.value='';inp.dataset.hlRef='';inp.placeholder='Type a question...';clearHLRef();renderQ();}
window.addQ=addQ;

function removeQ(i){ST.removeQ(i);renderQ();}
window.removeQ=removeQ;

function renderQ(){const b=document.getElementById('qs-body');if(!ST.qList.length){b.innerHTML='<div class="qs-empty">Add questions during sim. Highlight AI text to ask about it. Submit after sim ends.</div>';return;}b.innerHTML=ST.qList.map((q,i)=>{const ref=q.hlRef?`<span class="qhr">"${esc(q.hlRef.substring(0,60))}${q.hlRef.length>60?'...':''}"</span>`:'';return`<div class="qi">${ref}${esc(q.text)}<button class="qr" onclick="removeQ(${i})">✕</button></div>`;}).join('');}

function resetQComposer(){ST.setQEditIndex(-1);}

async function submitQs(){
  if(ST.simPhase==='active'||!ST.qList.length||ST.wait)return;
  const qt=ST.qList.map((q,i)=>{const r=q.hlRef?`\n   [Re: "${q.hlRef}"]`:'';return`${i+1}. ${q.text}${r}`;}).join('\n');
  const batchMsg=ST.qList.length===1?'I have a follow-up question:':'I have debrief questions/comments:';
  addMsg(batchMsg,'user');
  ST.clearQList();renderQ();
  document.getElementById('qs-sb').disabled=true;
  await callAPI([{role:'user',content:`Debrief questions:\n\n${qt}\n\nAnswer each question separately. For EACH question, start with a header formatted as: ## Question [number]: [brief topic]\nThen provide your thorough answer.\nPut a --- separator line between each answer.\nAfter answering all questions, let the user know they can ask more follow-up questions.`}]);
  document.getElementById('qs-sb').disabled=false;
  const row=document.getElementById('action-row');
  if(ST.simPhase!=='complete'&&ST.simPhase!=='feedback'){
    showActionRow([
      {label:'📊 Get Feedback'+(isGr()?' & Score':''),cls:'end-sim-action',fn:'goToFeedback()'},
      {label:'🏠 Back to Homepage',cls:'debrief-action',fn:'goHome()'}
    ]);
  }
}
window.submitQs=submitQs;

function openDebriefPanel(){
  const qs=document.getElementById('qs-panel');
  if(qs.classList.contains('qp-hide'))qs.classList.remove('qp-hide');
  document.getElementById('inp-area').style.display='';
  document.getElementById('ci').disabled=false;
  document.getElementById('send-btn').disabled=false;
  document.getElementById('ci').placeholder='Ask a follow-up question or type a comment...';
  document.getElementById('action-row').style.display='none';
  showActionRow([
    {label:'⏭ Skip → Feedback',cls:'end-sim-action',fn:'goToFeedback()'},
    {label:'🏠 Home',cls:'debrief-action',fn:'goHome()'}
  ]);
}

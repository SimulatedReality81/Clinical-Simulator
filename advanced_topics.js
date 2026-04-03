// ══════════════════════════════════════════════════════════════
// ADVANCED TOPICS — Dedicated learning hub for weaker training areas
// ══════════════════════════════════════════════════════════════
import * as ST from './state.js';
import { esc } from './ui.js';

const TOPICS = {
  mcs: {
    title: 'Mechanical Circulatory Support',
    icon: '🫀',
    blurb: 'Device-first review of shock support, hemodynamics, complications, and escalation logic.',
    subtitle: 'Match the shock phenotype to the right support strategy, know what the device changes, and troubleshoot what can kill the patient fastest.',
    tags: ['Devices', 'Hemodynamics', 'Escalation'],
    simPrompt: 'Create a high-acuity ICU simulation focused on cardiogenic shock requiring mechanical circulatory support selection and troubleshooting.',
    overviewCards: [
      { title: 'IABP', body: 'Best for modest afterload reduction and coronary perfusion support. Good bridge when the patient is sick but not in profound collapse.' },
      { title: 'Impella', body: 'Direct LV unloading with greater hemodynamic support than IABP. Watch position alarms, hemolysis, suction events, RV failure, and limb ischemia.' },
      { title: 'VA-ECMO', body: 'Full cardiopulmonary rescue for refractory shock or arrest. Restores perfusion fast, but raises afterload and can worsen LV distention if you do not decompress.' },
      { title: 'Decision frame', body: 'Ask three questions: what chamber is failing, how much flow is needed, and what complication is about to happen next?' }
    ],
    workflows: [
      { title: 'Choose the device', body: 'Profile the shock first: isolated LV failure, biventricular failure, severe hypoxemia, electrical storm, or arrest. Then decide whether you need unloading, oxygenation, or full systemic rescue.' },
      { title: 'Read the hemodynamics', body: 'Track MAP, lactate, urine output, filling pressures, cardiac index, mixed venous oxygen saturation, pulse pressure, and end-organ trajectory rather than relying on one number.' },
      { title: 'Escalate deliberately', body: 'If perfusion is not improving despite increasing support, look for a reason: wrong device, malposition, tamponade, RV failure, limb ischemia, hemolysis, or inadequate LV unloading.' }
    ],
    emergencies: [
      { title: 'Impella suction alarm', body: 'Think underfilling, RV failure, tamponade, severe hypovolemia, or device migration. Reduce support temporarily, re-image, and fix preload or RV physiology.', note: 'Do not just keep turning the P-level back up.' },
      { title: 'VA-ECMO with pulmonary edema / no AV opening', body: 'Worry about LV distention and rising LVEDP. Consider unloading with Impella, IABP, venting strategy, or afterload reduction depending on the situation.', note: 'Rising wedge plus absent pulsatility is dangerous.' },
      { title: 'North–South syndrome', body: 'If native cardiac output recovers while lungs remain terrible, upper body may receive poorly oxygenated blood. Compare right arm saturation/ABG to lower body and adjust the circuit or oxygenation strategy.', note: 'Always sample the right arm on peripheral VA-ECMO.' }
    ],
    pearls: [
      'Device choice should follow physiology, not brand familiarity.',
      'Cardiac power output, pulsatility, lactate trend, and end-organ recovery are often more useful than isolated blood pressure.',
      'Every support device creates a new complication profile; support success is about anticipating that profile early.',
      'Always ask whether the ventricle is decompressed enough.'
    ],
    cases: [
      { title: 'Post-MI shock on escalating norepinephrine', level: 'Advanced', focus: 'Impella vs VA-ECMO', prompt: 'A patient remains cold, oliguric, and acidotic despite inotropes and vasopressors. How do you decide whether isolated LV unloading is enough or the patient needs full extracorporeal support?' },
      { title: 'Peripheral VA-ECMO with rising pulmonary edema', level: 'Fellow-style', focus: 'LV distention', prompt: 'The patient has improving lactate but worse pulmonary edema, minimal pulsatility, and a barely opening aortic valve. What is happening and how do you unload the LV?' }
    ]
  },
  vent: {
    title: 'Ventilator Management',
    icon: '🫁',
    blurb: 'Problem-oriented ventilation: initial settings, alarms, ARDS, obstructive disease, asynchrony, and liberation.',
    subtitle: 'Identify whether the issue is oxygenation, ventilation, mechanics, or synchrony, then adjust intentionally.',
    tags: ['ARDS', 'Asynchrony', 'Liberation'],
    simPrompt: 'Create an ICU ventilator management simulation involving worsening hypoxemia and ventilator troubleshooting.',
    overviewCards: [
      { title: 'Starting point', body: 'Choose mode, tidal volume, rate, FiO2, and PEEP based on pathology — not habit. Reassess quickly after the first gas, plateau pressure, and waveform review.' },
      { title: 'Oxygenation problem', body: 'Think FiO2, PEEP, recruitment, shunt physiology, secretion burden, edema, effusion, pneumothorax, or circuit issues.' },
      { title: 'Ventilation / CO2 problem', body: 'Think minute ventilation, dead space, severe obstruction with air trapping, or patient effort that makes the numbers look confusing.' },
      { title: 'Waveforms matter', body: 'A vent alarm is not just a machine complaint — it is often your first clue to secretions, bronchospasm, dyssynchrony, kinking, or worsening compliance.' }
    ],
    workflows: [
      { title: 'Initial settings', body: 'Start with predicted body weight, low tidal volume strategy when appropriate, adequate PEEP, and a realistic rate. Then watch plateau pressure, driving pressure, and gas exchange rather than chasing a perfect first blood gas.' },
      { title: 'Hypoxemia', body: 'Check the patient first, then tube position, secretions, circuit, CXR or ultrasound context, PEEP response, recruitability, proning candidacy, and whether the lungs are flooded, collapsed, or obstructed.' },
      { title: 'Hypercapnia', body: 'Separate permissive hypercapnia from dangerous dynamic hyperinflation. In obstructive physiology, longer expiratory time may matter more than pushing the rate higher.' }
    ],
    emergencies: [
      { title: 'High peak pressure', body: 'Differentiate airway resistance from poor compliance. If plateau is normal, think bronchospasm, mucus, tube kinking. If plateau is also high, think edema, ARDS, effusion, pneumothorax, abdominal pressure.', note: 'Peak and plateau are answering different questions.' },
      { title: 'Auto-PEEP / breath stacking', body: 'Common in asthma/COPD. Treat the patient, not just the screen: bronchodilate, sedate if needed, lower RR, increase inspiratory flow, and allow longer expiration.', note: 'Disconnect briefly if crashing from severe dynamic hyperinflation.' },
      { title: 'Dyssynchrony spiraling the case', body: 'Check trigger, flow, inspiratory time, sedation, pain, delirium, and the mode itself. Sometimes the vent is fighting the patient because your mode no longer matches the physiology.', note: 'Always look at waveforms before reflexively deepening sedation.' }
    ],
    pearls: [
      'Plateau pressure and driving pressure often tell you more about lung stress than peak pressure alone.',
      'ARDS management is not only about the vent — prone positioning, fluids, paralysis strategy, and cause control matter too.',
      'When a vented patient worsens suddenly, check patient → tube → circuit → physiology in that order.',
      'Liberation starts the day you intubate: sedation minimization, secretion control, mobility, and daily readiness assessment.'
    ],
    cases: [
      { title: 'ARDS with worsening P/F ratio overnight', level: 'ICU', focus: 'Proning / PEEP / lung protection', prompt: 'How would you respond to increasing FiO2 requirements, worsening compliance, and a plateau pressure that is drifting upward?' },
      { title: 'Severe asthma on the vent', level: 'Rapid response', focus: 'Auto-PEEP', prompt: 'The patient becomes hypotensive with high peak pressures and prolonged exhalation. What vent changes and bedside maneuvers come first?' }
    ]
  },
  dialysis: {
    title: 'Dialysis Management',
    icon: '🩺',
    blurb: 'Modality selection, prescriptions, ultrafiltration strategy, electrolyte crises, and access troubleshooting.',
    subtitle: 'When to start RRT, which modality fits the patient, and how to talk to nephrology with the right vocabulary.',
    tags: ['CRRT', 'Hyperkalemia', 'UF strategy'],
    simPrompt: 'Create an ICU renal replacement therapy simulation involving modality choice, severe metabolic derangement, and fluid management.',
    overviewCards: [
      { title: 'When to start', body: 'Think refractory hyperkalemia, severe acidosis, volume overload not responding to diuretics, symptomatic uremia, or intoxications where dialysis changes outcomes.' },
      { title: 'IHD vs CRRT vs SLED', body: 'Choose based on hemodynamic stability, urgency, volume goals, solute control, and nursing / unit logistics.' },
      { title: 'Prescription mindset', body: 'Even if nephrology writes the final order, you should be able to explain the problem in terms of clearance, ultrafiltration, and tempo.' },
      { title: 'Access matters', body: 'Bad access creates bad dialysis. When a circuit underperforms, think catheter position, clotting, line reversal, pressure alarms, and anticoagulation strategy.' }
    ],
    workflows: [
      { title: 'Modality selection', body: 'If the patient is on escalating vasopressors or cannot tolerate rapid volume shifts, CRRT usually makes more physiologic sense. Stable patients often tolerate intermittent HD or SLED depending on timing and resources.' },
      { title: 'Volume removal', body: 'Separate fluid removal from solute clearance in your mental model. The sickest patients often need slow steady ultrafiltration rather than aggressive intermittent removal that causes repeated hypotension.' },
      { title: 'Electrolyte crisis language', body: 'Describe the actual danger: rising potassium with ECG change, severe acidemia with shock, progressive pulmonary edema, or refractory uremic symptoms. That makes the consult clearer and faster.' }
    ],
    emergencies: [
      { title: 'Hyperkalemia despite temporizing measures', body: 'Dialysis is definitive potassium removal when the membrane-stabilizing and shift therapies are not enough or the rebound risk is high.', note: 'Say what has already been given and whether ECG changes are present.' },
      { title: 'CRRT circuit keeps clotting', body: 'Check filtration fraction, access pressures, catheter position, blood flow rate, anticoagulation plan, and whether hemoconcentration is too aggressive.', note: 'A technical issue can masquerade as a physiologic one.' },
      { title: 'UF intolerance', body: 'If blood pressure collapses every time fluid comes off, reassess rate, vasoplegia, RV failure, sepsis, albumin status, and whether you are trying to remove fluid faster than the refill rate permits.', note: 'The answer is not always "more pressor and keep pulling."' }
    ],
    pearls: [
      'Residents sound stronger on nephrology consults when they clearly state modality goal, fluid goal, and urgency.',
      'A patient can need dialysis for clearance, for fluid, or for both — say which one is driving the decision.',
      'CRRT is gentler, not magic; you still need to decide how much UF is actually tolerable.',
      'Trend phosphate, calcium, and filter performance when patients are on prolonged continuous therapy.'
    ],
    cases: [
      { title: 'Shocky septic patient with pH 7.05 and K 6.7', level: 'ICU', focus: 'CRRT start', prompt: 'The patient is on vasopressors and worsening despite temporizing hyperkalemia treatment. How would you frame the case and why is CRRT more attractive than IHD?' },
      { title: 'Pulmonary edema with marginal pressure', level: 'Floor to ICU', focus: 'UF strategy', prompt: 'The chest x-ray is wet and the patient is dyspneic, but pressure is soft. How do you think about fluid removal without crashing them?' }
    ]
  },
  transplant: {
    title: 'Transplant Medicine',
    icon: '🧬',
    blurb: 'Organ-specific consult survival guide for immunosuppression, rejection clues, infection risk, and dangerous interactions.',
    subtitle: 'Identify the organ, the timeline, the baseline graft function, and the medication changes before you anchor on infection, rejection, or routine medicine pathology.',
    tags: ['Immunosuppression', 'Rejection', 'Opportunistic infection'],
    simPrompt: 'Create a complex inpatient simulation involving a transplant recipient with concern for infection versus rejection, including medication interaction risk and organ-specific graft dysfunction.',
    overviewCards: [
      { title: 'Transplant landscape', body: 'Six main solid-organ groups: kidney, lung, heart, liver, pancreas, and small bowel. Kidney is the most commonly transplanted organ.' },
      { title: 'Medication backbone', body: 'Most recipients live on a combination of calcineurin inhibition, steroids, and an antiproliferative agent, with frequent blood monitoring early after transplant.' },
      { title: 'Infection prevention', body: 'Antibiotic and antiviral prophylaxis commonly continues for roughly 3–12 months after kidney or liver transplant, while infectious risk stays especially high in the early months after any transplant.' },
      { title: 'Rejection is time-sensitive', body: 'Rejection can still happen even when the patient says they are taking every dose. Early recognition, routine clinic follow-up, and transplant-directed biopsy or surveillance testing are recurring themes.' }
    ],
    workflows: [
      { title: 'First 60-second transplant history', body: 'Get the organ, transplant date, transplant center, baseline graft function, current immunosuppressants, prophylaxis, recent drug-level checks, prior rejection history, and what changed this admission.' },
      { title: 'Infection vs rejection', body: 'Use the timeline to frame the risk. Early post-transplant patients have heavy immunosuppression and procedure-related complications. The 1–6 month window is classic for opportunistic infection if prophylaxis is incomplete or immunosuppression is intense.' },
      { title: 'Medication safety', body: 'Confirm tacrolimus or cyclosporine timing, recent troughs, adherence, vomiting or diarrhea, and any new interacting drug. Azoles, macrolides, rifamycins, diltiazem/verapamil, anticonvulsants, and nephrotoxins can rapidly change graft safety.' },
      { title: 'Organ-specific graft dysfunction', body: 'Kidney: trend creatinine, urine output, ultrasound, obstruction. Liver: bilirubin, INR, AST/ALT pattern, biliary or vascular complications. Heart: hemodynamics, arrhythmia, echo change. Lung: new dyspnea, oxygen need, or spirometric decline is potentially graft-threatening.' }
    ],
    emergencies: [
      { title: 'Acute graft dysfunction', body: 'A sudden creatinine rise, worsening bilirubin/INR, new heart failure physiology, or new hypoxemia in a lung recipient is not routine. Consider rejection, infection, obstruction, thrombosis, ischemia, medication toxicity, and volume issues simultaneously.', note: 'Call the transplant team early and avoid casual immunosuppression changes.' },
      { title: 'Fever in an immunosuppressed recipient', body: 'The source may be bacterial, viral, fungal, or donor-related, and the usual inflammatory response may be muted. Pair early cultures and imaging with medication review, prophylaxis history, and CMV/BK context.', note: 'Normal-looking vitals do not lower the stakes as much as they do in other patients.' },
      { title: 'Tacrolimus / cyclosporine toxicity', body: 'Think this whenever AKI, tremor, neurotoxicity, refractory hypertension, hyperkalemia, or unexplained graft dysfunction appears after a medication change.', note: 'Always ask what new antibiotic, antifungal, antiarrhythmic, CCB, or seizure drug was started.' },
      { title: 'Lung or heart transplant decompensation', body: 'New breathlessness in a lung recipient or new low-output / arrhythmic physiology in a heart recipient should trigger rapid escalation.', note: 'These patients can look only slightly worse before they become very unstable.' }
    ],
    pearls: [
      'Ask four things first: what organ, when transplanted, what baseline graft function, and what immunosuppressants/prophylaxis are active right now.',
      'Rejection can still occur despite adherence; transplant teams care about timing, trend, and surveillance data, not just a single abnormal lab.',
      'Do not reflexively stop tacrolimus, cyclosporine, mycophenolate, or prednisone overnight without a deliberate plan.',
      'Transplant patients still get ordinary inpatient problems — sepsis, volume depletion, obstruction, PE, ACS, GI bleed.'
    ],
    organCards: [
      { title: 'Kidney', body: 'Most commonly transplanted. Anchors: creatinine trend, urine output, tacrolimus timing/level, obstruction or vascular issue, BK/CMV context, diarrhea causing tacrolimus swings.' },
      { title: 'Liver', body: 'Rejection most common in first 6 months. Track bilirubin, INR, AST/ALT pattern, alk phos, biliary obstruction/leak, vascular compromise, infection, medication adherence.' },
      { title: 'Heart', body: 'Frequent early follow-up with blood work, echo, and often biopsy. Infections very common in first 12–18 months. Longer-term: hypertension, CMV, cardiac allograft vasculopathy.' },
      { title: 'Lung', body: 'Any new dyspnea is high stakes. Rejection in roughly 20–30% of recipients in first year. Breathlessness, worsening spirometry, or new fluid should raise concern for rejection, infection, edema, or CLAD.' }
    ],
    timelineCards: [
      { title: '0–1 mo', body: 'Heavy immunosuppression, line/device exposure, delayed graft function, vascular or anastomotic complications, donor-derived infection, medication titration errors.' },
      { title: '1–6 mo', body: 'Classic window for rejection and opportunistic infection if prophylaxis is incomplete. Kidney and lung rejection risk especially high.' },
      { title: '6–12 mo', body: 'Regimen may be tapering, but CMV, medication toxicity, evolving chronic dysfunction, recurrent primary disease, and late rejection still matter.' },
      { title: 'Late', body: 'Chronic allograft dysfunction, malignancy, skin cancer, diabetes, chronic kidney injury from calcineurin exposure, organ-specific long-term complications.' }
    ],
    redFlags: [
      'A home immunosuppressant was held in the ED and nobody has a restart plan.',
      'There is a new interacting medication but no one checked trough timing or levels.',
      'The patient cannot name their prophylaxis or says they recently ran out of it.',
      'Graft labs are worsening but everyone is calling it dehydration without imaging, cultures, or transplant input.',
      'A lung recipient has new dyspnea or a heart recipient has new arrhythmia and the transplant center has not been called.'
    ],
    cases: [
      { title: 'Kidney transplant with AKI after antibiotics', level: 'Night float', focus: 'Tacrolimus toxicity vs rejection', prompt: 'A kidney recipient develops rising creatinine, hyperkalemia, tremor, and diarrhea after a new antimicrobial was started. How do you separate volume loss, tacrolimus toxicity, obstruction, and rejection in the first pass?' },
      { title: 'Liver transplant with rising bilirubin and fever', level: 'Cross-cover', focus: 'Biliary complication vs cholangitis vs rejection', prompt: 'Which labs, cultures, imaging, medication questions, and transplant-history details are non-negotiable before you label this simply sepsis?' },
      { title: 'Heart transplant with dyspnea and low-output physiology', level: 'ICU consult', focus: 'Infection, rejection, or CAV', prompt: 'How do you frame the workup when the patient has tachycardia, rising creatinine, elevated filling pressures, and a medication list full of interaction risk?' },
      { title: 'Lung transplant with new hypoxemia', level: 'Rapid deterioration', focus: 'Urgent escalation', prompt: 'What makes this an immediate transplant call, and how do you stabilize the patient while considering rejection, infection, edema, airway issue, or chronic allograft dysfunction?' }
    ]
  }
};

const SECTIONS = [
  ['overview',    'Overview'],
  ['workflows',   'Core Workflows'],
  ['emergencies', 'Emergencies'],
  ['pearls',      'Pearls & Pitfalls'],
  ['cases',       'Practice Cases']
];

let currentTopic   = 'mcs';
let currentSection = 'overview';

/* ── Topic nav (ref-nav-btn pattern, like drugs specialties) ── */
function renderTopicNav() {
  const nav = document.getElementById('at-nav');
  if (!nav) return;
  nav.innerHTML = Object.entries(TOPICS).map(([key, t]) =>
    `<button class="ref-nav-btn${key === currentTopic ? ' active' : ''}" onclick="selectAdvancedTopic('${key}')">${t.icon} ${esc(t.title)}</button>`
  ).join('');
}

/* ── Section chips (ref-subcat-btn pattern, like drug categories) ── */
function renderSectionChips() {
  const el = document.getElementById('at-sections');
  if (!el) return;
  el.innerHTML =
    '<div class="ref-subcat-header">Sections</div>' +
    '<div class="ref-subcat-chips">' +
    SECTIONS.map(([key, label]) =>
      `<button class="ref-subcat-btn${key === currentSection ? ' active' : ''}" onclick="setAdvancedTopicTab('${key}')">${label}</button>`
    ).join('') +
    '</div>';
}

/* ── Main content renderer ── */
function renderContent() {
  const el = document.getElementById('at-detail');
  if (!el) return;
  const topic = TOPICS[currentTopic];

  let html = `<div class="at-hdr">
    <h4>${topic.icon} ${esc(topic.title)}</h4>
    <p>${esc(topic.subtitle)}</p>
    <div class="at-tags">${topic.tags.map(t => `<span class="at-tag">${esc(t)}</span>`).join('')}</div>
  </div>`;

  switch (currentSection) {
    case 'overview':    html += renderOverview(topic); break;
    case 'workflows':   html += renderWorkflows(topic); break;
    case 'emergencies': html += renderEmergencies(topic); break;
    case 'pearls':      html += renderPearls(topic); break;
    case 'cases':       html += renderCases(topic); break;
  }

  el.innerHTML = html;
}

/* ── Section renderers ── */

function renderOverview(topic) {
  let h = '';
  topic.overviewCards.forEach(c => {
    h += `<div class="at-item"><div class="at-item-title">${esc(c.title)}</div><div class="at-item-body">${esc(c.body)}</div></div>`;
  });

  if (currentTopic === 'mcs') {
    h += `<div class="at-note amber">Mechanical support is easiest to learn when you anchor to chamber failure, perfusion goals, and the complication each device is most likely to create.</div>`;
  }
  if (currentTopic === 'vent') {
    h += `<div class="at-note blue"><strong>Four bedside buckets:</strong> Initial setup · Oxygenation failure · CO₂ / ventilation failure · Liberation and readiness</div>`;
  }
  if (currentTopic === 'dialysis') {
    h += `<div class="at-sub-label">Modality Comparison</div>
      <table class="at-table"><thead><tr><th>Modality</th><th>Best Fit</th><th>Watch For</th></tr></thead><tbody>
      <tr><td>Intermittent HD</td><td>Hemodynamically stable, urgent but brief session acceptable</td><td>Hypotension, intolerance of large rapid shifts</td></tr>
      <tr><td>CRRT</td><td>Pressor-dependent, cerebral edema risk, major volume sensitivity</td><td>Circuit clotting, electrolyte losses, access issues</td></tr>
      <tr><td>SLED</td><td>Borderline hemodynamics, logistics-limited settings</td><td>Variable availability, schedule-dependent planning</td></tr>
      </tbody></table>`;
  }
  if (currentTopic === 'transplant') {
    h += '<div class="at-sub-label">Organ-Specific Anchors</div>';
    topic.organCards.forEach(c => {
      h += `<div class="at-item"><div class="at-item-title">${esc(c.title)}</div><div class="at-item-body">${esc(c.body)}</div></div>`;
    });
    h += '<div class="at-sub-label">Timeline Risk Windows</div>';
    topic.timelineCards.forEach(c => {
      h += `<div class="at-item"><div class="at-item-title">${esc(c.title)}</div><div class="at-item-body">${esc(c.body)}</div></div>`;
    });
    h += '<div class="at-sub-label">Red Flags</div><div class="at-note red">';
    topic.redFlags.forEach(f => {
      h += `<div class="at-flag">⚠ ${esc(f)}</div>`;
    });
    h += '</div>';
  }
  return h;
}

function renderWorkflows(topic) {
  let h = '';
  topic.workflows.forEach((w, i) => {
    h += `<div class="at-item at-wf"><div class="at-item-title"><span class="at-step">${i + 1}</span>${esc(w.title)}</div><div class="at-item-body">${esc(w.body)}</div></div>`;
  });
  return h;
}

function renderEmergencies(topic) {
  let h = '';
  topic.emergencies.forEach(e => {
    h += `<div class="at-item at-emerg">
      <div class="at-item-title">${esc(e.title)}</div>
      <div class="at-item-body">${esc(e.body)}</div>
      <div class="at-key-move"><span class="at-km-label">Key move</span> ${esc(e.note)}</div>
    </div>`;
  });
  return h;
}

function renderPearls(topic) {
  let h = '<div class="at-pearl-list">';
  topic.pearls.forEach(p => {
    h += `<div class="at-pearl">💡 ${esc(p)}</div>`;
  });
  h += '</div>';
  h += `<div class="at-note blue"><strong>How to use this page:</strong> Review workflows first, then emergencies, then launch a related ICU simulation. The goal is to shorten the time between recognizing the problem and saying the right next step out loud.</div>`;
  return h;
}

function renderCases(topic) {
  let h = '';
  topic.cases.forEach(c => {
    h += `<div class="at-item at-case">
      <div class="at-case-meta"><span class="at-case-lvl">${esc(c.level)}</span><span class="at-case-foc">${esc(c.focus)}</span></div>
      <div class="at-item-title">${esc(c.title)}</div>
      <div class="at-item-body">${esc(c.prompt)}</div>
      <button class="at-launch" onclick="launchAdvancedTopicSim('${esc(topic.title)}','${esc(c.prompt).replace(/'/g,"\\'")}')">⚡ Launch as simulation</button>
    </div>`;
  });
  h += `<button class="at-launch at-launch-full" onclick="launchAdvancedTopicSim('${esc(topic.title)}','${esc(topic.simPrompt).replace(/'/g,"\\'")}')">⚡ Launch general ${esc(topic.title)} simulation</button>`;
  return h;
}

/* ── Public API ── */

export function initAdvancedTopicsPage() {
  renderTopicNav();
  renderSectionChips();
  renderContent();
}

function selectAdvancedTopic(key) {
  currentTopic = key;
  currentSection = 'overview';
  renderTopicNav();
  renderSectionChips();
  renderContent();
  // scroll detail into view
  const d = document.getElementById('at-detail');
  if (d) d.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.selectAdvancedTopic = selectAdvancedTopic;

function setAdvancedTopicTab(key) {
  currentSection = key;
  renderSectionChips();
  renderContent();
}
window.setAdvancedTopicTab = setAdvancedTopicTab;

function launchAdvancedTopicSim(title, prompt) {
  const fullPrompt = title + ': ' + prompt;
  ST.S.scType = 'genicu';
  ST.S.prompt = fullPrompt;
  const pb = document.getElementById('custom-prompt');
  if (pb) pb.value = fullPrompt;
  document.querySelectorAll('[data-g="scType"]').forEach(btn => {
    btn.className = 'tb';
    if (btn.dataset.v === 'genicu') btn.classList.add('a-genicu');
  });
  if (typeof window.refreshUI === 'function') window.refreshUI();
  if (typeof window.showPage === 'function') window.showPage('home');
  setTimeout(() => { if (typeof window.startSim === 'function') window.startSim(); }, 80);
}
window.launchAdvancedTopicSim = launchAdvancedTopicSim;

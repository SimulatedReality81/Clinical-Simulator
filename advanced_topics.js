// ══════════════════════════════════════════════════════════════
// ADVANCED TOPICS — Dedicated learning hub for weaker training areas
// ══════════════════════════════════════════════════════════════
import * as ST from './state.js';

const TOPICS = {
  mcs: {
    title: 'Mechanical Circulatory Support',
    icon: '🫀',
    blurb: 'Device-first review of shock support, hemodynamics, complications, and escalation logic.',
    subtitle: 'Think like a CICU control room: match the shock phenotype to the right support strategy, know what the device changes, and troubleshoot what can kill the patient fastest.',
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
      { title: 'VA-ECMO with pulmonary edema / no aortic valve opening', body: 'Worry about LV distention and rising LVEDP. Consider unloading with Impella, IABP, venting strategy, or afterload reduction depending on the situation.', note: 'Rising wedge plus absent pulsatility is dangerous.' },
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
    subtitle: 'This section is built like a bedside checklist: identify whether the issue is oxygenation, ventilation, mechanics, or synchrony, then adjust intentionally.',
    tags: ['ARDS', 'Asynchrony', 'Liberation'],
    simPrompt: 'Create an ICU ventilator management simulation involving worsening hypoxemia and ventilator troubleshooting.',
    overviewCards: [
      { title: 'Starting point', body: 'Choose mode, tidal volume, rate, FiO2, and PEEP based on pathology — not habit. Reassess quickly after the first gas, plateau pressure, and waveform review.' },
      { title: 'Oxygenation problem', body: 'Think FiO2, PEEP, recruitment, shunt physiology, secretion burden, edema, effusion, pneumothorax, or circuit issues.' },
      { title: 'Ventilation / CO2 problem', body: 'Think minute ventilation, dead space, severe obstruction with air trapping, or patient effort that makes the numbers look confusing.' },
      { title: 'Waveforms matter', body: 'A vent alarm is not just a machine complaint — it is often your first clue to secretions, bronchospasm, dyssynchrony, kinking, or worsening compliance.' }
    ],
    workflows: [
      { title: 'Initial settings workflow', body: 'Start with predicted body weight, low tidal volume strategy when appropriate, adequate PEEP, and a realistic rate. Then watch plateau pressure, driving pressure, and gas exchange rather than chasing a perfect first blood gas.' },
      { title: 'Hypoxemia workflow', body: 'Check the patient first, then tube position, secretions, circuit, CXR or ultrasound context, PEEP response, recruitability, proning candidacy, and whether the lungs are flooded, collapsed, or obstructed.' },
      { title: 'Hypercapnia workflow', body: 'Separate permissive hypercapnia from dangerous dynamic hyperinflation. In obstructive physiology, longer expiratory time may matter more than pushing the rate higher.' }
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
    subtitle: 'This section is organized around the questions residents struggle with most: when to start RRT, which modality fits the patient, and how to talk to nephrology with the right vocabulary.',
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
      { title: 'UF intolerance', body: 'If blood pressure collapses every time fluid comes off, reassess rate, vasoplegia, RV failure, sepsis, albumin status, and whether you are trying to remove fluid faster than the refill rate permits.', note: 'The answer is not always “more pressor and keep pulling.”' }
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
    subtitle: 'Designed for the common inpatient reality: you are not the transplant service, but you need to recognize what is dangerous, what not to stop casually, and when to call urgently.',
    tags: ['Immunosuppression', 'Rejection', 'Opportunistic infection'],
    simPrompt: 'Create a complex inpatient simulation involving a transplant recipient with concern for infection versus rejection.',
    overviewCards: [
      { title: 'General rule', body: 'Any transplant patient can decompensate from infection, rejection, medication toxicity, or a non-transplant problem. Do not anchor too early.' },
      { title: 'Medication respect', body: 'Calcineurin inhibitors, antiproliferatives, steroids, and prophylactic regimens all matter. Seemingly small med changes can destabilize the graft or trigger toxicity.' },
      { title: 'Timeline matters', body: 'Immediate post-transplant complications are different from problems months or years later. Ask when the transplant happened before anything else.' },
      { title: 'Call early', body: 'If you suspect rejection, dangerous infection, graft dysfunction, or a drug-level issue, the transplant team should hear about it sooner rather than later.' }
    ],
    workflows: [
      { title: 'First pass inpatient workflow', body: 'What organ was transplanted, when, what baseline function is expected, what immunosuppressants and prophylaxis are active, and what changed from the patient’s baseline?' },
      { title: 'Infection vs rejection', body: 'Both can look inflammatory and both can injure the graft. Pair symptom pattern with labs, levels, imaging, recent medication adherence, exposure history, and transplant-specific guidance.' },
      { title: 'Medication safety workflow', body: 'Check tacrolimus or cyclosporine interactions, nephrotoxins, recent antibiotics/azoles/macrolides, and whether anyone held a home immunosuppressant without a clear plan.' }
    ],
    emergencies: [
      { title: 'Acute graft dysfunction', body: 'Treat abrupt rise in creatinine, bilirubin, transaminases, BNP, oxygen need, or spirometric decline as potentially time-sensitive. Infection, rejection, obstruction, thrombosis, and toxicity can all present abruptly.', note: 'Do not reflexively stop immunosuppression without a transplant discussion.' },
      { title: 'Fever in an immunosuppressed recipient', body: 'The organism list broadens and the inflammatory response may be muted. Get cultures, source evaluation, exposure history, prophylaxis history, and transplant input early.', note: 'Normal-looking vitals do not reassure as much as they do in other patients.' },
      { title: 'Dangerous drug interaction', body: 'Azoles, macrolides, calcium channel blockers, rifamycins, and many other agents can sharply alter calcineurin inhibitor levels. Toxicity and under-immunosuppression are both real.', note: 'Always ask what changed this week.' }
    ],
    pearls: [
      'Every transplant patient needs a timeline, a graft baseline, and a current immunosuppression list in the first minute of discussion.',
      '“Infection versus rejection” is a framing tool, not the whole differential.',
      'Never be casual about holding or restarting home transplant meds; clarify with the transplant team whenever possible.',
      'Organ-specific warning signs are worth memorizing because they make you faster and safer overnight.'
    ],
    organCards: [
      { title: 'Kidney', body: 'Watch creatinine trend, urine output, tacrolimus level context, obstruction, BK/CMV history, and whether volume depletion or nephrotoxins are the real culprit.' },
      { title: 'Liver', body: 'Track bilirubin, AST/ALT, alk phos pattern, INR, biliary complications, vascular issues, infection, and tacrolimus interactions.' },
      { title: 'Heart', body: 'Think graft dysfunction, arrhythmia, hemodynamics, rejection surveillance history, opportunistic infection, and medication adherence.' },
      { title: 'Lung', body: 'Any new dyspnea is high stakes: infection, acute rejection, airway issues, edema, bronchiolitis obliterans trajectory, or non-transplant pulmonary disease.' }
    ],
    timelineCards: [
      { title: 'Immediate / early', body: 'Surgical complications, vascular problems, intense immunosuppression, nosocomial infection, medication titration issues.' },
      { title: '1–6 months', body: 'Peak opportunistic infection window if prophylaxis is incomplete or immunosuppression is high; rejection and drug toxicity remain very active concerns.' },
      { title: 'Late post-transplant', body: 'Chronic rejection, chronic allograft dysfunction, malignancy risk, routine community infections, cardiovascular and renal medication toxicities.' }
    ],
    cases: [
      { title: 'Kidney transplant recipient with rising creatinine and fever', level: 'Night float', focus: 'Infection vs rejection', prompt: 'How do you frame the first workup and which medication / transplant-history details are non-negotiable to gather?' },
      { title: 'Lung transplant recipient with new hypoxemia', level: 'ICU consult', focus: 'Escalation', prompt: 'What makes this an urgent call to transplant and how do you avoid missing a graft-threatening process while still treating routine critical illness?' }
    ]
  }
};

const TABS = [
  ['overview', 'Overview'],
  ['workflows', 'Core Workflows'],
  ['emergencies', 'Emergencies'],
  ['pearls', 'Pearls / Pitfalls'],
  ['cases', 'Practice Cases']
];

let currentTopic = 'mcs';
let currentTab = 'overview';

function esc(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderList(items = []) {
  return `<div class="advanced-list">${items.map(item => `<div class="advanced-list-item"><span class="advanced-list-bullet">•</span><span>${esc(item)}</span></div>`).join('')}</div>`;
}

function renderTopicGrid() {
  const grid = document.getElementById('advanced-topic-grid');
  if (!grid) return;
  grid.innerHTML = Object.entries(TOPICS).map(([key, topic]) => `
    <article class="advanced-topic-card${key === currentTopic ? ' active' : ''}" onclick="selectAdvancedTopic('${key}')">
      <div class="advanced-topic-card-top">
        <div class="advanced-topic-icon">${topic.icon}</div>
        <div class="advanced-topic-meta">${topic.tags.map(tag => `<span class="advanced-chip">${esc(tag)}</span>`).join('')}</div>
      </div>
      <div>
        <h4>${esc(topic.title)}</h4>
        <p>${esc(topic.blurb)}</p>
      </div>
    </article>
  `).join('');
}

function renderOverview(topicKey, topic) {
  const special = {
    mcs: `
      <div class="advanced-grid-4">
        ${topic.overviewCards.map(card => `
          <div class="advanced-panel">
            <h4>${esc(card.title)}</h4>
            <p>${esc(card.body)}</p>
          </div>`).join('')}
      </div>
      <div class="advanced-pearl-box">
        <h4>How to think about this section</h4>
        <p>Mechanical support is easiest to learn when you anchor to chamber failure, perfusion goals, and the complication each device is most likely to create.</p>
      </div>
    `,
    vent: `
      <div class="advanced-grid-2">
        <div class="advanced-panel">
          <h4>Four bedside buckets</h4>
          ${renderList(['Initial setup', 'Oxygenation failure', 'CO2 / ventilation failure', 'Liberation and readiness'])}
        </div>
        <div class="advanced-panel">
          <h4>Interpret the vent like a monitor</h4>
          ${renderList(['Peak vs plateau pressure', 'Waveforms and trigger mismatch', 'Expiratory flow not reaching baseline', 'P/F ratio + mechanics + patient effort'])}
        </div>
      </div>
      <div class="advanced-grid-4">
        ${topic.overviewCards.map(card => `
          <div class="advanced-panel">
            <h4>${esc(card.title)}</h4>
            <p>${esc(card.body)}</p>
          </div>`).join('')}
      </div>
    `,
    dialysis: `
      <div class="advanced-table-like">
        <div class="advanced-table-row">
          <div><strong>Intermittent HD</strong><span>Fast solute and fluid removal for stable patients.</span></div>
          <div><strong>Best fit</strong><span>Hemodynamically stable, urgent but brief session acceptable.</span></div>
          <div><strong>Watch for</strong><span>Hypotension and intolerance of large rapid shifts.</span></div>
        </div>
        <div class="advanced-table-row">
          <div><strong>CRRT</strong><span>Slow continuous control of solute and volume in critical illness.</span></div>
          <div><strong>Best fit</strong><span>Pressor-dependent, cerebral edema risk, or major volume sensitivity.</span></div>
          <div><strong>Watch for</strong><span>Circuit clotting, electrolyte losses, access issues.</span></div>
        </div>
        <div class="advanced-table-row">
          <div><strong>SLED</strong><span>Middle-ground approach when slower therapy is helpful but full CRRT is not required.</span></div>
          <div><strong>Best fit</strong><span>Borderline hemodynamics, logistics-limited settings.</span></div>
          <div><strong>Watch for</strong><span>Variable availability and schedule-dependent planning.</span></div>
        </div>
      </div>
      <div class="advanced-grid-4">
        ${topic.overviewCards.map(card => `
          <div class="advanced-panel">
            <h4>${esc(card.title)}</h4>
            <p>${esc(card.body)}</p>
          </div>`).join('')}
      </div>
    `,
    transplant: `
      <div class="advanced-organ-grid">
        ${topic.organCards.map(card => `
          <div class="advanced-organ-card">
            <h4>${esc(card.title)}</h4>
            <p>${esc(card.body)}</p>
          </div>`).join('')}
      </div>
      <div class="advanced-grid-3">
        ${topic.timelineCards.map(card => `
          <div class="advanced-panel">
            <h4>${esc(card.title)}</h4>
            <p>${esc(card.body)}</p>
          </div>`).join('')}
      </div>
      <p class="advanced-section-note">Fastest habit to build: whenever a transplant patient is discussed, ask what organ, when, what baseline function, and which immunosuppressants or prophylaxis are active right now.</p>
    `
  };
  return special[topicKey] || '';
}

function renderWorkflows(topic) {
  return `
    <div class="advanced-grid-3">
      ${topic.workflows.map(flow => `
        <div class="advanced-flow-card">
          <h4>${esc(flow.title)}</h4>
          <p>${esc(flow.body)}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function renderEmergencies(topic) {
  return `
    <div class="advanced-grid-3">
      ${topic.emergencies.map(item => `
        <div class="advanced-panel advanced-emergency">
          <h4>${esc(item.title)}</h4>
          <p>${esc(item.body)}</p>
          <div class="advanced-kv" style="margin-top:.75rem;">
            <span class="advanced-kv-label">Key move</span>
            <span>${esc(item.note)}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderPearls(topic) {
  return `
    <div class="advanced-grid-2">
      <div class="advanced-pearl-box">
        <h4>High-yield pearls</h4>
        ${renderList(topic.pearls)}
      </div>
      <div class="advanced-panel">
        <h4>How to use this page</h4>
        <p>Review the workflow first, then the emergencies, then launch a related ICU simulation. The goal is to shorten the time between recognizing the problem and saying the right next step out loud.</p>
      </div>
    </div>
  `;
}

function renderCases(topic) {
  return `
    <div class="advanced-cases">
      ${topic.cases.map(item => `
        <div class="advanced-case-card">
          <div class="advanced-case-meta">
            <span>${esc(item.level)}</span>
            <span>${esc(item.focus)}</span>
          </div>
          <h4>${esc(item.title)}</h4>
          <p>${esc(item.prompt)}</p>
          <button class="advanced-action-btn" style="margin-top:.9rem;" onclick="launchAdvancedTopicSim('${esc(topic.title)}', '${esc(item.prompt)}')">Launch this case as a sim</button>
        </div>
      `).join('')}
    </div>
  `;
}

function renderTabBody(topicKey, topic) {
  switch (currentTab) {
    case 'overview': return renderOverview(topicKey, topic);
    case 'workflows': return renderWorkflows(topic);
    case 'emergencies': return renderEmergencies(topic);
    case 'pearls': return renderPearls(topic);
    case 'cases': return renderCases(topic);
    default: return '';
  }
}

function renderDetail() {
  const detail = document.getElementById('advanced-topic-detail');
  if (!detail) return;
  const topic = TOPICS[currentTopic];
  detail.innerHTML = `
    <div class="advanced-detail-head">
      <div class="advanced-detail-title-wrap">
        <div class="advanced-detail-icon">${topic.icon}</div>
        <div class="advanced-detail-title">
          <h3>${esc(topic.title)}</h3>
          <p>${esc(topic.subtitle)}</p>
        </div>
      </div>
      <button class="advanced-action-btn" onclick="launchAdvancedTopicSim('${esc(topic.title)}', '${esc(topic.simPrompt)}')">⚡ Launch related sim</button>
    </div>
    <div class="advanced-tabs">
      ${TABS.map(([key, label]) => `<button class="advanced-tab${key === currentTab ? ' active' : ''}" onclick="setAdvancedTopicTab('${key}')">${esc(label)}</button>`).join('')}
    </div>
    <div class="advanced-tab-panel">${renderTabBody(currentTopic, topic)}</div>
  `;
}

export function initAdvancedTopicsPage() {
  renderTopicGrid();
  renderDetail();
}

function selectAdvancedTopic(topicKey) {
  currentTopic = topicKey;
  currentTab = 'overview';
  renderTopicGrid();
  renderDetail();
}
window.selectAdvancedTopic = selectAdvancedTopic;

function setAdvancedTopicTab(tabKey) {
  currentTab = tabKey;
  renderDetail();
}
window.setAdvancedTopicTab = setAdvancedTopicTab;

function launchAdvancedTopicSim(title, prompt) {
  const fullPrompt = `${title}: ${prompt}`;
  ST.S.scType = 'genicu';
  ST.S.prompt = fullPrompt;

  const promptBox = document.getElementById('custom-prompt');
  if (promptBox) promptBox.value = fullPrompt;

  document.querySelectorAll('[data-g="scType"]').forEach(btn => {
    const isMatch = btn.dataset.v === 'genicu';
    btn.className = 'tb';
    if (isMatch) btn.classList.add('a-genicu');
  });

  if (typeof window.refreshUI === 'function') window.refreshUI();
  if (typeof window.showPage === 'function') window.showPage('home');
  setTimeout(() => {
    if (typeof window.startSim === 'function') window.startSim();
  }, 80);
}
window.launchAdvancedTopicSim = launchAdvancedTopicSim;

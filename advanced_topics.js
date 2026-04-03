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
    subtitle: 'Built for the inpatient resident: identify the organ, the timeline, the baseline graft function, and the medication changes before you anchor on infection, rejection, or routine medicine pathology.',
    tags: ['Immunosuppression', 'Rejection', 'Opportunistic infection'],
    simPrompt: 'Create a complex inpatient simulation involving a transplant recipient with concern for infection versus rejection, including medication interaction risk and organ-specific graft dysfunction.',
    overviewCards: [
      { title: 'NHSBT transplant landscape', body: 'NHS Blood and Transplant organizes its patient education around six main solid-organ groups: kidney, lung, heart, liver, pancreas, and small bowel. Kidney is the most commonly transplanted organ.' },
      { title: 'Medication backbone', body: 'Most recipients live on a combination of calcineurin inhibition, steroids, and an antiproliferative agent, with frequent blood monitoring early after transplant. The exact regimen varies by organ and center.' },
      { title: 'Infection prevention', body: 'NHSBT emphasizes that antibiotic and antiviral prophylaxis commonly continues for roughly 3–12 months after kidney or liver transplant, while infectious risk stays especially high in the early months after any transplant.' },
      { title: 'Rejection is time-sensitive', body: 'Rejection can still happen even when the patient says they are taking every dose. Early recognition, routine clinic follow-up, and transplant-directed biopsy or surveillance testing are recurring themes across organ types.' }
    ],
    workflows: [
      { title: 'First 60-second transplant history', body: 'Get the organ, transplant date, transplant center, baseline graft function, current immunosuppressants, prophylaxis, recent drug-level checks, prior rejection history, and what changed this admission. This should happen before you debate the differential.' },
      { title: 'Infection vs rejection workflow', body: 'Use the timeline to frame the risk. Early post-transplant patients have heavy immunosuppression and procedure-related complications. The 1–6 month window is classic for opportunistic infection if prophylaxis is incomplete or immunosuppression is intense. Later presentations more often mix chronic graft issues, malignancy risk, medication toxicity, and routine community infections.' },
      { title: 'Medication safety workflow', body: 'Confirm tacrolimus or cyclosporine timing, recent troughs, adherence, vomiting or diarrhea, and any new interacting drug. Azoles, macrolides, rifamycins, diltiazem/verapamil, anticonvulsants, and nephrotoxins can rapidly change graft safety.' },
      { title: 'Organ-specific graft dysfunction workflow', body: 'Kidney: trend creatinine, urine output, ultrasound context, and obstruction. Liver: follow bilirubin, INR, AST/ALT pattern, alk phos, and biliary or vascular complications. Heart: think hemodynamics, arrhythmia, echo change, and rejection surveillance. Lung: treat new dyspnea, oxygen need, or spirometric decline as potentially graft-threatening until proven otherwise.' }
    ],
    emergencies: [
      { title: 'Acute graft dysfunction', body: 'A sudden creatinine rise, worsening bilirubin/INR, new heart failure physiology, or new hypoxemia in a lung recipient is not a routine lab abnormality. Consider rejection, infection, obstruction, thrombosis, ischemia, medication toxicity, and volume issues simultaneously.', note: 'Call the transplant team early and avoid casual immunosuppression changes.' },
      { title: 'Fever in an immunosuppressed recipient', body: 'The source may be bacterial, viral, fungal, or donor-related, and the usual inflammatory response may be muted. Pair early cultures and imaging with medication review, prophylaxis history, CMV/BK context when relevant, and transplant-specific exposure history.', note: 'Normal-looking vitals do not lower the stakes as much as they do in other patients.' },
      { title: 'Tacrolimus / cyclosporine interaction or toxicity', body: 'Think this whenever AKI, tremor, neurotoxicity, refractory hypertension, hyperkalemia, or unexplained graft dysfunction appears after a medication change. Drug–drug interaction and dehydration are common real-world triggers.', note: 'Always ask what new antibiotic, antifungal, antiarrhythmic, calcium-channel blocker, or seizure drug was started.' },
      { title: 'Do-not-miss lung or heart transplant decompensation', body: 'New breathlessness in a lung recipient or new low-output / arrhythmic physiology in a heart recipient should trigger rapid escalation. NHSBT notes lung rejection often presents with breathlessness and tiredness, while heart recipients undergo frequent surveillance with blood tests, echo, and often biopsy in the early months.', note: 'These patients can look only slightly worse before they become very unstable.' }
    ],
    pearls: [
      'Ask four things first: what organ, when transplanted, what baseline graft function, and what immunosuppressants/prophylaxis are active right now.',
      'Rejection can still occur despite adherence; transplant teams care deeply about timing, trend, and surveillance data, not just a single abnormal lab.',
      'Kidney and lung rejection risk is highest in the first 3–6 months; liver rejection risk is highest in the first 6 months; heart recipients also face especially intense surveillance and infection risk in the early months.',
      'For kidney and liver recipients, NHSBT specifically highlights antibiotic and antiviral prophylaxis during roughly the first 3–12 months after transplant.',
      'Do not reflexively stop tacrolimus, cyclosporine, mycophenolate, or prednisone overnight without a deliberate plan unless there is a true toxicity or a transplant-directed recommendation.',
      'Transplant patients still get ordinary inpatient problems; do not let the graft history blind you to sepsis, volume depletion, obstruction, PE, ACS, GI bleed, or routine ICU physiology.'
    ],
    organCards: [
      { title: 'Kidney', body: 'NHSBT notes kidney is the most commonly transplanted organ. Early inpatient anchors: creatinine trend, urine output, tacrolimus timing/level, obstruction or vascular issue, BK/CMV context, diarrhea causing tacrolimus swings, and whether nephrotoxins or hypovolemia explain the change better than rejection.' },
      { title: 'Liver', body: 'Rejection is most common in the first 6 months. Worsening graft function often appears first on blood tests. Track bilirubin, INR, AST/ALT pattern, alk phos, biliary obstruction/leak, vascular compromise, infection, and medication adherence or interaction.' },
      { title: 'Heart', body: 'NHSBT highlights frequent early clinic follow-up with blood work, echocardiography, and often biopsy. Infections are very common in the first 12–18 months, and longer-term complications include hypertension, CMV, and cardiac allograft vasculopathy.' },
      { title: 'Lung', body: 'Any new dyspnea is high stakes. NHSBT reports rejection in roughly 20–30% of recipients in the first year, with highest risk in the first 3–6 months. Breathlessness, tiredness, worsening spirometry, or new fluid should raise concern for rejection, infection, edema, airway complication, or CLAD trajectory.' }
    ],
    drugCards: [
      { title: 'Calcineurin inhibitors', body: 'Tacrolimus and cyclosporine are common backbone drugs. Watch trough timing, AKI, tremor, hyperkalemia, hypertension, neurotoxicity, and interacting antibiotics or azoles.' },
      { title: 'Antiproliferatives', body: 'Mycophenolate and azathioprine often add rejection protection but can bring leukopenia, GI upset, and infection risk. Mycophenolate is a common culprit when a patient has major diarrhea.' },
      { title: 'Steroids', body: 'Prednisone is still common, especially early after transplant or during treatment of rejection. Think hyperglycemia, mood change, infection risk, hypertension, and bone loss.' },
      { title: 'Prophylaxis', body: 'Expect organ- and center-specific antibacterial, antiviral, and often antifungal or Pneumocystis prophylaxis. If it was recently stopped or doses were missed, ask why.' }
    ],
    timelineCards: [
      { title: '0–1 month', body: 'Heavy immunosuppression, line/device exposure, delayed graft function, vascular or anastomotic complications, biliary/airway issues, donor-derived infection, and medication titration errors dominate the differential.' },
      { title: '1–6 months', body: 'This is the classic window where rejection remains active and opportunistic infection matters most if prophylaxis is incomplete or immunosuppression is intense. Kidney and lung rejection risk is especially high across the first 3–6 months; liver rejection risk peaks across the first 6 months.' },
      { title: '6–12 months', body: 'The regimen may be tapering, but CMV, medication toxicity, evolving chronic dysfunction, recurrent primary disease, and late rejection still matter. Problems often look less dramatic than they actually are.' },
      { title: 'Late post-transplant', body: 'Think chronic allograft dysfunction, malignancy, skin cancer, hypertension, diabetes, chronic kidney injury from calcineurin exposure, routine community infections, and organ-specific long-term complications such as cardiac allograft vasculopathy or chronic lung allograft dysfunction.' }
    ],
    redFlags: [
      'A home immunosuppressant was held in the ED and nobody has a restart plan.',
      'There is a new interacting medication but no one checked trough timing or levels.',
      'The patient cannot name their prophylaxis or says they recently ran out of it.',
      'The graft labs are worsening but everyone is calling it dehydration without imaging, cultures, or transplant input.',
      'A lung recipient has new dyspnea or a heart recipient has new arrhythmia / low-output symptoms and the transplant center has not been called.'
    ],
    cases: [
      { title: 'Kidney transplant recipient with AKI after antibiotics', level: 'Night float', focus: 'Tacrolimus toxicity vs rejection', prompt: 'A kidney recipient develops rising creatinine, hyperkalemia, tremor, and diarrhea after a new antimicrobial was started. How do you separate volume loss, tacrolimus toxicity, obstruction, and rejection in the first pass?' },
      { title: 'Liver transplant recipient with rising bilirubin and fever', level: 'Cross-cover → admit', focus: 'Biliary complication vs cholangitis vs rejection', prompt: 'Which labs, cultures, imaging, medication questions, and transplant-history details are non-negotiable before you label this simply sepsis?' },
      { title: 'Heart transplant patient with dyspnea and low-output physiology', level: 'ICU consult', focus: 'Infection, rejection, or CAV', prompt: 'How do you frame the workup when the patient has tachycardia, rising creatinine, elevated filling pressures, and a medication list full of interaction risk?' },
      { title: 'Lung transplant recipient with new hypoxemia', level: 'Rapid deterioration', focus: 'Urgent escalation', prompt: 'What makes this an immediate transplant call, and how do you stabilize the patient while considering rejection, infection, edema, airway issue, or chronic allograft dysfunction?' }
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
      <div class="advanced-grid-4">
        ${topic.overviewCards.map(card => `
          <div class="advanced-panel">
            <h4>${esc(card.title)}</h4>
            <p>${esc(card.body)}</p>
          </div>`).join('')}
      </div>
      <div class="advanced-organ-grid">
        ${topic.organCards.map(card => `
          <div class="advanced-organ-card">
            <h4>${esc(card.title)}</h4>
            <p>${esc(card.body)}</p>
          </div>`).join('')}
      </div>
      <div class="advanced-grid-4">
        ${topic.drugCards.map(card => `
          <div class="advanced-panel">
            <h4>${esc(card.title)}</h4>
            <p>${esc(card.body)}</p>
          </div>`).join('')}
      </div>
      <div class="advanced-grid-4">
        ${topic.timelineCards.map(card => `
          <div class="advanced-panel">
            <h4>${esc(card.title)}</h4>
            <p>${esc(card.body)}</p>
          </div>`).join('')}
      </div>
      <div class="advanced-pearl-box">
        <h4>Red flags that should speed up your call to transplant</h4>
        ${renderList(topic.redFlags)}
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

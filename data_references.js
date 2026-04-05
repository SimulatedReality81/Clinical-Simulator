// ══════════════════════════════════════════════════════════════
// DATA_REFERENCES — AI-Written Clinical Mini-Textbook
// Organized by clinical sections, rewritten for clarity
// ══════════════════════════════════════════════════════════════

export const CLIN_REF_ALL=[

// ═══════════════════════════════════════
// CARDIOLOGY
// ═══════════════════════════════════════

{topic:"ACLS: Cardiac Arrest & TTM",chapter:"Cardiology",page:"p.4-5",content:`CARDIAC ARREST MANAGEMENT
Approach: Check pulse (10 sec max) → Call code → Start CPR (C-A-B)
Compressions: 2-2.4 inches deep, 100-120 BPM, full recoil, minimize interruptions
Without advanced airway: 30:2 compression-to-ventilation ratio
With advanced airway: Continuous compressions, 1 breath every 6 seconds

SHOCKABLE RHYTHMS (VF/pVT)
- Defibrillate immediately: Biphasic 120-200J, repeat at same or higher dose
- Epinephrine 1mg IV every 3-5 minutes
- Amiodarone: 1st dose 300mg IV, 2nd dose 150mg IV
- Alternative: Lidocaine 1-1.5 mg/kg, then 0.5-0.75 mg/kg

NON-SHOCKABLE RHYTHMS (PEA/Asystole)
- Epinephrine 1mg IV every 3-5 minutes (give immediately)
- No defibrillation — focus on CPR quality and reversible causes
- Rhythm/pulse check every 2 minutes

REVERSIBLE CAUSES (H's and T's)
H's: Hypovolemia, Hypoxia, H+ (acidosis), Hypo/Hyperkalemia, Hypothermia
T's: Tension pneumothorax, Tamponade, Toxins, Thrombosis (PE or MI)

TARGETED TEMPERATURE MANAGEMENT (Post-ROSC)
- Target 32-36°C for 24 hours in comatose patients after ROSC
- TTM2 trial (2021): 33°C vs normothermia — no mortality difference
- Key: Avoid fever (>37.7°C) aggressively in all post-arrest patients`},

{topic:"ACLS: Bradycardia",chapter:"Cardiology",page:"p.6",content:`BRADYCARDIA WITH PULSE (HR <60 bpm)

ASSESSMENT
- Focused exam: vitals, mental status, perfusion, JVP
- 12-lead ECG, telemetry, BMP, Mg, lactate, troponin if ischemic
- Review medications (beta-blockers, CCBs, digoxin, amiodarone)

UNSTABLE SIGNS (any present → treat immediately)
- Hypotension/shock, altered mental status
- Ischemic chest pain, acute heart failure

TREATMENT — UNSTABLE
1. Atropine 1mg IV every 3-5 min (max 3mg) — first-line
  - Less effective after heart transplant, in Mobitz II or complete heart block
2. Transcutaneous pacing if atropine fails
  - Analgesia + sedation needed (lorazepam + dilaudid or fentanyl/midazolam)
  - Set rate 80-100, output 100mA, decrease to minimum capture
3. Dopamine 5-20 mcg/kg/min or epinephrine 2-10 mcg/min as bridge

RHYTHM IDENTIFICATION
- Sinus bradycardia: P before every QRS, 1:1 relationship
- 1st degree AV block: Prolonged PR (>200ms), all P waves conducted
- Mobitz I (Wenckebach): Progressive PR prolongation → dropped QRS (usually benign)
- Mobitz II: Constant PR with sudden dropped QRS (can progress to complete block)
- 3rd degree (Complete): P waves unrelated to QRS, escape rhythm
- 2:1 block: Cannot distinguish Mobitz I vs II — treat as Mobitz II

ETIOLOGIES
Medications, increased vagal tone, ischemia/ACS, elevated ICP, hypothyroidism, hypothermia, hyperkalemia, post-cardiac surgery`},

{topic:"ACLS: Tachycardia",chapter:"Cardiology",page:"p.7",content:`TACHYCARDIA WITH PULSE (HR >100 bpm)

UNSTABLE → Synchronized Cardioversion
- Narrow regular: Sync 50-100J
- Narrow irregular: Sync 120-200J
- Wide regular: Sync 100J
- Wide irregular: Defibrillate 120-200J (do NOT sync — treat as VF)
- Sedation first if possible (lorazepam + dilaudid)

STABLE → Determine QRS width and regularity

NARROW & REGULAR
- Likely SVT (AVNRT, AVRT, atrial flutter)
- Vagal maneuvers first (Valsalva, carotid massage)
- Adenosine 6mg rapid IV push → 12mg if no response
- If refractory: Diltiazem 0.25 mg/kg IV or metoprolol 5mg IV

NARROW & IRREGULAR
- Most likely: Atrial fibrillation
- Rate control: Diltiazem IV or metoprolol IV
- If WPW (delta waves): Avoid AV nodal blockers → procainamide or cardioversion

WIDE & REGULAR
- Assume VT until proven otherwise
- Amiodarone 150mg IV over 10 min
- Alternative: Lidocaine, procainamide
- If hemodynamically unstable → cardioversion

WIDE & IRREGULAR
- Polymorphic VT or AFib with aberrancy or AFib with WPW
- If torsades de pointes: Magnesium 2g IV, overdrive pacing
- If WPW + AFib: Procainamide (avoid AV nodal blockers)

KEY DRUG DOSES
- Adenosine: 6mg → 12mg rapid IV push with NS flush
- Amiodarone: 150mg over 10 min, then 1mg/min x6h, then 0.5mg/min x18h
- Diltiazem: 0.25mg/kg IV bolus, drip 5-10mg/hr
- Metoprolol: 2.5-5mg IV over 2 min, repeat q5 min (max 15mg)`},

{topic:"ACLS: Defibrillation/Cardioversion/Pacing",chapter:"Cardiology",page:"p.8",content:`DEFIBRILLATION
- Indication: VF or pulseless VT
- Biphasic: 120-200J (use max if unknown)
- Monophasic: 360J
- Do NOT synchronize — asynchronous shock delivery
- Resume CPR immediately after shock, rhythm check in 2 min

SYNCHRONIZED CARDIOVERSION
- Indication: Unstable tachycardia WITH a pulse
- Machine syncs shock to R wave to avoid shock during vulnerable period (T wave)
- Doses: Narrow regular 50-100J, narrow irregular 120-200J, wide regular 100J
- Must confirm SYNC mode is on before each shock

TRANSCUTANEOUS PACING
- Indication: Symptomatic bradycardia unresponsive to atropine
- Place pads anteroposterior or anterolateral
- Settings: Rate 60-80 bpm, output start at 100mA
- Increase output until electrical capture (wide QRS after each spike)
- Then increase by 10% above threshold for safety margin
- Requires sedation/analgesia — patient will feel painful contractions

TRANSVENOUS PACING
- Indication: When transcutaneous pacing fails or for prolonged pacing
- Requires central venous access (usually right IJ or femoral)
- Float pacing wire to RV under fluoroscopy or ECG guidance
- Set rate, output (start at 5mA, find threshold), sensitivity`},

{topic:"EKG Interpretation",chapter:"Cardiology",page:"p.9",content:`SYSTEMATIC EKG APPROACH
Rate: 300 / (# large boxes between R-R). Regular if R-R intervals constant.
Rhythm: P wave before every QRS? P wave morphology consistent?
Axis: Normal -30 to +90°. Lead I and aVF both positive = normal axis.
Intervals: PR 120-200ms, QRS <120ms, QTc <470ms (men), <480ms (women)
ST segments and T waves: Elevation, depression, inversions, hyperacute T waves

AXIS DETERMINATION
- Normal: I (+), aVF (+)
- LAD: I (+), aVF (−) — think LVH, LAFB, inferior MI
- RAD: I (−), aVF (+) — think RVH, LPFB, PE, lateral MI
- Extreme: I (−), aVF (−) — think lead misplacement, VT

KEY PATTERNS TO RECOGNIZE
- STEMI: ST elevation ≥1mm in 2 contiguous leads (≥2mm in V1-V3)
- LBBB: Wide QRS, dominant S in V1, broad R in V6 (consider Sgarbossa criteria)
- RBBB: Wide QRS, RSR' in V1, wide S in V6
- LVH: S in V1 + R in V5/V6 ≥35mm (Sokolow-Lyon)
- Hyperkalemia: Peaked T waves → widened QRS → sine wave
- PE: Sinus tach, S1Q3T3, right heart strain, new RBBB
- Pericarditis: Diffuse ST elevation with PR depression, ST elevation in aVR
- Digoxin effect: "Scooping" ST depression, short QT
- Brugada: Coved ST elevation in V1-V3 with RBBB pattern

ISCHEMIC TERRITORIES
- Inferior: II, III, aVF (RCA)
- Anterior: V1-V4 (LAD)
- Lateral: I, aVL, V5-V6 (LCx)
- Posterior: ST depression V1-V3, tall R waves V1-V2 (get posterior leads)`},

{topic:"Narrow Complex Tachycardia",chapter:"Cardiology",page:"p.10",content:`DEFINITION: QRS <120ms with HR >100 bpm

DIFFERENTIAL DIAGNOSIS
Regular:
- Sinus tachycardia — appropriate response to physiologic stress
- AVNRT — most common SVT, sudden onset/offset, P waves buried in QRS
- AVRT — accessory pathway (WPW), short RP tachycardia
- Atrial flutter — sawtooth pattern, usually 150 bpm (2:1 block), 300 bpm atrial rate
- Atrial tachycardia — abnormal P wave morphology, may be multifocal

Irregular:
- Atrial fibrillation — absent P waves, irregularly irregular
- MAT — ≥3 P wave morphologies, varying PP/PR intervals
- Atrial flutter with variable block

MANAGEMENT
1. Hemodynamically unstable → synchronized cardioversion
2. Sinus tachycardia → treat underlying cause (don't cardiovert!)
3. SVT (AVNRT/AVRT):
  - Vagal maneuvers (modified Valsalva most effective)
  - Adenosine 6mg → 12mg rapid IV push
  - If refractory: IV diltiazem, beta-blocker, or cardioversion
4. Atrial flutter: Rate control or cardioversion
5. MAT: Treat underlying cause (usually pulmonary disease), magnesium
6. AFib: See atrial fibrillation section

KEY PEARL
If regular at exactly 150 bpm → think atrial flutter with 2:1 block until proven otherwise`},

{topic:"Wide Complex Tachycardia",chapter:"Cardiology",page:"p.11",content:`DEFINITION: QRS ≥120ms with HR >100 bpm

CRITICAL RULE: Assume VT until proven otherwise
- VT is far more common than SVT with aberrancy in adults
- Treating VT as SVT (e.g., giving a CCB) can be fatal

DIFFERENTIATING VT vs SVT WITH ABERRANCY
Favors VT:
- AV dissociation (P waves marching through at different rate)
- Fusion or capture beats
- Very wide QRS (>160ms)
- Concordance (all precordial leads same direction)
- History of structural heart disease, prior MI
- Brugada criteria, Vereckei algorithm

Favors SVT with aberrancy:
- Known bundle branch block at baseline
- Prior identical morphology at normal rate

MANAGEMENT
Unstable: Synchronized cardioversion (wide regular 100J)
Wide irregular: Defibrillation 120-200J (polymorphic VT/VF)

Stable wide regular:
- Amiodarone 150mg IV over 10 min (preferred)
- Lidocaine 1-1.5 mg/kg IV
- Procainamide 20-50 mg/min (stop if QRS widens >50% or hypotension)
- If confirmed SVT with aberrancy: Adenosine can be diagnostic/therapeutic

Torsades de Pointes (polymorphic VT with long QT):
- IV Magnesium 2g over 15 min
- Overdrive pacing (increase HR to shorten QT)
- Isoproterenol as bridge to pacing
- Stop all QT-prolonging drugs
- Do NOT give amiodarone (prolongs QT further)`},

{topic:"Atrial Fibrillation & Flutter",chapter:"Cardiology",page:"p.12",content:`ATRIAL FIBRILLATION
Definition: Irregularly irregular rhythm, absent organized P waves

ACUTE MANAGEMENT
1. Hemodynamically unstable → cardioversion
2. Rate control (target HR <110 at rest per RACE II):
  - Beta-blocker: Metoprolol 5mg IV q5min (max 15mg)
  - CCB: Diltiazem 0.25mg/kg IV, then drip 5-10mg/hr
  - Digoxin: 0.5mg IV if HFrEF or hypotension (slow onset)
  - Amiodarone: If critically ill or HFrEF
  - Avoid CCBs in HFrEF

3. Rhythm control (consider if symptomatic or new-onset <48h):
  - Cardioversion: Electrical (120-200J synchronized) or pharmacologic
  - If AFib >48h or unknown duration: TEE to rule out LAA thrombus first, OR anticoagulate 3 weeks before cardioversion
  - Antiarrhythmics: Flecainide/propafenone (no structural heart disease), amiodarone, dofetilide, sotalol

ANTICOAGULATION — CHA₂DS₂-VASc Score
C: CHF (1), H: HTN (1), A₂: Age ≥75 (2), D: DM (1), S₂: Stroke/TIA (2), V: Vascular disease (1), A: Age 65-74 (1), Sc: Female sex (1)
- Score ≥2 (men) or ≥3 (women): Anticoagulate
- DOACs preferred over warfarin (apixaban, rivaroxaban, dabigatran, edoxaban)
- Warfarin only for: Mechanical valve or moderate-severe mitral stenosis

ATRIAL FLUTTER
- Regular sawtooth pattern, atrial rate ~300 bpm
- Typically presents with 2:1 block → ventricular rate ~150 bpm
- Management similar to AFib; often very responsive to cardioversion
- Catheter ablation highly effective for typical flutter (cavotricuspid isthmus)`},

{topic:"QTc Prolongation",chapter:"Cardiology",page:"p.13",content:`DEFINITION
- QTc >470ms (men), >480ms (women) is prolonged
- QTc >500ms or increase >60ms from baseline = high risk for torsades
- Calculate: Bazett formula QTc = QT / sqrt(RR interval)

CAUSES
Medications (most common):
- Antiarrhythmics: Sotalol, dofetilide, amiodarone, procainamide
- Antibiotics: Fluoroquinolones, azithromycin, TMP-SMX
- Antipsychotics: Haloperidol, quetiapine, ziprasidone
- Antiemetics: Ondansetron (low risk at standard doses)
- Methadone, TCAs, citalopram/escitalopram

Electrolytes: Hypokalemia, hypomagnesemia, hypocalcemia
Other: Congenital long QT, hypothermia, hypothyroidism, elevated ICP, MI

MANAGEMENT
- Discontinue offending agents
- Replete K+ to >4.0, Mg2+ to >2.0
- If torsades develops: IV magnesium 2g, overdrive pacing, isoproterenol
- Avoid >1 QT-prolonging drug simultaneously
- Monitor with telemetry if QTc >500ms
- Cardiology consult if congenital long QT suspected`},

{topic:"Chest Pain",chapter:"Cardiology",page:"p.14",content:`APPROACH TO CHEST PAIN
Must-not-miss diagnoses: ACS, PE, aortic dissection, tension pneumothorax, tamponade, esophageal rupture

HISTORY
- Quality: Pressure/squeezing (ACS), tearing/ripping (dissection), pleuritic/sharp (PE, pericarditis)
- Radiation: Jaw/arm (ACS), back (dissection), shoulder (pericarditis)
- Associated: Diaphoresis, dyspnea, nausea, syncope
- Timing: Sudden onset (PE, dissection, pneumothorax), exertional (ACS, AS)
- Risk factors: Age, DM, HTN, smoking, family Hx, hypercoagulability

WORKUP
- ECG (within 10 minutes)
- Troponin (serial, 0h and 3h or high-sensitivity 0h/1h protocol)
- CXR: Widened mediastinum (dissection), pneumothorax, effusion
- D-dimer if PE suspected (use age-adjusted cutoff: age × 10 if >50)
- CT angiography if dissection or PE suspected
- BMP, CBC, lipase if considering other etiologies

DIFFERENTIAL BY SYSTEM
Cardiac: ACS, pericarditis, myocarditis, aortic stenosis, HF
Vascular: Aortic dissection, PE
Pulmonary: Pneumothorax, pneumonia, pleuritis
GI: GERD, esophageal spasm, esophageal rupture (Boerhaave), PUD, pancreatitis
MSK: Costochondritis, rib fracture, muscle strain
Other: Herpes zoster, anxiety/panic`},

{topic:"Acute Coronary Syndrome",chapter:"Cardiology",page:"p.15",content:`CLASSIFICATION
STEMI: ST elevation ≥1mm in 2+ contiguous leads (≥2mm in V1-V3 for men)
NSTEMI: Elevated troponin without ST elevation
Unstable Angina: Ischemic symptoms without troponin elevation

STEMI MANAGEMENT
- Activate cath lab immediately — target door-to-balloon <90 min
- If PCI not available within 120 min → fibrinolytics within 30 min
- Aspirin 325mg chewed + P2Y12 inhibitor loading
- Heparin (UFH or enoxaparin)
- Do NOT delay reperfusion for any other intervention

NSTEMI/UA MANAGEMENT
- Risk stratify: TIMI score or GRACE score
- Anticoagulation: Heparin or enoxaparin
- DAPT: Aspirin + ticagrelor (preferred) or clopidogrel
- Early invasive strategy (<24h) for high-risk features:
  - TIMI ≥3, ongoing ischemia, new ST changes, elevated troponin, hemodynamic instability
- Conservative strategy for low-risk patients

ADJUNCTIVE THERAPIES
- High-intensity statin (atorvastatin 80mg)
- Beta-blocker: If stable, not in acute HF or cardiogenic shock
- ACEi/ARB: If EF <40%, HTN, DM, or CKD
- Nitroglycerin: For ongoing ischemic pain (avoid if RV infarct, hypotension, PDE5 inhibitor use)
- Avoid NSAIDs (except aspirin) — increase CV risk
- PPI if on DAPT with GI risk factors

DAPT DURATION
- Post-ACS: Typically 12 months
- May shorten to 1-3 months if high bleeding risk
- May extend beyond 12 months if high ischemic risk and low bleeding risk`},

{topic:"MI Complications",chapter:"Cardiology",page:"p.16",content:`EARLY COMPLICATIONS (hours to days)
Cardiogenic shock: Hypotension, poor perfusion, elevated filling pressures
- Treatment: Vasopressors/inotropes, mechanical support (IABP, Impella), emergent PCI

Arrhythmias:
- VF/VT: Most common cause of early death, defibrillation
- Bradycardia: Especially with inferior MI (RCA supplies AV node)
- Accelerated idioventricular rhythm: Benign reperfusion arrhythmia, no treatment needed

Right ventricular infarction: Inferior MI with RV involvement
- Hypotension, elevated JVP, clear lungs
- Treatment: Volume loading, avoid nitrates and diuretics, inotropes

SUBACUTE COMPLICATIONS (days to weeks)
Ventricular septal rupture: New harsh holosystolic murmur, step-up in O2 sat in RV
- Occurs day 3-5 (or day 1 with reperfusion)
- Treatment: Surgical repair or percutaneous closure

Free wall rupture: Sudden hemodynamic collapse, PEA arrest, tamponade
- Occurs day 3-7
- Treatment: Emergent surgical repair

Papillary muscle rupture: Acute severe mitral regurgitation
- Posteromedial papillary muscle (single blood supply from PDA) more common
- Treatment: Afterload reduction, IABP, urgent surgical repair

Pericarditis:
- Early (days 1-3): Transmural infarction, self-limited
- Late (Dressler syndrome, weeks): Autoimmune, treat with NSAIDs/colchicine

LV thrombus: Especially anterior/apical MI with akinesis
- Anticoagulation for 3-6 months minimum`},

{topic:"Cardiac Catheterization",chapter:"Cardiology",page:"p.17",content:`INDICATIONS
Diagnostic: Coronary anatomy assessment, hemodynamic evaluation
Therapeutic: PCI (angioplasty + stenting), valvuloplasty, structural interventions

PRE-PROCEDURE
- NPO ≥6 hours for solids, ≥2 hours for clear liquids
- Hold metformin day of procedure (restart 48h after if stable renal function)
- Continue aspirin; discuss P2Y12 inhibitor timing with cardiology
- Anticoagulation: Hold warfarin (bridge if high risk), hold DOACs per agent half-life
- Check renal function: IV hydration if CKD (NS 1 mL/kg/hr x 12h before and after)
- Allergy: Premedicate if contrast allergy (prednisone 50mg at 13h, 7h, 1h + diphenhydramine)

POST-PROCEDURE
- Bed rest: Femoral access 4-6h, radial access 1-2h
- Monitor access site for bleeding, hematoma, pseudoaneurysm
- Monitor renal function for contrast-induced AKI (usually peaks 48-72h)
- Check distal pulses and perfusion of accessed extremity
- Sheath removal: After ACT <150-180 seconds

COMPLICATIONS
- Access site: Bleeding, hematoma, pseudoaneurysm, AV fistula, retroperitoneal bleed
- Coronary: Dissection, perforation, acute stent thrombosis, no-reflow
- Systemic: Contrast nephropathy, cholesterol embolization, stroke, allergic reaction`},

{topic:"Non-Invasive Cardiac Testing",chapter:"Cardiology",page:"p.18",content:`CHOOSING A TEST
Can exercise? → Exercise test preferred (provides functional capacity data)
Cannot exercise? → Pharmacologic stress (dobutamine or vasodilator)
Need imaging? → Echo or nuclear (choose based on body habitus, prior imaging)

EXERCISE ECG (Treadmill Test)
- Indication: Intermediate pretest probability, can exercise, interpretable ECG
- Cannot use if: LBBB, paced rhythm, WPW, LVH with repolarization changes, digoxin, resting ST changes >1mm
- Positive: ≥1mm horizontal/downsloping ST depression

STRESS ECHOCARDIOGRAPHY
- Exercise or dobutamine stress + echo imaging
- Detects: New wall motion abnormalities with stress
- Advantages: No radiation, assesses valves and EF simultaneously
- Limited by: Poor acoustic windows (obesity, lung disease)

NUCLEAR STRESS (SPECT/PET)
- Exercise or pharmacologic (regadenoson/adenosine/dipyridamole) + radiotracer
- Detects: Perfusion defects (fixed = scar, reversible = ischemia)
- Advantages: Quantitative, good sensitivity
- Contraindications for vasodilators: Active bronchospasm, AV block without pacemaker

CORONARY CT ANGIOGRAPHY (CCTA)
- Anatomic test — directly visualizes coronary arteries
- Best for: Low-intermediate risk, ruling out CAD
- Requires: HR <65 (beta-blocker), no severe arrhythmias
- High negative predictive value

CARDIAC MRI
- Gold standard for: Myocardial viability, cardiomyopathy characterization, infiltrative disease, pericardial disease, congenital heart disease`},

{topic:"Echocardiography",chapter:"Cardiology",page:"p.19",content:`TRANSTHORACIC ECHOCARDIOGRAPHY (TTE)
Key parameters:
- EF: Normal >55%, mildly reduced 41-55%, reduced ≤40%
- Wall motion: Normal, hypokinesis, akinesis, dyskinesis
- Valves: Stenosis (mean gradient, valve area), regurgitation (severity grading)
- Diastolic function: E/A ratio, E/e', LA volume
- Pericardium: Effusion, tamponade physiology
- RV: Size, function (TAPSE >17mm normal), estimated RVSP

INDICATIONS
- New murmur, suspected HF, unexplained dyspnea or hypotension
- Evaluate LV function post-MI
- Endocarditis workup
- Source of embolism (stroke workup)
- Pericardial disease

TRANSESOPHAGEAL ECHOCARDIOGRAPHY (TEE)
Superior to TTE for:
- Valvular vegetations (endocarditis)
- Left atrial appendage thrombus (pre-cardioversion)
- Prosthetic valve evaluation
- Aortic dissection
- Intracardiac shunts (PFO, ASD)
Contraindications: Esophageal stricture, recent esophageal surgery, severe cervical spine disease
Requires: NPO ≥6h, conscious sedation, consent

POINT-OF-CARE ULTRASOUND (POCUS)
Rapid bedside assessment:
- LV function (eyeball EF)
- Pericardial effusion/tamponade
- RV dilation (PE)
- IVC for volume assessment (collapsibility)
- B-lines for pulmonary edema`},

{topic:"Heart Failure",chapter:"Cardiology",page:"p.20",content:`CLASSIFICATION
HFrEF: EF ≤40% | HFmrEF: EF 41-49% | HFpEF: EF ≥50%
NYHA: I (no limitation) → II (slight) → III (marked) → IV (symptoms at rest)

DIAGNOSIS
- Symptoms: Dyspnea, orthopnea, PND, edema, fatigue, weight gain
- Exam: Elevated JVP, S3 gallop, rales, peripheral edema, hepatomegaly
- Labs: BNP >100 or NT-proBNP >300 (adjust for age, renal function, obesity)
- Echo: Assess EF, wall motion, valves, diastolic function

ACUTE DECOMPENSATED HF
- Diuresis: IV furosemide (2.5x home dose or 40mg if diuretic-naive)
- Monitor: Daily weights, strict I/O, BMP (Cr, K, Na)
- Vasodilators: IV nitroglycerin if hypertensive and not in RV failure
- If cardiogenic shock: Inotropes (dobutamine, milrinone), vasopressors, mechanical support
- Oxygen only if hypoxemic (SpO2 <90%)

FOUR PILLARS OF HFrEF THERAPY (GDMT)
1. Beta-blocker: Carvedilol, metoprolol succinate, or bisoprolol
2. ARNI: Sacubitril/valsartan (preferred) or ACEi/ARB
  - 36-hour washout between ACEi and ARNI (angioedema risk)
3. MRA: Spironolactone or eplerenone (K <5.0, eGFR >30)
4. SGLT2 inhibitor: Dapagliflozin or empagliflozin (regardless of DM status)

Additional: Hydralazine/isosorbide dinitrate (especially in Black patients if intolerant of ARNI), ICD if EF ≤35% on GDMT ≥3 months, CRT if LBBB + EF ≤35% + QRS ≥150ms`},

{topic:"Right Ventricular Failure",chapter:"Cardiology",page:"p.21",content:`ETIOLOGIES
- Pressure overload: PE, pulmonary HTN, ARDS, pulmonic stenosis
- Volume overload: Tricuspid/pulmonic regurgitation, ASD, VSD
- RV ischemia/infarction: RCA occlusion (inferior STEMI)
- Cardiomyopathy: ARVC, sarcoidosis, amyloidosis
- Post-cardiotomy: After cardiac surgery

CLINICAL FEATURES
- Elevated JVP, peripheral edema, hepatomegaly, ascites
- Hypotension with clear lungs (unlike LV failure)
- RV heave, loud P2, TR murmur

DIAGNOSIS
- Echo: RV dilation, reduced TAPSE (<17mm), elevated RVSP, D-shaped septum
- Right heart cath: Elevated RA pressure, low cardiac output
- Labs: Elevated BNP, troponin if RV ischemia, liver congestion markers

MANAGEMENT PRINCIPLES
- Optimize preload: Gentle volume if underfilled, diuresis if congested
- Reduce afterload: Treat underlying cause (PE → anticoagulation/thrombectomy, pulm HTN → vasodilators)
- Support contractility: Dobutamine or milrinone preferred (avoid vasoconstrictors that increase PVR)
- Maintain AV synchrony: RV depends on atrial kick more than LV
- Avoid intubation if possible: Positive pressure ventilation increases RV afterload

CRITICAL PEARLS
- In RV infarct: AVOID nitrates, diuretics, and anything that reduces preload
- Vasopressin preferred over norepinephrine in RV failure (less pulmonary vasoconstriction)
- RV is a volume-sensitive, pressure-intolerant chamber`},

{topic:"Mechanical Circulatory Support",chapter:"Cardiology",page:"p.22",content:`INTRA-AORTIC BALLOON PUMP (IABP)
- Mechanism: Inflates in diastole (augments coronary perfusion), deflates in systole (reduces afterload)
- Provides ~0.5 L/min additional cardiac output
- Indications: Cardiogenic shock (bridge), refractory angina, acute MR, pre-operative support
- Contraindications: Aortic regurgitation, aortic dissection, severe PVD
- Timing: Triggered by ECG — inflate at dicrotic notch, deflate before systole

IMPELLA
- Microaxial pump placed across aortic valve, pulls blood from LV into aorta
- Impella CP: ~3-4 L/min | Impella 5.0/5.5: ~5 L/min
- Indications: Cardiogenic shock, high-risk PCI, acute MI with shock
- Monitoring: Purge solution, placement signal, hemolysis labs
- Complications: Hemolysis, limb ischemia, device migration, aortic regurgitation

ECMO (VA-ECMO)
- Provides full cardiopulmonary support: Blood drained from RA, oxygenated externally, returned to arterial system
- Delivers 3-6 L/min of oxygenated blood flow
- Indications: Refractory cardiogenic shock, massive PE, cardiac arrest, bridge to transplant/LVAD
- Key issues: LV distension (may need venting), limb ischemia, bleeding, infection, hemolysis

LVAD (Left Ventricular Assist Device)
- Durable mechanical pump for long-term support
- Bridge to transplant or destination therapy
- Continuous-flow devices: Patients may not have palpable pulse
- Key complications: GI bleeding, pump thrombosis, driveline infection, RV failure, stroke`},

{topic:"Pulmonary Artery Catheterization",chapter:"Cardiology",page:"p.23",content:`INDICATIONS
- Differentiate cardiogenic vs distributive shock
- Guide management of complex hemodynamics
- Evaluate pulmonary hypertension
- Assess intracardiac shunts

NORMAL HEMODYNAMICS
- RA: 0-5 mmHg
- RV: 15-30/0-5 mmHg
- PA: 15-30/5-12 mmHg (mean 10-20)
- PCWP: 5-12 mmHg
- Cardiac output: 4-8 L/min
- Cardiac index: 2.5-4.0 L/min/m²
- SVR: 800-1200 dynes·s/cm⁵

HEMODYNAMIC PROFILES
Cardiogenic shock: High PCWP, low CO, high SVR
Distributive shock (sepsis): Low PCWP, high CO, low SVR
Hypovolemic shock: Low PCWP, low CO, high SVR
RV failure/PE: High RA, high PA, low PCWP (or normal), low CO
Tamponade: Equalization of diastolic pressures (RA ≈ RV diastolic ≈ PA diastolic ≈ PCWP)

COMPLICATIONS
- Arrhythmias (most common): Usually transient, RBBB
- PA rupture (rare but fatal): Risk with repeated wedging, pulm HTN
- Pulmonary infarction: From prolonged wedge or distal migration
- Infection, thrombosis, knotting of catheter`},

{topic:"Cardiac Devices: PPM, ICD, & CRT",chapter:"Cardiology",page:"p.24",content:`PACEMAKERS (PPM)
Indications:
- Symptomatic bradycardia (sick sinus syndrome, high-grade AV block)
- Mobitz II or complete heart block (even if asymptomatic)
- Post-ablation complete heart block

Modes (NBG code):
- VVI: Paces ventricle, senses ventricle, inhibited if native beat
- DDD: Paces and senses both atrium and ventricle
- AAI: Atrial pacing only (rare, for isolated sinus node disease)

ICD (Implantable Cardioverter-Defibrillator)
Primary prevention: EF ≤35% on optimal GDMT for ≥3 months (≥40 days post-MI)
Secondary prevention: Survivors of VF/VT arrest, sustained VT with structural heart disease
Function: Detects and terminates VT/VF via antitachycardia pacing or shock

CRT (Cardiac Resynchronization Therapy)
Indication: EF ≤35%, LBBB with QRS ≥150ms, NYHA II-IV on optimal GDMT
CRT-D: Combines resynchronization with defibrillator
Benefit: Reduces mortality, HF hospitalization, improves EF and symptoms

PERIOPERATIVE MANAGEMENT
- Interrogate device pre-procedure
- If using electrocautery: May need to disable tachycardia therapies (magnet over ICD)
- Pacemaker-dependent patients: Program to asynchronous mode (VOO/DOO)
- Have external defibrillator available when ICD is disabled
- Re-interrogate post-procedure`},

{topic:"Valvular Heart Disease",chapter:"Cardiology",page:"p.25",content:`AORTIC STENOSIS
- Causes: Degenerative/calcific (most common >65), bicuspid valve (most common <65), rheumatic
- Symptoms: Angina, syncope, heart failure (onset of symptoms = poor prognosis)
- Exam: Crescendo-decrescendo systolic murmur, diminished A2, parvus et tardus
- Severe: Valve area <1.0 cm², mean gradient >40 mmHg, peak velocity >4 m/s
- Treatment: TAVR or SAVR when symptomatic severe AS (or EF <50%)

AORTIC REGURGITATION
- Acute: Endocarditis, dissection, trauma → emergent surgery
- Chronic: Bicuspid, rheumatic, Marfan, HTN → surgery when symptomatic or EF <55% or LV dilation

MITRAL STENOSIS
- Causes: Rheumatic (almost always)
- Symptoms: Dyspnea, hemoptysis, AFib, embolic events
- Exam: Opening snap, low-pitched diastolic rumble at apex
- Treatment: Anticoagulation for AFib, percutaneous balloon valvotomy or MVR

MITRAL REGURGITATION
- Primary (degenerative): Myxomatous degeneration, endocarditis, chordal rupture
- Secondary (functional): LV dilation, ischemic papillary muscle dysfunction
- Acute severe: Hemodynamic collapse → afterload reduction, IABP, emergent surgery
- Chronic: Surgery when symptomatic, EF <60%, or LVESD ≥40mm

TRICUSPID REGURGITATION
- Most common: Functional (RV/annular dilation from LV failure or pulm HTN)
- Exam: Holosystolic murmur at LLSB, increases with inspiration (Carvallo sign)

PROSTHETIC VALVES
- Mechanical: Requires lifelong warfarin (target INR 2.5-3.5 for mitral, 2.0-3.0 for aortic)
- Bioprosthetic: Limited durability (10-20 years), anticoagulation not always required`},

{topic:"Pericardial Disease",chapter:"Cardiology",page:"p.26",content:`ACUTE PERICARDITIS
Diagnosis (2 of 4): Chest pain (sharp, pleuritic, better leaning forward), pericardial friction rub, diffuse ST elevation with PR depression on ECG, new/worsening pericardial effusion
Treatment: NSAIDs (ibuprofen 600mg TID) + colchicine 0.5mg BID (reduces recurrence) × 3 months
Avoid steroids first-line (higher recurrence). Restrict activity until symptoms resolve and CRP normalizes.
High-risk features: Fever >38°C, large effusion, tamponade, immunosuppression, trauma, anticoagulant use, failure to respond to NSAIDs in 1 week

PERICARDIAL EFFUSION
- Small <10mm, moderate 10-20mm, large >20mm
- Etiology: Idiopathic/viral (most common), malignancy, uremia, autoimmune, post-MI, hypothyroidism, bacterial/TB
- Workup: Echo, pericardial fluid analysis (cell count, protein, LDH, glucose, cytology, cultures, ADA if TB suspected)

CARDIAC TAMPONADE
- Physiology: Pericardial fluid compresses cardiac chambers → impaired filling → decreased CO
- Beck's triad: Hypotension, elevated JVP, muffled heart sounds
- Pulsus paradoxus: >10mmHg drop in SBP with inspiration
- Echo: RA/RV diastolic collapse, IVC plethora, respiratory variation in mitral/tricuspid inflow
- Treatment: Emergent pericardiocentesis (do NOT give diuretics or reduce preload)

CONSTRICTIVE PERICARDITIS
- Thickened, fibrotic pericardium impairs diastolic filling
- Causes: Post-radiation, post-surgical, TB, idiopathic
- Differentiate from restrictive cardiomyopathy: Respiratory variation on echo, CT/MRI showing pericardial thickening
- Treatment: Pericardiectomy if symptomatic`},

{topic:"Aortic Disease",chapter:"Cardiology",page:"p.27",content:`AORTIC DISSECTION
Classification:
- Stanford A: Involves ascending aorta → surgical emergency
- Stanford B: Descending aorta only → medical management unless complicated

Presentation: Sudden tearing/ripping chest or back pain, maximum intensity at onset
Exam: BP differential between arms (>20mmHg), new aortic regurgitation murmur, pulse deficits, wide mediastinum on CXR

Diagnosis: CTA chest/abdomen/pelvis (preferred) or TEE if unstable

MANAGEMENT
Type A: Emergent surgical repair
Type B (uncomplicated): IV beta-blocker first (target HR <60, SBP <120)
  - Esmolol drip or labetalol preferred
  - Add nitroprusside if additional BP lowering needed AFTER beta-blockade
  - Pain control (morphine)
Type B (complicated — malperfusion, rupture, refractory pain): Endovascular repair (TEVAR)

AORTIC ANEURYSM
- Abdominal: Screen with US in men 65-75 who have ever smoked
- Thoracic: Often incidental on imaging
- Repair thresholds: AAA ≥5.5cm (men), ≥5.0cm (women), or rapid growth >0.5cm/6 months
  TAA ≥5.5cm (6.0cm for ascending), lower threshold in Marfan/bicuspid
- Medical management: BP control, statin, smoking cessation, surveillance imaging`},

{topic:"Syncope",chapter:"Cardiology",page:"p.28",content:`DEFINITION: Transient loss of consciousness with rapid spontaneous recovery due to global cerebral hypoperfusion

CLASSIFICATION
Reflex (most common): Vasovagal, situational (cough, micturition), carotid sinus hypersensitivity
Orthostatic: Dehydration, hemorrhage, autonomic dysfunction, medications
Cardiac: Arrhythmia (VT, bradycardia, SVT, long QT), structural (AS, HCM, PE, tamponade)

HIGH-RISK FEATURES (admit and workup)
- Exertional syncope, syncope while supine
- Family history of sudden cardiac death
- Structural heart disease or known low EF
- Abnormal ECG: Long QT, Brugada, WPW, new BBB, ischemic changes
- Palpitations preceding syncope
- Significant injury from event

WORKUP
All patients: Detailed history, orthostatic vitals, ECG, basic labs (CBC, BMP, glucose)
If cardiac suspected: Echocardiogram, telemetry, Holter/event monitor, stress test if exertional
If PE suspected: CTA chest
If seizure suspected: EEG, MRI brain

MANAGEMENT
- Vasovagal: Reassurance, hydration, avoid triggers, counter-pressure maneuvers
- Orthostatic: Volume repletion, review medications, compression stockings, midodrine/fludrocortisone
- Cardiac arrhythmia: Device therapy (pacemaker, ICD) or ablation
- Structural: Treat underlying cause (e.g., AVR for severe AS)`},

{topic:"Severe Asymptomatic HTN & Emergency",chapter:"Cardiology",page:"p.29",content:`DEFINITIONS
Hypertensive urgency: SBP >180 or DBP >120 WITHOUT end-organ damage
Hypertensive emergency: SBP >180 or DBP >120 WITH end-organ damage

END-ORGAN DAMAGE — defines emergency
- CNS: Encephalopathy, stroke, ICH, seizure, PRES
- Cardiac: ACS, acute HF/pulmonary edema, aortic dissection
- Renal: Acute kidney injury, hematuria
- Vascular: Microangiopathic hemolytic anemia, DIC
- Ophthalmologic: Papilledema, retinal hemorrhages
- Obstetric: Eclampsia, HELLP

HYPERTENSIVE URGENCY
- Oral medications, no need for ICU
- Restart or intensify home regimen
- Target: Gradual reduction over hours to days
- Common agents: Amlodipine, labetalol PO, clonidine, hydralazine PO
- Do NOT rapidly lower BP → risk of ischemic stroke

HYPERTENSIVE EMERGENCY
- IV medications, ICU monitoring with arterial line
- Target: Reduce MAP by ≤25% in first hour, then to 160/100 over next 2-6 hours
- Nicardipine drip: 5mg/hr, titrate by 2.5mg/hr q5-15min (preferred for most)
- Labetalol: 20mg IV bolus, then drip 0.5-2mg/min
- Clevidipine: 1-2mg/hr, titrate q2min (ultra-short acting)
- Nitroprusside: 0.3-5 mcg/kg/min (cyanide toxicity risk)
- Exception — Aortic dissection: Target HR <60 AND SBP <120 aggressively`},

{topic:"Peripheral Artery Disease",chapter:"Cardiology",page:"p.30",content:`DEFINITION: Atherosclerotic disease of non-coronary arteries, most commonly lower extremities

PRESENTATION
- Intermittent claudication: Reproducible exertional leg pain, relieved by rest
- Critical limb ischemia: Rest pain, non-healing wounds/ulcers, gangrene
- Acute limb ischemia (6 P's): Pain, pallor, pulselessness, poikilothermia, paresthesias, paralysis

DIAGNOSIS
- ABI (ankle-brachial index): <0.9 diagnostic, <0.4 severe
- Exercise ABI: Useful if resting ABI normal but symptoms suggestive
- Duplex ultrasound: First-line imaging
- CTA or MRA: For surgical planning

MANAGEMENT
Claudication:
- Supervised exercise program (most effective non-invasive treatment)
- Smoking cessation (most important modifiable risk factor)
- Risk factor modification: Statin, antiplatelet (aspirin or clopidogrel), BP control, DM control
- Cilostazol: May improve walking distance (avoid in HF)
- Revascularization for refractory symptoms

Critical limb ischemia: Revascularization (endovascular or surgical bypass)

Acute limb ischemia: Emergent vascular surgery or interventional radiology
- Anticoagulate with heparin immediately
- Viable: Urgent revascularization
- Irreversible: Amputation`},

{topic:"Cardio-Oncology",chapter:"Cardiology",page:"p.31",content:`CARDIOTOXIC CHEMOTHERAPIES
Anthracyclines (doxorubicin): Dose-dependent cardiomyopathy, cumulative lifetime dose limit
- Monitor EF before, during, after treatment
- Dexrazoxane may be cardioprotective

Trastuzumab (HER2 therapy): Usually reversible LV dysfunction
- Hold if EF drops >10% or below 50%

Immune checkpoint inhibitors: Myocarditis (rare but can be fulminant)
- Presents with troponin elevation, new HF symptoms, arrhythmias
- Treatment: High-dose steroids, may need additional immunosuppression

5-FU/Capecitabine: Coronary vasospasm → ischemia

VEGF inhibitors (bevacizumab, sunitinib): Hypertension, HF, arterial thromboembolism

RADIATION
- Accelerated CAD (may present decades later)
- Valvular disease (especially aortic and mitral)
- Constrictive pericarditis, restrictive cardiomyopathy

MONITORING
- Baseline and serial echocardiography
- Consider cardioprotective agents (ACEi, beta-blocker, dexrazoxane)
- GLS (global longitudinal strain) more sensitive than EF for early detection`},

{topic:"Outpatient CV Health",chapter:"Cardiology",page:"p.32",content:`STATIN THERAPY
High-intensity (LDL reduction ≥50%): Atorvastatin 40-80mg, rosuvastatin 20-40mg
Moderate-intensity (LDL reduction 30-49%): Atorvastatin 10-20mg, rosuvastatin 5-10mg, simvastatin 20-40mg

Indications for statin:
1. Clinical ASCVD → high intensity (target LDL <70, consider <55 if very high risk)
2. LDL ≥190 → high intensity
3. DM age 40-75 → at least moderate intensity
4. 10-year ASCVD risk ≥7.5% → moderate to high intensity (use pooled cohort equations)

BLOOD PRESSURE
- Target <130/80 for most adults (SPRINT trial)
- First-line: Thiazide, ACEi/ARB, CCB (choose based on comorbidities)
- ACEi/ARB if: DM, CKD, proteinuria, HFrEF, post-MI
- Avoid ACEi + ARB combination

ANTIPLATELET
- Primary prevention: Aspirin no longer routinely recommended (ASPREE, ARRIVE trials)
- Consider low-dose aspirin age 40-70 with high ASCVD risk and low bleeding risk
- Secondary prevention: Aspirin 81mg daily (lifelong after ACS/PCI/stroke)

LIFESTYLE
- Diet: Mediterranean or DASH diet
- Exercise: ≥150 min/week moderate or ≥75 min/week vigorous
- Smoking cessation: Combination NRT, bupropion, or varenicline
- Weight management: Target BMI <25, GLP-1 RAs for obesity with CV benefit`},

{topic:"Anti-Arrhythmic Medications",chapter:"Cardiology",page:"p.33",content:`VAUGHAN-WILLIAMS CLASSIFICATION

Class I — Sodium channel blockers:
- Ia (procainamide, quinidine): Prolong AP, treat VT/AF. Side effects: QT prolongation, lupus-like syndrome (procainamide)
- Ib (lidocaine, mexiletine): Shorten AP, treat VT. Preferred in ischemia-related VT. Less QT prolongation.
- Ic (flecainide, propafenone): Slow conduction, treat AF/SVT. Contraindicated in structural heart disease/CAD (CAST trial)

Class II — Beta-blockers:
- Metoprolol, atenolol, propranolol
- Rate control for AF, SVT suppression, post-MI antiarrhythmic

Class III — Potassium channel blockers:
- Amiodarone: Most versatile, treat VT/VF/AF. Toxicities: Thyroid (hyper/hypo), pulmonary fibrosis, hepatotoxicity, corneal deposits, photosensitivity, peripheral neuropathy. Monitor TFTs, LFTs, PFTs, eye exams.
- Sotalol: Also beta-blocker. QT prolongation risk. Initiate in-hospital with telemetry. Renally cleared.
- Dofetilide: AF/flutter. Requires in-hospital initiation (3 days), CrCl-based dosing, QT monitoring.
- Ibutilide: IV only, acute cardioversion of AF/flutter. QT prolongation, torsades risk.

Class IV — Calcium channel blockers:
- Diltiazem, verapamil: Rate control for AF, terminate SVT. Avoid in HFrEF and WPW.

Other:
- Adenosine: Terminate SVT (AVNRT/AVRT), diagnostic tool. Ultra-short acting (half-life 6 sec).
- Digoxin: Rate control in AF (especially with HFrEF). Narrow therapeutic window, toxicity with hypokalemia.`},

{topic:"Telemetry & Physical Exam",chapter:"Cardiology",page:"p.34",content:`TELEMETRY MONITORING
Indications: ACS, arrhythmias, post-procedural, HF exacerbation, syncope workup, drug initiation (QT-prolonging meds)

Common findings:
- Sinus tachycardia: Most common, always look for underlying cause
- Sinus bradycardia: May be normal (athletes), evaluate if symptomatic
- PACs/PVCs: Very common, usually benign. Concerning if frequent PVCs (>10% burden)
- Atrial fibrillation/flutter: Note rate, duration, response to medications
- Non-sustained VT: ≥3 beats at ≥100 bpm lasting <30 sec — evaluate for structural heart disease

CARDIAC PHYSICAL EXAM
Inspection: JVP (normal <8 cm H2O above RA), estimate by adding height of pulsation above sternal angle + 5cm
Palpation: PMI (normally at 5th ICS, MCL), heaves, thrills, lifts
Auscultation:
- Aortic area (2nd R ICS): AS murmur
- Pulmonic area (2nd L ICS): Pulmonic stenosis, flow murmurs
- Erb's point (3rd L ICS): AR murmur
- Tricuspid area (4th L ICS): TR, VSD
- Mitral area (5th L ICS, MCL): MR, MS

MURMUR CHARACTERIZATION
- Systolic: AS (crescendo-decrescendo), MR (holosystolic), MVP (mid-systolic click + late systolic murmur)
- Diastolic: AR (early diastolic decrescendo), MS (mid-diastolic rumble with opening snap)
- Maneuvers: Valsalva/standing increases HCM and MVP; squatting/leg raise increases most other murmurs`},

// ═══════════════════════════════════════
// PULMONARY & CRITICAL CARE
// ═══════════════════════════════════════

{topic:"Respiratory Distress",chapter:"Pulmonary",page:"p.46",content:`RECOGNITION
- Tachypnea (RR ≥20), cyanosis (SpO₂ <80%), increased work of breathing (accessory muscles, nasal flaring, diaphoresis, tripoding)
- Obstruction signs: Wheezing, stridor

IMMEDIATE ACTIONS
1. Confirm code status
2. Low threshold to call Rapid Response
3. Assess ABCs, establish IV access
4. Supplemental O₂: Start with non-rebreather, wean as tolerated
5. Red flags for intubation: GCS <8, pooling secretions, refractory hypoxemia (SpO₂ <80% on O₂), severe hypercapnia despite BiPAP, RR >35 with fatigue

DIFFERENTIAL
- Cardiac: MI, HF, arrhythmia, tamponade, PE, pulmonary HTN
- Airway: Asthma, COPD, mucus plugging, angioedema, anaphylaxis, foreign body
- Alveolar: Pulmonary edema, pneumonia, hemorrhage
- Pleural: Large effusion, pneumothorax
- CNS: Stroke, intoxication (CO, ASA, BZD), metabolic acidosis
- Neuromuscular: GBS, myasthenia gravis`},

{topic:"Hypoxemia & Hypercapnia",chapter:"Pulmonary",page:"p.47",content:`RESPIRATORY FAILURE TYPES
- Type 1 (Hypoxemic): PaO₂ <60 mmHg — failure to oxygenate
- Type 2 (Hypercapnic): PaCO₂ >45 mmHg — failure to ventilate
- P:F ratio = PaO₂/FiO₂ — quick surrogate for oxygenation (ARDS if <300)

CAUSES OF HYPOXEMIA
1. Low FiO₂ / hypoventilation: Decreased O₂ delivery (responds to supplemental O₂)
2. V/Q mismatch: Most common mechanism. Focal infiltrates (PNA, edema), airway disease (COPD, asthma), vascular (PE). Responds to O₂.
3. Shunt: Blood bypasses ventilated lung. Diffuse alveolar disease (ARDS), atelectasis, intracardiac shunt (PFO/ASD). Does NOT respond well to supplemental O₂ (refractory hypoxemia).
4. Diffusion impairment: ILD, pulmonary HTN. Worse with exertion.

CAUSES OF HYPERCAPNIA
- "Won't breathe" (decreased drive): Sedatives, obesity hypoventilation, brainstem pathology, central sleep apnea
- "Can't breathe" (increased dead space or decreased ventilation): Neuromuscular disease (GBS, MG), chest wall (kyphoscoliosis), severe COPD/asthma, ARDS

ACID-BASE IN RESPIRATORY FAILURE
- Acute respiratory acidosis: HCO₃ rises 1 per 10 rise in pCO₂
- Chronic respiratory acidosis: HCO₃ rises 3-4 per 10 rise in pCO₂`},

{topic:"Non-Invasive Oxygenation/Ventilation",chapter:"Pulmonary",page:"p.48",content:`OXYGEN DELIVERY DEVICES
- Nasal cannula: 1-6 LPM → FiO₂ 24-40%. Add ~4% per L/min. Humidify if >4 LPM.
- Simple face mask: 6-10 LPM → FiO₂ 30-60%. Flow <6 LPM risks CO₂ rebreathing.
- Non-rebreather: 10-15 LPM → FiO₂ 60-100%. First-line for acute hypoxemia.
- Venturi mask: Precise FiO₂ (24-50%). Ideal for COPD where precise O₂ control matters.
- High-flow nasal cannula (HFNC): Up to 60 LPM, FiO₂ 21-100%. Provides ~1 cmH₂O PEEP per 10 LPM. Heated and humidified. May avoid intubation (FLORALI trial).

O₂ TARGETS
- Most acutely ill: SpO₂ 90-94%
- At risk for hypercapnia (COPD, OHS): SpO₂ 88-92%
- CO poisoning, sickle cell crisis: Target ~100%

NON-INVASIVE POSITIVE PRESSURE VENTILATION (NIPPV)
CPAP: Constant positive pressure. Primary use: Obstructive sleep apnea, cardiogenic pulmonary edema.
BiPAP: Two pressure levels (IPAP + EPAP). Augments tidal volume. Start IPAP 10-12, EPAP 5.
- Indications: COPD exacerbation (reduces intubation/mortality), cardiogenic pulmonary edema, obesity hypoventilation, immunocompromised with respiratory failure
- Contraindications: Cardiac/respiratory arrest, unable to protect airway, facial trauma, undrained pneumothorax, active vomiting, uncooperative patient`},

{topic:"Interpretation of Chest Imaging",chapter:"Pulmonary",page:"p.49",content:`CHEST X-RAY — SYSTEMATIC APPROACH (ABCDEF)
A — Airway: Tracheal deviation? Narrowing? ETT position (3-5 cm above carina).
B — Bones/soft tissue: Fractures, subcutaneous air
C — Cardiac: CT ratio >50% on PA film = cardiomegaly. Widened mediastinum >8cm (think dissection).
D — Diaphragm: Flattening (hyperinflation/COPD). Left usually lower than right.
E — Effusions: Blunting of costophrenic angles. Need >250mL on upright film.
F — Fields & foreign bodies: Focal vs diffuse. Lines, tubes in correct position.

COMMON PATTERNS
- Lobar consolidation: Pneumonia (air bronchograms), atelectasis
- Bilateral fluffy infiltrates: Pulmonary edema, ARDS, DAH
- Reticular/ground glass: ILD, PJP, viral pneumonia
- Cavitary lesion: TB, lung abscess, squamous cell cancer, Wegener's, fungal
- Pleural effusion: Blunting of CP angle, meniscus sign
- Pneumothorax: Absence of lung markings peripherally, visceral pleural line

CT CHEST
- CTPA (PE protocol): IV contrast timed to opacify pulmonary arteries
- HRCT (thin-section): ILD evaluation, bronchiectasis
- CT with contrast: Mediastinal masses, lymphadenopathy, empyema
- CT without contrast: Lung nodule follow-up, screening`},

{topic:"PFTs & Asthma",chapter:"Pulmonary",page:"p.50",content:`PULMONARY FUNCTION TESTS
- Obstructive: FEV1/FVC < LLN (or <0.7). Seen in asthma, COPD, bronchiectasis.
- Restrictive: TLC < LLN. Seen in ILD, chest wall disease, neuromuscular disease.
- Bronchodilator response: ≥12% AND ≥200mL improvement in FEV1 → reversible obstruction (suggests asthma)
- DLCO reduced: ILD, emphysema, pulmonary HTN, anemia
- DLCO elevated: Alveolar hemorrhage, polycythemia, L-R shunt

ASTHMA — DIAGNOSIS
- Variable respiratory symptoms + reversible airflow obstruction
- Spirometry: Obstructive pattern with bronchodilator reversibility
- If spirometry normal: Methacholine challenge (positive if FEV1 drops ≥20%)

ASTHMA — STEPWISE MANAGEMENT (GINA 2022)
Step 1-2 (Mild): PRN low-dose ICS-formoterol (preferred) or PRN SABA + low-dose ICS
Step 3 (Moderate): Low-dose ICS-LABA maintenance + PRN
Step 4: Medium/high-dose ICS-LABA
Step 5 (Severe): Add-on LAMA, anti-IgE, anti-IL5/IL4, oral steroids last resort

ACUTE EXACERBATION
- Nebulized albuterol + ipratropium, systemic steroids (prednisone 40-60mg × 5 days)
- Magnesium 2g IV for severe exacerbation
- Intubation if: Respiratory failure, altered mental status, silent chest`},

{topic:"COPD",chapter:"Pulmonary",page:"p.51",content:`DEFINITION: Persistent airflow limitation (FEV1/FVC <0.7 post-bronchodilator) with chronic respiratory symptoms

DIAGNOSIS & STAGING
- GOLD Grade (by FEV1 % predicted): 1 (≥80%), 2 (50-79%), 3 (30-49%), 4 (<30%)
- GOLD Group (by symptoms + exacerbations): A (few sx, low exac), B (more sx, low exac), E (any sx, ≥2 exac/yr or ≥1 hospitalization)

STABLE COPD MANAGEMENT
- Group A: Bronchodilator (LABA or LAMA)
- Group B: LABA + LAMA
- Group E: LABA + LAMA (add ICS if eosinophils >300)
- All: Smoking cessation (single most effective intervention), pulmonary rehab, vaccinations (flu, pneumococcal, COVID, Tdap, Zoster, RSV)

ACUTE EXACERBATION (AECOPD)
Definition: Acute worsening of dyspnea, cough, and/or sputum beyond normal variation
Treatment:
- Bronchodilators: Nebulized albuterol + ipratropium
- Systemic steroids: Prednisone 40mg × 5 days (non-inferior to 14 days per REDUCE trial)
- Antibiotics: If ≥2 of: increased dyspnea, increased sputum volume, increased sputum purulence. Agents: Azithromycin, doxycycline, or amoxicillin-clavulanate × 5-7 days
- Oxygen: Target SpO₂ 88-92% (avoid hyperoxia → suppress respiratory drive)
- NIPPV (BiPAP): Reduces intubation and mortality in moderate-severe AECOPD with respiratory acidosis`},

{topic:"Bronchiectasis & Hemoptysis",chapter:"Pulmonary",page:"p.52",content:`BRONCHIECTASIS
Definition: Permanent airway dilation from chronic infection/inflammation
Symptoms: Chronic productive cough, recurrent infections, hemoptysis, dyspnea
Etiology: Post-infectious (50%), CF, immunodeficiency (CVID, IgG), ABPA, primary ciliary dyskinesia, autoimmune (RA, Sjogren's)
Diagnosis: CT showing bronchial diameter > adjacent artery (signet ring sign), lack of tapering (tram tracks)
Management: Airway clearance (nebs + chest PT), treat underlying cause, long-term azithromycin if ≥3 exacerbations/year

HEMOPTYSIS
Massive hemoptysis: >500mL in 24h or >100mL/hour — life-threatening
Common causes: Bronchitis (#1), bronchiectasis, lung cancer, TB, PE, pulmonary vasculitis
Workup: CXR, CT chest, bronchoscopy, CTA if massive
Management:
- ABCs, large-bore IV, type and cross
- Position bleeding side DOWN (protect good lung)
- If massive: Intubation (consider single-lumen ETT advanced into non-bleeding mainstem), bronchoscopy, IR for bronchial artery embolization
- Correct coagulopathy, hold anticoagulants`},

{topic:"Interstitial Lung Disease",chapter:"Pulmonary",page:"p.53",content:`OVERVIEW: Heterogeneous group replacing normal lung with inflammation/fibrosis
Presentation: Progressive dyspnea, dry cough, hypoxemia (worse with exercise), "velcro" crackles
History: Exposures (chemicals, mold, birds, dust), medications, CTD symptoms, smoking history

KEY TYPES
IPF (Idiopathic Pulmonary Fibrosis): UIP pattern on CT (basal, peripheral, honeycombing). Worst prognosis. Treatment: Pirfenidone or nintedanib (antifibrotics). NOT responsive to steroids.
NSIP: Ground glass + reticular, subpleural sparing. Often associated with CTD. Responds to steroids.
COP (Cryptogenic Organizing Pneumonia): Peripheral consolidations. Responds well to steroids.
Hypersensitivity Pneumonitis: Exposure-related. Acute (febrile), chronic (fibrotic). Remove exposure + steroids.
Sarcoidosis: Non-caseating granulomas. Bilateral hilar lymphadenopathy. Multisystem. Steroids if symptomatic.

WORKUP
- HRCT chest (gold standard for pattern recognition)
- PFTs: Restrictive pattern, reduced DLCO
- Labs: ANA, RF, CCP, myositis panel, hypersensitivity panel
- Bronchoscopy with BAL and/or surgical lung biopsy if diagnosis unclear
- 6-minute walk test for functional assessment`},

{topic:"VTE Diagnostics",chapter:"Pulmonary",page:"p.54",content:`DVT DIAGNOSIS
- Clinical: Unilateral leg swelling, pain, warmth, erythema
- Wells score for DVT: Estimates pretest probability
- D-dimer: High sensitivity, low specificity. Use age-adjusted cutoff (age × 10 if >50). Negative D-dimer in low-probability patient rules out DVT.
- Compression ultrasound: Test of choice. Non-compressible vein = DVT.

PE DIAGNOSIS
- Symptoms: Dyspnea (#1), pleuritic chest pain, tachycardia, hemoptysis, syncope
- ECG: Sinus tachycardia (most common), S1Q3T3, right heart strain, new RBBB
- Wells score for PE: Guides testing strategy
- PERC rule: If all 8 criteria negative AND low clinical suspicion → no further testing needed
- D-dimer: Use if low-intermediate probability
- CTPA: Gold standard imaging for PE
- V/Q scan: Alternative if CT contraindicated (contrast allergy, renal insufficiency)

RISK STRATIFICATION FOR PE
Low risk: Hemodynamically stable, normal RV, normal biomarkers → anticoagulation alone
Submassive: Stable but RV dysfunction (echo or CT) or elevated troponin/BNP → consider advanced therapies
Massive: Hemodynamically unstable (SBP <90) → systemic thrombolytics (tPA), catheter-directed therapy, or surgical embolectomy`},

{topic:"VTE Management",chapter:"Pulmonary",page:"p.55",content:`ANTICOAGULATION
Acute: Start immediately when VTE diagnosed (or if high suspicion, even before confirmed)
- DOAC preferred: Apixaban 10mg BID × 7d then 5mg BID, or rivaroxaban 15mg BID × 21d then 20mg daily
- Alternative: Enoxaparin bridge to warfarin (INR 2-3)
- UFH: Use if renal failure, high bleeding risk, or may need procedures

DURATION
- Provoked (surgery, immobilization, OCPs): 3 months
- Unprovoked first episode: ≥3 months, then reassess (consider indefinite if low bleeding risk)
- Recurrent unprovoked: Indefinite anticoagulation
- Cancer-associated: DOAC preferred (except GI/GU malignancies → consider LMWH); continue until cancer resolved

SPECIAL SITUATIONS
- Massive PE: Systemic tPA (alteplase 100mg over 2h), catheter-directed therapy, or surgical embolectomy
- Submassive PE: Close monitoring, consider catheter-directed therapy if clinical worsening
- IVC filter: Only if absolute contraindication to anticoagulation; retrievable preferred
- HIT: Switch to non-heparin anticoagulant (argatroban, bivalirudin)
- Pregnancy: LMWH (DOACs and warfarin contraindicated in pregnancy)`},

{topic:"Pulmonary Hypertension",chapter:"Pulmonary",page:"p.56",content:`DEFINITION: Mean PA pressure >20 mmHg on right heart catheterization

WHO CLASSIFICATION
Group 1 — PAH: Idiopathic, heritable, drugs/toxins, CTD, HIV, portal HTN, congenital heart disease
Group 2 — Left heart disease: HFrEF, HFpEF, valvular disease (most common cause overall)
Group 3 — Lung disease/hypoxia: COPD, ILD, sleep apnea
Group 4 — Chronic thromboembolic (CTEPH): Organized clot in pulmonary arteries
Group 5 — Multifactorial: Sarcoidosis, sickle cell, metabolic disorders

WORKUP
- Echo: Estimated RVSP, RV size/function
- Right heart catheterization: Confirms diagnosis, differentiates pre- vs post-capillary
  - Pre-capillary (Group 1,3,4): PCWP ≤15, PVR >3 Wood units
  - Post-capillary (Group 2): PCWP >15
- Additional: PFTs, V/Q scan (screen for CTEPH), sleep study, CTD labs, HIV, LFTs

TREATMENT
- Group 2: Treat underlying heart disease. PAH-specific therapy NOT indicated.
- Group 3: Treat underlying lung disease, supplemental O₂
- Group 4 (CTEPH): Pulmonary thromboendarterectomy (potentially curative), riociguat if inoperable
- Group 1 (PAH): Referral to PH center. Therapies: PDE5 inhibitors (sildenafil, tadalafil), ERA (ambrisentan, bosentan), prostacyclins (epoprostenol, treprostinil), riociguat`},

{topic:"Mechanical Ventilation",chapter:"Pulmonary",page:"p.57",content:`INDICATIONS: Respiratory failure (hypoxemic or hypercapnic), airway protection (GCS ≤8), anticipated clinical decline

INITIAL SETTINGS
- Mode: Volume control (AC/VC) most common
- Tidal volume: 6-8 mL/kg ideal body weight (6 mL/kg in ARDS)
- Rate: 14-18 breaths/min
- FiO₂: Start 100%, wean to SpO₂ 92-96%
- PEEP: Start 5 cmH₂O, increase as needed

KEY PARAMETERS TO MONITOR
- Plateau pressure: <30 cmH₂O (risk of barotrauma if higher)
- Driving pressure: Plateau - PEEP, target <15 cmH₂O
- Auto-PEEP: Check for air trapping (especially COPD/asthma)
- SpO₂, ABG, minute ventilation

MODES
- AC (Assist Control): Machine delivers set volume/pressure with every breath. Most common initial mode.
- SIMV: Machine delivers set breaths, patient can breathe spontaneously between. Less commonly used.
- Pressure Support (PS): Patient-triggered, pressure-assisted breaths. Used for weaning/SBT.

WEANING & EXTUBATION
- Daily spontaneous breathing trials (SBT) when: FiO₂ ≤40%, PEEP ≤8, minimal vasopressors, able to protect airway, adequate cough
- SBT: PS 5-8/PEEP 5 or T-piece for 30-120 min
- Rapid shallow breathing index (RSBI): f/VT <105 predicts successful extubation
- Consider cuff leak test before extubation if high risk for post-extubation stridor`},

{topic:"ARDS",chapter:"Pulmonary",page:"p.58",content:`BERLIN DEFINITION
1. Timing: Within 1 week of known insult or new/worsening symptoms
2. Imaging: Bilateral opacities not fully explained by effusions, atelectasis, or nodules
3. Origin: Not fully explained by cardiac failure or fluid overload
4. Severity by P:F ratio (on PEEP ≥5):
  - Mild: 200-300
  - Moderate: 100-200
  - Severe: <100

MANAGEMENT
Lung-protective ventilation (ARDSNet protocol):
- Low tidal volume: 6 mL/kg IBW (reduce to 4 if plateau >30)
- Plateau pressure: <30 cmH₂O
- PEEP: Titrate per FiO₂/PEEP table (ARDSNet low or high PEEP table)
- Permissive hypercapnia: Accept pH ≥7.20

Prone positioning: ≥16 hrs/day if P:F <150 (PROSEVA trial — 50% mortality reduction)
Neuromuscular blockade: Consider in first 48h of severe ARDS (ACURASYS showed benefit, ROSE did not — use judiciously)
Fluid management: Conservative strategy (FACTT trial — more vent-free days)
Steroids: Dexamethasone in moderate-severe ARDS may reduce mortality and vent days (DEXA-ARDS trial)

DO NOT: Overventilate, use high tidal volumes, allow plateau >30, give excessive fluids`},

{topic:"ECMO",chapter:"Pulmonary",page:"p.59",content:`TYPES
VV-ECMO (Veno-Venous): Provides oxygenation only. Blood drained from vein, oxygenated, returned to vein.
- Indication: Severe refractory hypoxemic respiratory failure (ARDS)
- Heart must be functioning adequately

VA-ECMO (Veno-Arterial): Provides both oxygenation AND circulatory support. Blood drained from vein, returned to artery.
- Indication: Cardiogenic shock, cardiac arrest, massive PE, post-cardiotomy

MANAGEMENT CONSIDERATIONS
- Anticoagulation: Systemic heparin (target ACT or anti-Xa levels)
- Monitor: Hemolysis (LDH, plasma-free Hgb, haptoglobin), fibrinogen, platelets
- VA-ECMO specific: Monitor for LV distension, Harlequin syndrome, limb ischemia
- VV-ECMO specific: Recirculation monitoring

COMPLICATIONS
- Bleeding (most common), thrombosis, hemolysis, infection
- Limb ischemia (VA — distal perfusion catheter may be needed)
- Air embolism, circuit failure
- LV distension in VA-ECMO (may need LV venting strategy)`},

{topic:"Sedation",chapter:"Pulmonary",page:"p.60",content:`GOALS: Patient comfort, ventilator synchrony, minimize duration and depth
Target light sedation: RASS 0 to -2 (RASS = Richmond Agitation-Sedation Scale)

AGENTS
Propofol: Rapid onset/offset. Preferred for short-term sedation and neuro exams. Risk: Hypotension, hypertriglyceridemia, propofol infusion syndrome (metabolic acidosis, rhabdomyolysis — check triglycerides and CK).
Dexmedetomidine: Alpha-2 agonist. No respiratory depression. Allows light sedation with patient arousable. Risk: Bradycardia, hypotension. Not for deep sedation.
Midazolam: Benzodiazepine. Associated with worse outcomes (more delirium, longer ICU stay). Use mainly for alcohol withdrawal, seizures, or refractory agitation.
Fentanyl: Primary analgesic in ICU. Short-acting, hemodynamically stable. Risk: Chest wall rigidity with rapid bolus.
Ketamine: Dissociative. Useful for procedures, bronchospasm (bronchodilator), hemodynamically stable. Risk: Emergence reactions, secretions.

BEST PRACTICES
- Analgesia first (pain-first approach): Treat pain before increasing sedation
- Daily sedation interruption (wake-up trial) + spontaneous breathing trial
- ABCDEF bundle: Assess pain, Both SAT + SBT, Choice of sedation, Delirium monitoring, Early mobility, Family engagement
- Delirium screening: CAM-ICU every shift. Treat underlying cause. Avoid benzos.`},

{topic:"Shock",chapter:"Pulmonary",page:"p.61",content:`DEFINITION: Inadequate tissue perfusion and oxygen delivery
Signs: Hypotension (MAP <65), tachycardia, altered mental status, oliguria, mottled skin, elevated lactate

FOUR TYPES
1. Distributive (most common): Vasodilation, low SVR
  - Septic, anaphylactic, neurogenic, adrenal crisis
  - Treatment: Volume resuscitation + vasopressors

2. Cardiogenic: Pump failure, low CO, high PCWP
  - MI, decompensated HF, arrhythmia, valvular, myocarditis
  - Treatment: Inotropes/vasopressors, mechanical support, revascularization

3. Hypovolemic: Volume depletion, low PCWP, low CO
  - Hemorrhage, dehydration, burns, third-spacing
  - Treatment: Volume resuscitation, blood products if hemorrhagic

4. Obstructive: Mechanical obstruction to flow
  - Massive PE, tension pneumothorax, tamponade
  - Treatment: Address obstruction (tPA for PE, needle decompression for pneumothorax, pericardiocentesis for tamponade)

INITIAL MANAGEMENT
1. IV access (2 large-bore IVs or central line)
2. Volume resuscitation: 30 mL/kg crystalloid (balanced preferred per SMART trial)
3. Vasopressors if refractory hypotension despite fluids
4. Identify and treat underlying cause
5. Lactate trending to guide resuscitation`},

{topic:"Sepsis",chapter:"Pulmonary",page:"p.62",content:`DEFINITIONS (Sepsis-3)
Sepsis: Life-threatening organ dysfunction caused by dysregulated host response to infection (SOFA score increase ≥2)
Septic shock: Sepsis + vasopressor requirement to maintain MAP ≥65 + lactate >2 mmol/L despite adequate resuscitation

HOUR-1 BUNDLE (Surviving Sepsis Campaign 2021)
1. Measure lactate (repeat if >2 mmol/L)
2. Obtain blood cultures BEFORE antibiotics
3. Administer broad-spectrum antibiotics (within 1 hour)
4. Begin 30 mL/kg crystalloid for hypotension or lactate ≥4
5. Start vasopressors if hypotensive during/after fluid resuscitation (target MAP ≥65)

VASOPRESSORS
- Norepinephrine: First-line (SOAP II trial — less arrhythmias than dopamine)
- Vasopressin: Second-line (0.03-0.04 U/min), added to norepinephrine
- Epinephrine: Third-line if additional support needed
- Phenylephrine: Avoid (pure alpha, may decrease CO)

ADDITIONAL MANAGEMENT
- Steroids: IV hydrocortisone 200mg/day if vasopressor-refractory shock
- Source control: Drain abscesses, remove infected devices, debride wounds
- Blood glucose: Target 144-180 mg/dL (NICE-SUGAR trial)
- Transfusion: Hgb <7 g/dL (TRISS trial, restrictive strategy)
- DVT prophylaxis, stress ulcer prophylaxis (PPI if high risk)`},

{topic:"Vasopressors",chapter:"Pulmonary",page:"p.63",content:`FIRST-LINE
Norepinephrine: Alpha-1 >> Beta-1. Increases SVR and MAP with modest increase in CO. First-line for septic shock and most shock states. Dose: 0.1-2 mcg/kg/min.

SECOND-LINE
Vasopressin: V1 receptor agonist. Non-catecholamine. Add to norepinephrine in septic shock (VASST trial). Fixed dose: 0.03-0.04 U/min. May cause mesenteric and digital ischemia.
Epinephrine: Alpha + Beta agonist. Increases SVR, HR, CO. Use for anaphylaxis and refractory shock. Low dose (0.01-0.05): Beta effects dominate. High dose (>0.1): Alpha effects dominate.

INOTROPES
Dobutamine: Beta-1 >> Beta-2. Increases CO with vasodilation. Use for cardiogenic shock with adequate MAP. May cause hypotension and tachycardia. Dose: 2-20 mcg/kg/min.
Milrinone: PDE3 inhibitor. Increases CO and decreases PVR/SVR. Preferred in RV failure and pulmonary HTN. Renally cleared. Dose: 0.125-0.75 mcg/kg/min.

OTHER
Phenylephrine: Pure alpha-1. Increases SVR without increasing HR. Use for SVT-related hypotension or neurogenic shock. May decrease CO.
Dopamine: Dose-dependent effects. Low: Dopaminergic. Medium: Beta. High: Alpha. More arrhythmias than norepinephrine (SOAP II). Rarely first-line.
Angiotensin II (Giapreza): AT1 receptor. For refractory vasodilatory shock. ATHOS-3 trial.

CENTRAL vs PERIPHERAL ACCESS
- Vasopressors ideally via central line, but low-dose norepinephrine via peripheral PIV is acceptable short-term (<24h) if central access not available`},

{topic:"Toxicology & Lung Transplant",chapter:"Pulmonary",page:"p.64",content:`COMMON TOXICOLOGIC EMERGENCIES
Acetaminophen: Most common OD. Check level at 4h, use Rumack-Matthew nomogram. Treatment: NAC (most effective within 8h).
Salicylate: Tinnitus, hyperventilation, mixed respiratory alkalosis + metabolic acidosis. Treatment: Alkalinize urine (bicarb drip), hemodialysis if severe.
Opioid: Respiratory depression, pinpoint pupils. Treatment: Naloxone 0.4-2mg IV, may repeat.
Benzodiazepine: Sedation, respiratory depression. Flumazenil (use cautiously — seizure risk in chronic users).
TCA: Anticholinergic symptoms, QRS widening, seizures. Treatment: Sodium bicarbonate for QRS >100ms.
Beta-blocker/CCB: Bradycardia, hypotension. Treatment: Glucagon (beta-blocker), calcium, high-dose insulin (CCB).
Organophosphate: Cholinergic crisis (SLUDGE — salivation, lacrimation, urination, defecation, GI distress, emesis). Treatment: Atropine + pralidoxime.

LUNG TRANSPLANT BASICS
Indications: End-stage lung disease (IPF, COPD, CF, PAH) refractory to medical therapy
Types: Single lung, bilateral, heart-lung
Key complications: Primary graft dysfunction, rejection (acute cellular, antibody-mediated, chronic/CLAD), infection (CMV, Aspergillus, PJP), malignancy
Immunosuppression: Tacrolimus + mycophenolate + prednisone (typical triple therapy)`},

// ═══════════════════════════════════════
// GASTROENTEROLOGY
// ═══════════════════════════════════════

{topic:"Upper GI Bleeding",chapter:"Gastroenterology",page:"p.68",content:`PRESENTATION: Hematemesis, melena, coffee-ground emesis, hematochezia (if brisk)
Common causes: PUD (#1), varices, Mallory-Weiss tear, erosive gastritis, Dieulafoy lesion, malignancy

MANAGEMENT
1. Stabilize: 2 large-bore IVs, type and cross, fluid resuscitation
2. Transfuse: Hgb <7 (restrictive strategy preferred, <8 in active bleeding/cardiac disease). Avoid over-transfusion in variceal bleed (increases portal pressure).
3. PPI: Pantoprazole 80mg IV bolus → 8mg/hr drip if suspected PUD
4. Octreotide: 50mcg bolus → 50mcg/hr drip if suspected variceal bleed + ceftriaxone 1g IV (antibiotic prophylaxis)
5. EGD: Within 24 hours for most. Urgent (<12h) if variceal bleeding suspected or hemodynamic instability despite resuscitation.
6. Endoscopic therapy: Epinephrine injection, clips, thermal coagulation, banding for varices

GI BLEED RISK SCORES
- Glasgow-Blatchford: Identifies who needs intervention (score 0 = safe for outpatient management)
- Rockall: Post-endoscopy risk stratification for rebleeding and mortality

VARICEAL BLEEDING: Octreotide + ceftriaxone + urgent EGD with banding. If refractory: TIPS or balloon tamponade (Blakemore tube) as bridge.`},

{topic:"Lower GI Bleeding",chapter:"Gastroenterology",page:"p.69",content:`PRESENTATION: Hematochezia (bright red blood per rectum), maroon stools
Common causes: Diverticular bleeding (#1), angiodysplasia, hemorrhoids, colorectal cancer, IBD, ischemic colitis, post-polypectomy

MANAGEMENT
1. Stabilize: IV access, fluid resuscitation, type and cross, transfuse if needed
2. Risk stratify: Most lower GI bleeds stop spontaneously (~80%)
3. Colonoscopy: After adequate bowel prep, usually within 24 hours
4. CT angiography: If hemodynamically unstable or massive bleeding to localize source
5. Angiographic embolization: If active bleeding identified on CTA and unable to colonoscope
6. Surgery: Last resort for refractory, life-threatening bleeding

KEY DISTINCTION: Brisk UGIB can present as hematochezia. If hemodynamically unstable with hematochezia, consider EGD first (or NG lavage, though sensitivity is limited).

ISCHEMIC COLITIS: Usually elderly, acute crampy abdominal pain + bloody diarrhea. CT: Colonic wall thickening in watershed areas (splenic flexure, rectosigmoid). Most cases = supportive care. Surgery if necrosis/perforation.`},

{topic:"Abdominal Pain",chapter:"Gastroenterology",page:"p.70",content:`APPROACH BY LOCATION
RUQ: Biliary colic, cholecystitis, cholangitis, hepatitis, Fitz-Hugh-Curtis, liver abscess
Epigastric: PUD, pancreatitis, GERD, MI (inferior), gastroparesis
LUQ: Splenic infarct/abscess, pancreatitis (tail), gastric ulcer
RLQ: Appendicitis, cecal pathology, ovarian torsion/cyst, ectopic pregnancy, Crohn's
LLQ: Diverticulitis, sigmoid volvulus, constipation, ovarian torsion/cyst
Diffuse: SBO, mesenteric ischemia, peritonitis, DKA, IBD, gastroenteritis, AAA rupture

MUST-NOT-MISS
- Mesenteric ischemia: Pain out of proportion to exam, lactate elevation, atrial fibrillation → CTA abdomen
- Ruptured AAA: Hypotension + pulsatile mass + back/abdominal pain → emergent vascular surgery
- Bowel perforation: Peritoneal signs, free air on imaging → surgical emergency
- Ectopic pregnancy: Reproductive-age female + abdominal pain → always check beta-hCG

WORKUP: CBC, CMP, lipase, lactate, UA, pregnancy test (females), upright CXR (free air), CT abdomen/pelvis with IV contrast`},

{topic:"GERD & Peptic Ulcer Disease",chapter:"Gastroenterology",page:"p.71",content:`GERD
Diagnosis: Typical symptoms (heartburn, regurgitation) ± EGD if alarm features or refractory
Alarm features: Dysphagia, weight loss, GI bleeding, iron deficiency anemia, odynophagia
Treatment: Lifestyle modifications (elevate HOB, avoid eating 3h before bed, avoid triggers) → PPI (most effective) × 8 weeks → step down to H2RA or PRN PPI
Long-term PPI risks: C. diff, osteoporosis, hypomagnesemia, B12 deficiency, interstitial nephritis

PEPTIC ULCER DISEASE
Etiology: H. pylori (#1 worldwide), NSAIDs (#1 developed countries), Zollinger-Ellison (gastrinoma), stress ulcers
H. pylori testing: Stool antigen (preferred) or urea breath test. Hold PPI 2 weeks and antibiotics 4 weeks before testing.
Treatment: Triple therapy (PPI + clarithromycin + amoxicillin × 14 days) or bismuth quadruple therapy
Confirm eradication: Repeat stool antigen ≥4 weeks after completing therapy
Gastric ulcers: Always biopsy to rule out malignancy (duodenal ulcers rarely malignant)
Stress ulcer prophylaxis: PPI for ICU patients with risk factors (mechanical ventilation >48h, coagulopathy, TBI, burns)`},

{topic:"Nausea & Vomiting",chapter:"Gastroenterology",page:"p.72",content:`DIFFERENTIAL
GI: Gastroparesis, SBO, PUD, pancreatitis, cholecystitis, hepatitis, appendicitis
CNS: Increased ICP, vestibular disease, migraine, meningitis
Metabolic: DKA, uremia, hypercalcemia, adrenal insufficiency, pregnancy
Medications: Opioids, chemotherapy, antibiotics, digoxin
Cardiac: Inferior MI
Other: Cyclic vomiting syndrome, cannabis hyperemesis (relieved by hot showers)

ANTIEMETICS BY MECHANISM
- Serotonin antagonist (5-HT3): Ondansetron 4mg IV/PO — first-line for most causes
- Dopamine antagonist: Metoclopramide (also prokinetic), prochlorperazine, haloperidol
- Antihistamine: Diphenhydramine, meclizine (best for vestibular causes)
- Anticholinergic: Scopolamine patch (motion sickness, vestibular)
- NK1 antagonist: Aprepitant (chemotherapy-induced)
- Glucocorticoid: Dexamethasone (chemotherapy-induced, as adjunct)

GASTROPARESIS: Delayed gastric emptying without mechanical obstruction. Most common: Diabetic, post-surgical, idiopathic. Diagnosis: Gastric emptying study. Treatment: Dietary modification (small, low-fat, low-fiber meals), metoclopramide (black box for tardive dyskinesia), erythromycin (motilin agonist, tachyphylaxis).`},

{topic:"Diarrhea",chapter:"Gastroenterology",page:"p.73",content:`CLASSIFICATION
Acute (<14 days): Usually infectious. Viral (norovirus, rotavirus), bacterial (Salmonella, Campylobacter, Shigella, E. coli, C. diff), parasitic (Giardia, Cryptosporidium).
Chronic (>4 weeks): IBD, IBS, celiac, microscopic colitis, lactose intolerance, bile acid malabsorption, chronic infections, medications, endocrine (hyperthyroidism, carcinoid).

WORKUP
Acute: Stool studies (culture, ova/parasites, C. diff) if severe, bloody, immunocompromised, or hospitalized. Most cases self-limited.
Chronic: CBC, CMP, CRP/ESR, celiac panel (tTG-IgA + total IgA), stool calprotectin, consider colonoscopy

OSMOTIC vs SECRETORY
- Osmotic: Stops with fasting. Stool osmolar gap >50. Causes: Lactose intolerance, sorbitol, Mg-containing antacids, celiac.
- Secretory: Persists with fasting. Stool osmolar gap <50. Causes: VIPoma, carcinoid, bile acid malabsorption, microscopic colitis.

C. DIFFICILE
Risk factors: Antibiotics (clindamycin, fluoroquinolones, cephalosporins), PPI, hospitalization, age >65
Diagnosis: Stool PCR or toxin EIA
Treatment: Fidaxomicin (preferred) or oral vancomycin × 10 days. Severe: Oral vancomycin + IV metronidazole. Fulminant: Add rectal vancomycin, surgical consult. Recurrent: Fidaxomicin, fecal microbiota transplant.`},

{topic:"Constipation, IBS, & Colonic Disorders",chapter:"Gastroenterology",page:"p.74",content:`CONSTIPATION
Red flags: New onset >50, weight loss, hematochezia, family history CRC → colonoscopy
Treatment ladder: Fiber + water → osmotic laxatives (PEG, lactulose) → stimulant laxatives (senna, bisacodyl) → secretagogues (linaclotide, lubiprostone) → prucalopride
Opioid-induced: Methylnaltrexone, naloxegol, naldemedine (peripherally acting mu-opioid antagonists)

IBS
Diagnosis: Rome IV criteria — recurrent abdominal pain ≥1 day/week × 3 months with ≥2 of: related to defecation, change in frequency, change in form
IBS-D (diarrhea): Loperamide, rifaximin, eluxadoline, alosetron (women, restricted)
IBS-C (constipation): Linaclotide, lubiprostone, plecanatide, PEG
All subtypes: Low-FODMAP diet, antispasmodics (dicyclomine), TCAs (pain/diarrhea), SSRIs (pain/constipation)

DIVERTICULAR DISEASE
Diverticulosis: Common, usually asymptomatic. Can cause painless bleeding.
Diverticulitis: LLQ pain, fever, leukocytosis. CT with contrast confirms.
- Uncomplicated: Antibiotics (cipro + metronidazole or augmentin) × 7-10 days. Mild cases may not need antibiotics.
- Complicated (abscess, perforation, fistula): IR drainage if abscess >3cm, surgery if perforation/peritonitis`},

{topic:"Esophageal & Upper GI Disorders",chapter:"Gastroenterology",page:"p.75",content:`DYSPHAGIA
Oropharyngeal: Difficulty initiating swallow. Causes: Stroke, Parkinson's, MG, Zenker's diverticulum.
Esophageal: Food sticking after swallowing.
- Solids only → mechanical obstruction (stricture, ring, cancer, eosinophilic esophagitis)
- Solids AND liquids → motility disorder (achalasia, scleroderma, diffuse esophageal spasm)
Workup: EGD first, then barium swallow, then manometry if EGD unrevealing

ESOPHAGEAL EMERGENCIES
- Food impaction: Emergent EGD (within 24h, sooner if complete obstruction or sharp object)
- Boerhaave syndrome (esophageal perforation): Forceful retching → severe chest/epigastric pain, subcutaneous emphysema. CT with water-soluble contrast. Surgical emergency.
- Mallory-Weiss tear: Mucosal tear at GE junction from forceful vomiting. Usually self-limited.

EOSINOPHILIC ESOPHAGITIS
- Young adults with dysphagia, food impaction, GERD-like symptoms unresponsive to PPI
- Diagnosis: EGD with biopsy showing ≥15 eos/HPF
- Treatment: PPI trial, swallowed topical steroids (fluticasone, budesonide), dietary elimination

ACHALASIA
- Failed relaxation of LES + absent peristalsis. Bird-beak on barium swallow.
- Manometry: Absent peristalsis, failed LES relaxation, elevated resting LES pressure
- Treatment: Pneumatic dilation, surgical myotomy (Heller), or peroral endoscopic myotomy (POEM)`},

{topic:"Inflammatory Bowel Disease",chapter:"Gastroenterology",page:"p.76",content:`CROHN'S DISEASE vs ULCERATIVE COLITIS
Crohn's: Mouth to anus (most common: terminal ileum), transmural, skip lesions, granulomas, fistulas/strictures/abscesses
UC: Rectum to proximal colon (continuous), mucosal/submucosal, bloody diarrhea, pseudopolyps

EXTRAINTESTINAL MANIFESTATIONS
- Joints: Peripheral arthritis (correlates with disease activity), axial spondyloarthritis (does not)
- Skin: Erythema nodosum (correlates), pyoderma gangrenosum (does not)
- Eyes: Uveitis, episcleritis
- Hepatobiliary: Primary sclerosing cholangitis (more with UC), cholelithiasis (Crohn's)

TREATMENT
Mild: 5-ASA (mesalamine) — more effective in UC than Crohn's
Moderate: Steroids for flare (budesonide for ileal Crohn's, prednisone for others), then steroid-sparing agents
Steroid-sparing: Thiopurines (azathioprine, 6-MP), methotrexate (Crohn's)
Moderate-severe: Biologics — anti-TNF (infliximab, adalimumab), anti-integrin (vedolizumab), anti-IL12/23 (ustekinumab), JAK inhibitor (tofacitinib — UC only)
Combination therapy: Anti-TNF + thiopurine superior to monotherapy (SONIC trial for Crohn's)

ACUTE SEVERE UC: IV steroids × 3 days. If no response → rescue therapy (infliximab or cyclosporine) or colectomy.
TOXIC MEGACOLON: Colon dilation >6cm + systemic toxicity. NPO, IV steroids, broad-spectrum antibiotics, surgical consult.`},

{topic:"Intestinal Disorders",chapter:"Gastroenterology",page:"p.77",content:`SMALL BOWEL OBSTRUCTION (SBO)
Causes: Adhesions (#1 in developed world), hernias, malignancy, Crohn's strictures
Presentation: Crampy abdominal pain, distension, nausea/vomiting, obstipation
Diagnosis: CT abdomen/pelvis (transition point, decompressed distal bowel)
Management: NPO, NG tube decompression, IV fluids, serial exams. Surgery if: complete obstruction, strangulation signs (fever, tachycardia, peritonitis, pneumatosis on CT), or failure to improve in 48-72h.

LARGE BOWEL OBSTRUCTION
Causes: Colorectal cancer (#1), volvulus, diverticular stricture, fecal impaction
Sigmoid volvulus: "Coffee bean" sign on XR. Decompression via flexible sigmoidoscopy. Recurrence common → consider sigmoid resection.
Cecal volvulus: Less responsive to endoscopic decompression. Usually requires surgery.
Ogilvie syndrome (acute colonic pseudo-obstruction): Massive cecal dilation without mechanical obstruction. Often in hospitalized, elderly patients. Treatment: Correct electrolytes, neostigmine (2mg IV with cardiac monitoring), colonoscopic decompression. Surgery if cecal diameter >12cm or signs of ischemia.

CELIAC DISEASE
Autoimmune reaction to gluten → villous atrophy. Diagnosis: tTG-IgA + total IgA (IgA deficiency common). Confirm with duodenal biopsy. Must be on gluten-containing diet for testing. Treatment: Lifelong strict gluten-free diet.`},

{topic:"Nutrition & Feeding",chapter:"Gastroenterology",page:"p.78",content:`NUTRITIONAL ASSESSMENT: BMI, albumin (half-life 20 days), prealbumin (half-life 2 days, better for acute changes), weight trends, dietary intake

ENTERAL NUTRITION (EN) — preferred over parenteral (maintains gut mucosal integrity, lower infection risk)
- Start within 24-48h of ICU admission if unable to eat
- Route: NG tube (short-term), nasoduodenal/NJ (if high aspiration risk), PEG (long-term >4 weeks)
- Start at low rate and advance to goal over 24-48h
- Complications: Aspiration, diarrhea, refeeding syndrome, tube clogging

PARENTERAL NUTRITION (TPN)
- Indication: Non-functioning GI tract, unable to meet needs enterally
- Central line required (high osmolarity)
- Components: Dextrose, amino acids, lipids, electrolytes, vitamins, trace elements
- Monitor: Daily BMP, weekly LFTs, triglycerides, prealbumin
- Complications: Line infection (#1), hyperglycemia, hepatic steatosis, cholestasis

REFEEDING SYNDROME
- Risk: Severely malnourished patients, anorexia nervosa, chronic alcoholism, prolonged NPO
- Pathophysiology: Insulin surge with refeeding → intracellular shift of phosphorus, potassium, magnesium
- Prevention: Start low, advance slow. Check and replete phosphorus, K, Mg before and daily. Thiamine supplementation.`},

{topic:"Weight & Weight Loss",chapter:"Gastroenterology",page:"p.79",content:`UNINTENTIONAL WEIGHT LOSS (>5% in 6 months)
Causes: Malignancy (#1 cause in elderly), depression, hyperthyroidism, DM, adrenal insufficiency, HIV, TB, malabsorption (celiac, chronic pancreatitis), HF, COPD, dementia, medications
Workup: CBC, CMP, TFTs, A1c, ESR/CRP, LDH, HIV, UA, age-appropriate cancer screening, CT chest/abdomen/pelvis if initial workup unrevealing

OBESITY
BMI 25-29.9: Overweight | 30-34.9: Class I | 35-39.9: Class II | ≥40: Class III (morbid)
Complications: T2DM, CVD, OSA, NAFLD, OA, certain cancers, GERD
Treatment:
- Lifestyle: Diet + exercise (target ≥5-10% weight loss for metabolic benefit)
- Pharmacotherapy (BMI ≥30, or ≥27 with comorbidity): GLP-1 RAs (semaglutide — most effective, up to 15% weight loss), tirzepatide (GLP-1/GIP dual agonist — up to 20% weight loss), orlistat, phentermine-topiramate, naltrexone-bupropion
- Bariatric surgery (BMI ≥40, or ≥35 with comorbidity): Sleeve gastrectomy, Roux-en-Y gastric bypass. Most effective long-term intervention. Requires lifelong vitamin supplementation.`},

{topic:"Pancreatitis & Pancreatic Masses",chapter:"Gastroenterology",page:"p.80",content:`ACUTE PANCREATITIS
Diagnosis (2 of 3): Characteristic abdominal pain (epigastric, radiating to back), lipase >3x ULN, imaging findings
Etiology: Gallstones (#1), alcohol (#2), hypertriglyceridemia (>1000), drugs (azathioprine, valproic acid, didanosine), post-ERCP, autoimmune
Management: Aggressive IV fluid resuscitation (LR preferred, goal-directed), pain control (opioids OK), early oral feeding as tolerated (within 24h), NPO only if unable to tolerate PO
Severity: BISAP score, APACHE II. Severe if organ failure (renal, respiratory, cardiovascular) or local complications.
Complications: Necrotizing pancreatitis (walled-off necrosis — drain if infected, >4 weeks from onset), pseudocyst, pancreatic duct disruption
Gallstone pancreatitis: ERCP if cholangitis or persistent CBD stone. Cholecystectomy during same admission.

PANCREATIC MASSES
Pancreatic adenocarcinoma: Head (painless jaundice), body/tail (pain, weight loss). CA 19-9 marker. CT pancreas protocol. Most present at advanced stage. Surgery (Whipple) if resectable. Chemo: FOLFIRINOX or gemcitabine + nab-paclitaxel.
Pancreatic cystic lesions: IPMN (main duct = higher malignant potential), mucinous (premalignant), serous (benign). EUS + fluid analysis (CEA, amylase) guides management.`},

{topic:"Liver Chemistry Tests",chapter:"Gastroenterology",page:"p.81",content:`PATTERN RECOGNITION
Hepatocellular (ALT/AST elevated >> ALP/bilirubin): Viral hepatitis, drugs/toxins, autoimmune hepatitis, Wilson's, ischemic hepatitis, Budd-Chiari
Cholestatic (ALP/bilirubin elevated >> ALT/AST): Biliary obstruction (stones, stricture, cancer), PBC, PSC, drug-induced, infiltrative (sarcoidosis, amyloidosis, lymphoma)
Mixed: Drug reactions, granulomatous hepatitis

AST/ALT RATIO
- AST:ALT >2:1 suggests alcoholic liver disease (alcohol damages mitochondria → more AST released)
- ALT >AST in most other hepatocellular diseases (NAFLD, viral hepatitis)

MARKEDLY ELEVATED (>1000 U/L)
- Ischemic hepatitis ("shock liver"): Usually rapid rise and fall, context of hypotension/shock
- Acute viral hepatitis (A, B): Often with prodrome, check viral serologies
- Drug/toxin injury: Acetaminophen (#1 cause of ALF), herbal supplements, medications
- Autoimmune hepatitis: Check ANA, ASMA, IgG levels
- Acute Budd-Chiari: Hepatic vein thrombosis, RUQ pain, ascites, hepatomegaly

ISOLATED ELEVATED BILIRUBIN
- Indirect (unconjugated): Hemolysis, Gilbert syndrome, ineffective erythropoiesis
- Direct (conjugated): Biliary obstruction, Dubin-Johnson, Rotor syndrome, sepsis, TPN`},

{topic:"Biliary Disease",chapter:"Gastroenterology",page:"p.82",content:`BILIARY COLIC: RUQ/epigastric pain after fatty meals, lasts 30 min-6h, resolves. US shows gallstones. Elective cholecystectomy.
ACUTE CHOLECYSTITIS: Persistent RUQ pain >6h, fever, Murphy sign, leukocytosis. US: Gallbladder wall thickening, pericholecystic fluid, sonographic Murphy sign. HIDA scan if US equivocal (non-filling of GB). Treatment: NPO, IV antibiotics, cholecystectomy (within 72h preferred).
CHOLEDOCHOLITHIASIS: CBD stone. Elevated bilirubin, ALP, dilated CBD on US. MRCP or EUS to confirm. ERCP for stone removal.
ACUTE CHOLANGITIS (Charcot triad: RUQ pain, fever, jaundice; Reynolds pentad: add AMS + hypotension):
- Medical emergency. IV antibiotics + urgent ERCP for biliary decompression.
- If ERCP fails: Percutaneous transhepatic cholangiography (PTC) drainage.

ACALCULOUS CHOLECYSTITIS: Critically ill, ICU patients. No gallstones. Gallbladder wall thickening, distension. Treatment: Percutaneous cholecystostomy tube if too sick for surgery.

PRIMARY BILIARY CHOLANGITIS (PBC): Autoimmune destruction of intrahepatic bile ducts. Anti-mitochondrial antibody (AMA) positive. Treatment: Ursodeoxycholic acid (UDCA).
PRIMARY SCLEROSING CHOLANGITIS (PSC): Fibrosis of intra/extrahepatic bile ducts. Associated with UC. "Beading" on MRCP. Increased cholangiocarcinoma risk. No proven medical therapy. Liver transplant for end-stage.`},

{topic:"Acute Liver Injury & Failure",chapter:"Gastroenterology",page:"p.83",content:`ACUTE LIVER FAILURE (ALF)
Definition: Coagulopathy (INR ≥1.5) + encephalopathy in patient WITHOUT pre-existing liver disease, illness <26 weeks
Causes: Acetaminophen (#1 in US), viral hepatitis (A, B), drug-induced, autoimmune, Wilson's, Budd-Chiari, pregnancy-related (HELLP, AFLP), ischemic
Workup: Acetaminophen level, viral hepatitis serologies, autoimmune markers (ANA, ASMA, IgG), ceruloplasmin, pregnancy test, toxicology screen, Doppler US of hepatic veins

MANAGEMENT
- Transfer to liver transplant center
- NAC: Give for ALL acute liver failure (not just acetaminophen — improves transplant-free survival)
- Cerebral edema: Elevate HOB, mannitol or hypertonic saline, avoid hyperthermia
- Coagulopathy: Do NOT correct unless actively bleeding or pre-procedure (INR is prognostic marker)
- Infection surveillance: Low threshold for empiric antibiotics (patients are immunocompromised)
- King's College Criteria: Predicts need for transplant (different criteria for acetaminophen vs non-acetaminophen ALF)`},

{topic:"Viral Hepatitis",chapter:"Gastroenterology",page:"p.84",content:`HEPATITIS A: Fecal-oral. Acute only (no chronic state). IgM = acute, IgG = prior infection/immunity. Supportive care. Vaccine available.
HEPATITIS B:
- HBsAg (+): Active infection. HBeAg (+): High replication. Anti-HBs (+): Immune (vaccine or recovered). Anti-HBc IgM (+): Acute. Anti-HBc IgG (+): Prior exposure.
- Isolated anti-HBc: "Core window" (between HBsAg clearance and anti-HBs appearance), or occult HBV
- Chronic HBV: HBsAg (+) >6 months. Treatment: Tenofovir or entecavir if elevated ALT + high viral load, cirrhosis, or immunosuppression.
- Screen for HBV before immunosuppression (risk of reactivation)

HEPATITIS C:
- Anti-HCV (+) → confirm with HCV RNA (viral load)
- Treatment: Direct-acting antivirals (DAAs) — cure rate >95% in 8-12 weeks
- Common regimens: Sofosbuvir/velpatasvir (pan-genotypic), glecaprevir/pibrentasvir
- Screen all adults 18-79 at least once (USPSTF)

HEPATITIS D: Requires HBV co-infection. More severe disease. Check anti-HDV in HBsAg+ patients with severe/worsening disease.
HEPATITIS E: Fecal-oral (undercooked pork, travel). Usually self-limited. Can be chronic in immunocompromised.`},

{topic:"Alcohol-Related Liver Disease",chapter:"Gastroenterology",page:"p.85",content:`SPECTRUM: Steatosis → steatohepatitis → fibrosis → cirrhosis
AST:ALT >2:1 is classic (B6 deficiency impairs ALT more than AST)

ALCOHOLIC HEPATITIS
- Presentation: Jaundice, hepatomegaly, fever, leukocytosis, AST/ALT usually <300
- Diagnosis: Clinical (Maddrey discriminant function, MELD score)
- Maddrey DF ≥32 or MELD ≥20: Severe — consider prednisolone 40mg × 28 days
- Lille score at day 7: If >0.45, steroids not helping → stop
- STOPAH trial: Prednisolone showed non-significant 28-day mortality benefit. Pentoxifylline showed no benefit.
- Supportive: Nutrition (high-calorie, high-protein), thiamine, folate, multivitamin
- Contraindications to steroids: Active infection, GI bleeding, hepatorenal syndrome, multiorgan failure

ALCOHOL USE DISORDER MANAGEMENT
- Abstinence is most important intervention
- Naltrexone or acamprosate for maintenance
- Disulfiram (avoid in liver disease)
- All patients: Thiamine before glucose, folate, multivitamin`},

{topic:"NAFLD",chapter:"Gastroenterology",page:"p.86",content:`DEFINITION: Hepatic steatosis (>5% of hepatocytes) WITHOUT significant alcohol use or other causes
NAFLD: Simple steatosis (low progression risk)
NASH (steatohepatitis): Inflammation + hepatocyte ballooning ± fibrosis (can progress to cirrhosis)
New terminology: MASLD (metabolic dysfunction-associated steatotic liver disease)

RISK FACTORS: Obesity, T2DM, metabolic syndrome, dyslipidemia, PCOS
DIAGNOSIS: Elevated ALT (often ALT > AST), hepatic steatosis on imaging (US, CT, or MRI-PDFF)
Fibrosis assessment: FIB-4 score, NAFLD fibrosis score, vibration-controlled transient elastography (FibroScan), liver biopsy (gold standard for NASH diagnosis and staging)

MANAGEMENT
- Weight loss: 5-7% improves steatosis, ≥10% can improve fibrosis
- Lifestyle: Mediterranean diet, aerobic + resistance exercise
- Pharmacotherapy: Pioglitazone (improves histology in NASH, even without DM), vitamin E 800 IU/day (PIVENS trial — non-diabetic NASH only), GLP-1 RAs (semaglutide showed NASH resolution), resmetirom (first FDA-approved for NASH with fibrosis, 2024)
- Manage comorbidities: DM, dyslipidemia, HTN
- Statins are SAFE in NAFLD/NASH (and often indicated for CV risk)
- Avoid excessive alcohol consumption`},

{topic:"End Stage Liver Disease",chapter:"Gastroenterology",page:"p.87",content:`CIRRHOSIS COMPLICATIONS
Ascites: Sodium restriction, diuretics (spironolactone 100mg + furosemide 40mg, maintain 100:40 ratio), large-volume paracentesis with albumin replacement (6-8g/L removed)
SBP: Diagnostic paracentesis if ascites + fever/pain/encephalopathy/leukocytosis. PMN >250/mm³ = SBP. Treatment: Ceftriaxone 2g IV × 5 days + albumin (1.5g/kg day 1, 1g/kg day 3). Prophylaxis: Ciprofloxacin or TMP-SMX if prior SBP, GI bleed, or ascites protein <1.5g/dL.
Variceal hemorrhage: See Upper GI Bleeding section. Prophylaxis: Non-selective beta-blocker (propranolol, nadolol, carvedilol) or variceal band ligation.
Hepatic encephalopathy: Lactulose (titrate to 2-3 BMs/day) + rifaximin (550mg BID). Identify precipitants: Infection, GI bleed, constipation, medications, electrolyte abnormalities, dehydration.
Hepatocellular carcinoma: Screen with US + AFP every 6 months in all cirrhotics.

MELD SCORE: Bilirubin, INR, creatinine. Determines transplant priority. MELD-Na includes sodium.
Child-Pugh: A (5-6), B (7-9), C (10-15). Predicts surgical mortality and prognosis.`},

{topic:"Hepatorenal Syndrome",chapter:"Gastroenterology",page:"p.88",content:`DEFINITION: Renal failure in setting of advanced liver disease, driven by splanchnic vasodilation → renal vasoconstriction
Diagnosis of exclusion: Must rule out other causes of AKI (hypovolemia, ATN, obstruction, nephrotoxins)

DIAGNOSTIC CRITERIA
1. Cirrhosis with ascites
2. AKI not responding to volume expansion with albumin (1g/kg × 2 days)
3. No shock, no nephrotoxins, no structural kidney disease
4. No proteinuria >500mg/day, no hematuria, normal renal US

TYPES
HRS-AKI (formerly Type 1): Rapid rise in creatinine (doubling within 2 weeks), high mortality
HRS-CKD (formerly Type 2): Slow progressive renal failure, often with refractory ascites

TREATMENT
- Albumin + vasoconstrictor therapy:
  - Midodrine (PO) + octreotide (SQ) + albumin: Less effective but commonly used
  - Norepinephrine drip + albumin: ICU setting, may be most effective
  - Terlipressin + albumin: FDA-approved 2022 (CONFIRM trial), improves renal function
- TIPS: May help in selected patients
- Liver transplant: Definitive treatment, best outcomes if transplanted early`},

{topic:"Liver Transplant",chapter:"Gastroenterology",page:"p.89",content:`INDICATIONS: Decompensated cirrhosis (MELD ≥15), acute liver failure, hepatocellular carcinoma within Milan criteria, select cholestatic/metabolic diseases
CONTRAINDICATIONS: Active substance abuse, uncontrolled infection, extrahepatic malignancy, advanced cardiopulmonary disease, poor social support/non-adherence

POST-TRANSPLANT MANAGEMENT
Immunosuppression: Tacrolimus (cornerstone) + mycophenolate ± prednisone. Monitor tacrolimus levels (nephrotoxic, narrow therapeutic index).
Infections: Highest risk first 6 months. CMV (prophylaxis with valganciclovir), PJP (TMP-SMX prophylaxis × 6-12 months), fungal infections.
Rejection: Acute cellular (elevated LFTs, biopsy shows portal inflammation) → pulse steroids. Chronic ductopenic rejection (vanishing bile duct syndrome) → retransplant.
Metabolic: New-onset diabetes (tacrolimus effect), hypertension, dyslipidemia, osteoporosis, renal dysfunction
Malignancy: Increased risk of PTLD (EBV-driven), skin cancers. Screen regularly.`},

// ═══════════════════════════════════════
// NEPHROLOGY
// ═══════════════════════════════════════

{topic:"Acute Kidney Injury",chapter:"Nephrology",page:"p.90",content:`DEFINITION (KDIGO): Cr increase ≥0.3 within 48h, OR ≥1.5x baseline within 7 days, OR UOP <0.5 mL/kg/h × 6h

ETIOLOGIES
Pre-renal (most common): Hypovolemia, HF, cirrhosis, NSAIDs, ACEi/ARB
Intrinsic: ATN (ischemic/nephrotoxic — #1), AIN (drugs, infection), glomerulonephritis, TMA
Post-renal: Obstruction (BPH, stones, tumor, bilateral ureteral obstruction)

WORKUP: BMP, UA with microscopy, urine electrolytes, renal US
- FENa <1% → pre-renal (if not on diuretics). FEUrea <35% → more reliable on diuretics.
- Muddy brown casts → ATN. WBC casts + eosinophils → AIN. RBC casts → GN. Bland → pre-renal or obstruction.

MANAGEMENT: Treat cause, optimize volume, avoid nephrotoxins, dose-adjust meds, monitor K+/acid-base
RRT indications (AEIOU): Acidosis (refractory), Electrolytes (refractory hyperkalemia), Ingestion (toxic alcohols, lithium, salicylates), Overload (refractory volume overload), Uremia (encephalopathy, pericarditis, bleeding)`},

{topic:"Glomerular Disease",chapter:"Nephrology",page:"p.91",content:`NEPHROTIC SYNDROME: Proteinuria >3.5g/day, hypoalbuminemia, edema, hyperlipidemia, lipiduria
Causes: Minimal change (kids, NSAIDs, lymphoma), FSGS (Black patients, HIV, obesity, heroin), membranous (PLA2R antibody, cancer, hepatitis B), diabetic nephropathy, amyloidosis
Complications: Hypercoagulability (renal vein thrombosis), infection, hyperlipidemia

NEPHRITIC SYNDROME: Hematuria (RBC casts), proteinuria (<3.5g), HTN, edema, rising Cr
Causes: IgA nephropathy (#1 worldwide GN), post-infectious GN, lupus nephritis, anti-GBM (Goodpasture's), ANCA-associated vasculitis (GPA, MPA, EGPA), membranoproliferative GN

WORKUP: UA/microscopy, spot protein:creatinine ratio or 24h urine, complement levels (C3/C4), ANA, anti-dsDNA, ANCA, anti-GBM, PLA2R Ab, hepatitis B/C, HIV, SPEP/UPEP, renal biopsy
- Low complement: Lupus nephritis, post-infectious GN, MPGN, cryoglobulinemia, endocarditis
- Normal complement: IgA, ANCA vasculitis, anti-GBM, FSGS, membranous`},

{topic:"Chronic Kidney Disease",chapter:"Nephrology",page:"p.92",content:`STAGING (by eGFR): G1 (≥90 with kidney damage) → G2 (60-89) → G3a (45-59) → G3b (30-44) → G4 (15-29) → G5 (<15)
Albuminuria: A1 (<30), A2 (30-300), A3 (>300 mg/g)

COMPLICATIONS & MANAGEMENT
- HTN: Target <130/80. ACEi/ARB first-line (slow progression, especially with proteinuria). Tolerate Cr rise up to 30%.
- Proteinuria: ACEi/ARB + SGLT2 inhibitor (DAPA-CKD, EMPA-KIDNEY) + finerenone if DM
- Anemia: EPO-stimulating agents when Hgb <10 (target 10-11.5, avoid >13 per CHOIR trial). Iron supplementation.
- Mineral bone disease: Phosphorus restriction → phosphate binders → vitamin D → calcimimetics (cinacalcet) if secondary hyperPTH
- Metabolic acidosis: Sodium bicarbonate if HCO3 <22 (slows CKD progression)
- Hyperkalemia: Dietary restriction, patiromer, sodium zirconium cyclosilicate, loop diuretics
- Cardiovascular: Statins (SHARP trial), BP control, SGLT2i
- Avoid nephrotoxins: NSAIDs, contrast (hydrate if needed), aminoglycosides
- Refer to nephrology: eGFR <30, rapidly declining, proteinuria >300, resistant HTN`},

{topic:"Dialysis & Transplant",chapter:"Nephrology",page:"p.93",content:`HEMODIALYSIS (HD): 3-4 hours, 3x/week. Access: AV fistula (preferred) > AV graft > tunneled catheter.
Indications to initiate: Symptomatic uremia, refractory hyperkalemia/acidosis/volume overload, eGFR approaching 5-10
Complications: Hypotension (#1), arrhythmia, disequilibrium syndrome, access infection/thrombosis, amyloidosis (long-term)

PERITONEAL DIALYSIS (PD): Continuous exchanges via peritoneal catheter at home. Better initial QOL, preserved residual renal function longer.
Complication: PD peritonitis (cloudy effluate, abdominal pain, WBC >100 with >50% PMN). Treat with intraperitoneal antibiotics.

CONTINUOUS RRT (CRRT): For hemodynamically unstable ICU patients. Gentler fluid and solute removal. Types: CVVH, CVVHD, CVVHDF.

KIDNEY TRANSPLANT
- Best long-term outcome for ESKD. Living donor > deceased donor.
- Evaluation: Cardiac risk assessment, cancer screening, infection screening (HIV, HBV, HCV, CMV, EBV, TB)
- Immunosuppression: Tacrolimus + mycophenolate + prednisone
- Complications: Rejection (cellular → steroids, antibody-mediated → plasmapheresis/IVIG), infection (CMV, BK virus, PJP), malignancy (skin cancer, PTLD), new-onset DM, hypertension`},

{topic:"Advanced Diuresis",chapter:"Nephrology",page:"p.94",content:`LOOP DIURETICS (Furosemide, bumetanide, torsemide)
- Mechanism: Inhibit Na-K-2Cl cotransporter in thick ascending limb
- IV furosemide: 2.5x oral dose equivalent. Bumetanide 1mg ≈ furosemide 40mg ≈ torsemide 20mg.
- Ceiling dose: Maximum single effective dose (furosemide 80-200mg IV per dose depending on CKD stage)
- Continuous infusion may be more effective than bolus dosing in severe HF (DOSE trial: no difference in outcomes, but higher doses = more diuresis)

DIURETIC RESISTANCE — Sequential Nephron Blockade
1. Optimize: Ensure adequate dose, switch to IV if on PO, check adherence to sodium restriction
2. Add thiazide (metolazone 5-10mg PO 30 min before loop diuretic) — blocks compensatory distal Na reabsorption
3. Add spironolactone/amiloride if not already on
4. Add acetazolamide (ADVOR trial: 500mg IV improved decongestion in acute HF)
5. Consider albumin + furosemide if serum albumin very low
6. Ultrafiltration or CRRT if truly refractory

MONITORING: Daily weights, strict I/O, BMP 1-2x/day (watch K, Mg, Na, Cr), fluid restriction if Na <130`},

{topic:"Acid-Base Disorders",chapter:"Nephrology",page:"p.95",content:`SYSTEMATIC APPROACH
1. pH: Acidemia (<7.35) or alkalemia (>7.45)?
2. Primary disorder: Check pCO₂ and HCO₃ to identify primary process
3. Compensation: Expected compensation formulas (if compensation doesn't match → mixed disorder)
4. Anion gap: Na - (Cl + HCO₃). Normal 10-12. If elevated → anion gap metabolic acidosis
5. Delta-delta: (AG - 12) / (24 - HCO₃). If >2: concurrent metabolic alkalosis. If <1: concurrent NAGMA.

ANION GAP METABOLIC ACIDOSIS (MUDPILES)
Methanol, Uremia, DKA, Propylene glycol, INH/Iron, Lactic acidosis, Ethylene glycol, Salicylates

NON-ANION GAP METABOLIC ACIDOSIS (HARDUPS)
Hyperalimentation, Addison's, RTA, Diarrhea, Ureteral diversion, Pancreatic fistula, Saline (dilutional)
Urine anion gap (Na + K - Cl): Positive → renal cause (RTA). Negative → GI loss (diarrhea).

METABOLIC ALKALOSIS: Vomiting, NG suction, diuretics, contraction alkalosis
- Saline-responsive (urine Cl <20): Volume depletion, vomiting, NG suction. Treat with NS.
- Saline-resistant (urine Cl >20): Hyperaldosteronism, Cushing's, Bartter/Gitelman. Treat underlying cause.

RESPIRATORY: Acidosis (hypoventilation) vs alkalosis (hyperventilation). Address underlying cause.`},

{topic:"Sodium Disorders",chapter:"Nephrology",page:"p.96",content:`HYPONATREMIA (Na <135 mEq/L)
1. Assess serum osmolality: Hypotonic (<280) → true hyponatremia. Hypertonic (>295) → hyperglycemia (correct Na: add 1.6 per 100 glucose >100). Isotonic → pseudohyponatremia (lipids, proteins).
2. Assess volume status:
  - Hypovolemic: Diarrhea, vomiting, diuretics. Treatment: NS.
  - Euvolemic: SIADH (#1), hypothyroidism, adrenal insufficiency. Treatment: Fluid restriction, salt tabs, tolvaptan.
  - Hypervolemic: HF, cirrhosis, nephrotic syndrome. Treatment: Diuresis, fluid restriction.

CORRECTION RATE: ≤8 mEq/L per 24h (≤10 if severe symptoms). Risk of osmotic demyelination syndrome (ODS) if corrected too fast.
Severe symptoms (seizures, coma): 3% hypertonic saline 100-150 mL bolus, repeat up to 3x, check Na every 2h.

HYPERNATREMIA (Na >145 mEq/L)
- Almost always a water deficit — patient unable to access free water
- Causes: Insensible losses, diabetes insipidus (central or nephrogenic), osmotic diuresis
- Treatment: Free water (PO, D5W IV). Correct at ≤10 mEq/L per 24h (risk of cerebral edema if too fast).
- Free water deficit = TBW × [(Na/140) - 1]`},

{topic:"Potassium Disorders",chapter:"Nephrology",page:"p.97",content:`HYPERKALEMIA (K >5.5 mEq/L)
ECG progression: Peaked T waves → flattened P waves → widened QRS → sine wave → VF/asystole

MANAGEMENT (in order of urgency):
1. Stabilize myocardium: Calcium gluconate 10 mL of 10% IV over 2-3 min (does NOT lower K, just stabilizes membrane). Give if ECG changes present.
2. Shift K intracellularly: Insulin 10 units IV + D50 25g (check glucose hourly), albuterol 10-20mg nebulized, sodium bicarbonate (if acidotic)
3. Remove K from body: Kayexalate (slow, 4-6h), patiromer, sodium zirconium cyclosilicate, loop diuretics, hemodialysis (definitive)

Causes: Renal failure, ACEi/ARB, spironolactone, K-sparing diuretics, rhabdomyolysis, tumor lysis, acidosis, adrenal insufficiency, pseudohyperkalemia (hemolyzed sample, very high WBC/platelets)

HYPOKALEMIA (K <3.5 mEq/L)
Causes: GI losses (vomiting, diarrhea, NG suction), renal losses (diuretics, hyperaldosteronism, RTA), transcellular shift (insulin, alkalosis, beta-agonists)
Treatment: Oral KCl preferred. IV KCl max rate 10-20 mEq/hr via peripheral, 40 mEq/hr via central (with cardiac monitoring).
Always check and replete magnesium — hypomagnesemia makes hypokalemia refractory to treatment.
Each 10 mEq KCl raises serum K by ~0.1 mEq/L.`},

{topic:"Magnesium & Phosphorus Disorders",chapter:"Nephrology",page:"p.98",content:`HYPOMAGNESEMIA (Mg <1.8 mg/dL)
Causes: GI losses (diarrhea, malabsorption), renal losses (diuretics, alcohol, aminoglycosides, cisplatin, PPIs), poor intake
Symptoms: Tremor, tetany, seizures, arrhythmias (torsades, refractory hypokalemia/hypocalcemia)
Treatment: Mild: Magnesium oxide PO. Severe/symptomatic: Magnesium sulfate 1-2g IV over 1-2 hours.
Pearl: Must replete Mg before K will correct. Must replete Mg before Ca will correct.

HYPERMAGNESEMIA: Rare except in renal failure with Mg-containing medications. Loss of DTRs → respiratory depression → cardiac arrest. Treatment: Calcium gluconate, IV fluids, hemodialysis if severe.

HYPOPHOSPHATEMIA (Phos <2.5 mg/dL)
Causes: Refeeding syndrome (#1 inpatient cause), insulin, respiratory alkalosis, vitamin D deficiency, hyperPTH, alcohol
Symptoms: Weakness, respiratory failure, hemolysis, rhabdomyolysis (if <1.0 mg/dL)
Treatment: Oral phosphorus (sodium/potassium phosphate). IV if severe (<1.0) or symptomatic.

HYPERPHOSPHATEMIA: CKD (#1), tumor lysis syndrome, rhabdomyolysis, hypoparathyroidism
Treatment: Phosphate binders (sevelamer, calcium acetate, lanthanum) with meals, dietary restriction, dialysis if severe`},

{topic:"IV Fluids & Electrolyte Repletion",chapter:"Nephrology",page:"p.99",content:`CRYSTALLOIDS
- Normal saline (0.9% NaCl): 154 mEq Na and Cl. Risk of hyperchloremic metabolic acidosis with large volumes.
- Lactated Ringer's: More physiologic. Preferred in resuscitation (SMART trial). Contains K (4 mEq/L) — caution in hyperkalemia.
- D5W: Free water replacement. For hypernatremia or maintenance fluids. Do NOT use for resuscitation.
- 3% Hypertonic saline: For severe symptomatic hyponatremia only.

MAINTENANCE FLUIDS: D5 1/2 NS + 20 mEq KCl at 75-125 mL/hr (traditional 4-2-1 rule: 40 + 20 + 60 = ~100 mL/hr for 70 kg)

COLLOIDS
- Albumin 5%: Volume expansion (iso-oncotic). Use in SBP (with antibiotics), large-volume paracentesis (25% albumin), hepatorenal syndrome.
- Albumin 25%: Hyper-oncotic. Pulls fluid into intravascular space.

REPLETION GUIDELINES
- Potassium: PO preferred. 40 mEq raises K ~0.4. IV max 10-20 mEq/hr peripheral.
- Magnesium: Mg sulfate 1-2g IV or Mg oxide 400-800mg PO. Check levels daily if repleting.
- Phosphorus: K-Phos or Na-Phos PO (15-30 mmol). IV only if <1.0 or symptomatic.
- Calcium: Calcium gluconate IV (preferred peripherally — less tissue necrosis than calcium chloride). Ca chloride via central line for emergencies (cardiac arrest, hyperkalemia).`},

{topic:"Urinalysis & Nephrolithiasis",chapter:"Nephrology",page:"p.100",content:`URINALYSIS INTERPRETATION
Color: Dark → concentrated, tea-colored → myoglobin/hemoglobin, red → blood/beets/rifampin
pH: <5.5 (acidic — uric acid stones, appropriate response to acidosis) vs >7.0 (UTI with urease organisms, RTA type 1)
Specific gravity: <1.010 (dilute), >1.020 (concentrated)
Protein: Trace may be normal. >30 mg/dL → check spot protein:creatinine ratio or 24h urine.
Blood: +Heme without RBCs → myoglobinuria or hemoglobinuria
WBC: >5/HPF → UTI, AIN, GN. WBC casts → pyelonephritis or AIN.
RBC: >3/HPF → hematuria workup. RBC casts → glomerulonephritis.
Casts: Hyaline (normal), granular/muddy brown (ATN), WBC (pyelo/AIN), RBC (GN), waxy/broad (CKD)
Crystals: Calcium oxalate (envelope), uric acid (rhomboid), struvite (coffin lid), cystine (hexagonal)

NEPHROLITHIASIS
Types: Calcium oxalate (#1, 80%), calcium phosphate, uric acid (radiolucent on XR), struvite (infection-related, staghorn), cystine (rare, hereditary)
Presentation: Acute, severe, colicky flank pain radiating to groin. Hematuria.
Diagnosis: CT abdomen/pelvis without contrast (gold standard)
Management: Pain control (NSAIDs first-line + opioids), IV fluids, alpha-blocker (tamsulosin) for MET if <10mm.
Urology consult if: >10mm, infection + obstruction (obstructive pyelonephritis → emergency stent/nephrostomy), intractable pain/vomiting, solitary kidney, AKI`},

// ═══════════════════════════════════════
// INFECTIOUS DISEASE
// ═══════════════════════════════════════

{topic:"Empiric Antibiotics",chapter:"Infectious Disease",page:"p.101",content:`COMMUNITY-ACQUIRED PNEUMONIA: Outpatient: Amoxicillin or doxycycline. Inpatient (non-ICU): Ceftriaxone + azithromycin OR respiratory fluoroquinolone (levofloxacin). ICU: Ceftriaxone + azithromycin (add vancomycin if MRSA risk).
HEALTHCARE-ASSOCIATED / VENTILATOR PNA: Piperacillin-tazobactam or cefepime or meropenem + vancomycin (if MRSA risk)
UTI: Uncomplicated cystitis: Nitrofurantoin or TMP-SMX. Pyelonephritis: Ceftriaxone or fluoroquinolone. Complicated/catheter: Cefepime or pip-tazo ± vancomycin.
SKIN/SOFT TISSUE: Cellulitis (non-purulent): Cephalexin or cefazolin. Purulent/abscess: TMP-SMX or doxycycline (MRSA coverage). Necrotizing fasciitis: Vancomycin + pip-tazo + clindamycin → emergent surgery.
INTRA-ABDOMINAL: Pip-tazo, cefepime + metronidazole, or meropenem. Source control essential.
MENINGITIS: Vancomycin + ceftriaxone + ampicillin (if >50 or immunocompromised) + dexamethasone (give before or with first antibiotic dose).
SEPSIS/UNKNOWN SOURCE: Vancomycin + piperacillin-tazobactam (or cefepime or meropenem). Narrow once cultures return.
NEUTROPENIC FEVER: Cefepime or meropenem. Add vancomycin if hemodynamic instability, skin/catheter infection, mucositis.`},

{topic:"Multidrug Resistant Organisms",chapter:"Infectious Disease",page:"p.102",content:`MRSA: Vancomycin IV (target trough AUC/MIC), daptomycin (NOT for pneumonia — inactivated by surfactant), linezolid, TMP-SMX, doxycycline (skin/soft tissue)
VRE: Daptomycin, linezolid. Ampicillin if susceptible.
ESBL (Extended-Spectrum Beta-Lactamase): Meropenem (or ertapenem for non-severe). Ceftriaxone unreliable.
CRE (Carbapenem-Resistant Enterobacteriaceae): Ceftazidime-avibactam (if KPC), meropenem-vaborbactam, imipenem-cilastatin-relebactam, cefiderocol. ID consult essential.
Pseudomonas: Cefepime, piperacillin-tazobactam, meropenem, ciprofloxacin (if susceptible). Double-cover for severe infections.
Acinetobacter: Ampicillin-sulbactam, polymyxins (colistin), cefiderocol
C. DIFFICILE: See GI section. Not typically "MDR" but recurrence is common. Fidaxomicin preferred.

STEWARDSHIP PRINCIPLES
- Narrow spectrum based on culture data
- De-escalate when possible
- Shortest effective duration
- Procalcitonin can guide antibiotic discontinuation in respiratory infections and sepsis`},

{topic:"Community Acquired Pneumonia",chapter:"Infectious Disease",page:"p.103",content:`DIAGNOSIS: Symptoms (cough, fever, dyspnea, sputum) + new infiltrate on imaging
Common organisms: S. pneumoniae (#1), H. influenzae, Mycoplasma, Chlamydophila, Legionella, respiratory viruses
Severity: CURB-65 score (Confusion, Uremia >20, RR ≥30, BP <90/60, age ≥65): 0-1 outpatient, 2 consider admission, ≥3 ICU consideration

TREATMENT
Outpatient (healthy, no comorbidities): Amoxicillin 1g TID × 5 days OR doxycycline
Outpatient (comorbidities): Amoxicillin-clavulanate + azithromycin OR respiratory FQ
Inpatient (non-severe): Ceftriaxone + azithromycin × 5 days (or respiratory FQ monotherapy)
Inpatient (severe/ICU): Ceftriaxone + azithromycin. Add vancomycin if MRSA risk, add anti-pseudomonal if risk factors.
Duration: 5 days minimum, can stop when afebrile ≥48h and clinically improving (ATS/IDSA 2019)
Steroids: Dexamethasone 6mg × 4 days in severe CAP may reduce mortality (CAPE COD trial 2023)

LEGIONELLA: Think of it with hyponatremia, diarrhea, elevated LFTs, travel/water exposure. Urine antigen detects serogroup 1 only. Treat with azithromycin or fluoroquinolone.`},

{topic:"HAP/VAP & Aspiration Pneumonia",chapter:"Infectious Disease",page:"p.104",content:`HAP: Pneumonia ≥48h after hospital admission, not incubating at time of admission
VAP: Pneumonia ≥48h after endotracheal intubation
Risk factors for MDR: Prior IV antibiotics within 90 days, hospitalization ≥5 days, high local MRSA/Pseudomonas prevalence, septic shock

TREATMENT
No MDR risk: Piperacillin-tazobactam, cefepime, or meropenem
MDR risk: Two anti-pseudomonal agents (e.g., cefepime + cipro) + vancomycin or linezolid (if MRSA risk)
Duration: 7 days (de-escalate based on cultures, procalcitonin-guided)

ASPIRATION PNEUMONIA vs ASPIRATION PNEUMONITIS
Pneumonitis: Chemical injury from aspiration of gastric contents. Acute onset, may resolve without antibiotics. Observe.
Pneumonia: Infection from aspiration of oropharyngeal bacteria. Develops over hours-days. Fever, infiltrate, productive cough. Treat with antibiotics.
- Community-acquired aspiration PNA: Amoxicillin-clavulanate or ampicillin-sulbactam. Anaerobic coverage if lung abscess or empyema suspected.
- Hospital-acquired aspiration PNA: Treat as HAP.
Prevention: Elevate HOB 30-45°, oral care, minimize sedation, early mobilization`},

{topic:"Viral Respiratory & Head & Neck Infections",chapter:"Infectious Disease",page:"p.105",content:`INFLUENZA: Rapid onset fever, myalgia, cough, sore throat. Diagnose with rapid molecular test (PCR). Treat with oseltamivir 75mg BID × 5 days (most effective within 48h of symptom onset, but consider in hospitalized/severe even if late). Annual vaccination recommended.
COVID-19: Varies from asymptomatic to ARDS. Treatment: Dexamethasone if on O₂ (RECOVERY trial), remdesivir (shortens recovery), nirmatrelvir/ritonavir (Paxlovid) for outpatient high-risk. Avoid steroids if not on O₂.
RSV: Now recognized in adults, especially elderly/immunocompromised. Supportive care. Vaccines available for ≥60.
PHARYNGITIS: Most viral. GAS: Rapid strep test → treat with amoxicillin or penicillin × 10 days. Centor criteria help guide testing.
SINUSITIS: Viral >> bacterial. Bacterial if: symptoms >10 days, severe symptoms, or biphasic illness. Treat with amoxicillin-clavulanate.
PERITONSILLAR ABSCESS: Severe sore throat, "hot potato" voice, trismus, uvular deviation. Treatment: Needle aspiration or I&D + antibiotics.
EPIGLOTTITIS: Adults: Sore throat, dysphagia, drooling, stridor. Emergency — secure airway first. IV antibiotics (ceftriaxone).`},

{topic:"Urinary Tract Infections",chapter:"Infectious Disease",page:"p.106",content:`UNCOMPLICATED CYSTITIS (healthy, non-pregnant women): Dysuria, frequency, urgency. Treat empirically without culture.
- First-line: Nitrofurantoin 100mg BID × 5 days OR TMP-SMX DS BID × 3 days (if local resistance <20%)
- Alternative: Fosfomycin 3g single dose
- Avoid fluoroquinolones for uncomplicated cystitis (reserve for serious infections)

PYELONEPHRITIS: Fever, flank pain, CVA tenderness ± cystitis symptoms. Obtain UA + culture.
- Outpatient: Ciprofloxacin 500mg BID × 7 days or TMP-SMX DS BID × 14 days (if susceptible)
- Inpatient: Ceftriaxone 1g IV daily or fluoroquinolone. Switch to PO when improving. Total 7-14 days.

COMPLICATED UTI: Catheter-associated, male, pregnant, urologic abnormalities, immunocompromised
- Always obtain culture. Broader coverage: Ceftriaxone, fluoroquinolone, or pip-tazo.
- CAUTI: Catheter removal or exchange + antibiotics × 7 days

ASYMPTOMATIC BACTERIURIA: Treat ONLY in pregnancy and before urologic procedures. Do NOT treat in elderly, catheterized, or diabetic patients.`},

{topic:"Skin & Soft Tissue Infections",chapter:"Infectious Disease",page:"p.107",content:`NON-PURULENT CELLULITIS: Erythema, warmth, swelling without abscess. Usually beta-hemolytic strep (GAS). Treatment: Cephalexin PO or cefazolin IV. Duration 5-7 days.
PURULENT CELLULITIS/ABSCESS: MRSA most common. I&D is primary treatment for abscesses. Add antibiotics (TMP-SMX or doxycycline) if surrounding cellulitis, systemic symptoms, or immunosuppressed.
ERYSIPELAS: Superficial, well-demarcated, raised border. GAS. Treatment: Penicillin or cephalosporin.
NECROTIZING FASCIITIS: SURGICAL EMERGENCY. Pain out of proportion, rapid progression, crepitus, bullae, sepsis.
- Type I (polymicrobial): Diabetics, post-surgical. Treat: Vancomycin + pip-tazo + clindamycin.
- Type II (GAS, monomicrobial): Young, healthy patients. Treat: Same + emergent surgical debridement.
- Do NOT wait for imaging to confirm — clinical diagnosis → OR immediately.

DIABETIC FOOT INFECTIONS: Mild (superficial): Oral antibiotics covering skin flora. Moderate-severe (deep tissue, bone): IV antibiotics, surgical debridement. Check for osteomyelitis (MRI, probe-to-bone test). Long treatment courses (6 weeks if osteomyelitis).`},

{topic:"Osteomyelitis",chapter:"Infectious Disease",page:"p.108",content:`TYPES
Hematogenous: Vertebral osteomyelitis (S. aureus #1), IV drug users, children (long bone metaphysis)
Contiguous: Diabetic foot ulcers, post-surgical, trauma
Organisms: S. aureus (#1 overall), coagulase-negative staph (prosthetic), Pseudomonas (IVDU, diabetic foot), Salmonella (sickle cell)

DIAGNOSIS
- MRI: Best imaging study (90%+ sensitivity and specificity)
- Bone biopsy + culture: Gold standard for pathogen identification (obtain BEFORE antibiotics if possible)
- Probe-to-bone test: Positive if probe touches bone through ulcer (diabetic foot infections)
- Labs: ESR and CRP elevated (useful for monitoring response)

TREATMENT
- IV antibiotics × 6 weeks typically (may shorten to 4 weeks with surgical debridement)
- MRSA: Vancomycin or daptomycin
- MSSA: Nafcillin, cefazolin
- Gram-negative: Ceftriaxone, ciprofloxacin (based on susceptibility)
- Surgical debridement: Essential for devitalized tissue, hardware infection, failure of medical therapy`},

{topic:"Bloodstream Infections & Endocarditis",chapter:"Infectious Disease",page:"p.109",content:`S. AUREUS BACTEREMIA (SAB) — Always significant, never a contaminant
Management: Blood cultures until negative, TTE → TEE if any risk factors, ID consult, echocardiogram in ALL cases, IV antibiotics minimum 14 days (uncomplicated) or 4-6 weeks (complicated/endocarditis)
Complicated SAB: Persistent bacteremia >72h, metastatic infection, endocarditis, prosthetic material

ENDOCARDITIS — Modified Duke Criteria
Major: Positive blood cultures (typical organisms, persistent), endocardial involvement on echo (vegetation, abscess, new valvular regurgitation)
Minor: Predisposing condition, fever, vascular phenomena (Janeway lesions, mycotic aneurysm, septic emboli), immunologic phenomena (Osler nodes, Roth spots, GN), positive cultures not meeting major

TREATMENT
Native valve: Nafcillin/oxacillin (MSSA) or vancomycin (MRSA) × 6 weeks. Add gentamicin briefly for viridans strep.
Prosthetic valve: Vancomycin + gentamicin + rifampin × ≥6 weeks. Urgent surgical consult.
Surgery indications: Heart failure from valvular dysfunction, uncontrolled infection, large vegetation (>10mm) with embolic events, prosthetic valve endocarditis with complications, fungal endocarditis.

COAGULASE-NEGATIVE STAPH BACTEREMIA: Often contaminant (single positive culture). If 2+ cultures positive → evaluate for line infection, prosthetic material. Remove lines if infected.`},

{topic:"Meningitis & Encephalitis",chapter:"Infectious Disease",page:"p.110",content:`BACTERIAL MENINGITIS — Medical Emergency
Presentation: Fever, headache, neck stiffness, altered mental status. Kernig/Brudzinski signs (low sensitivity).
Treatment: Do NOT delay antibiotics for LP. Empiric: Vancomycin + ceftriaxone + dexamethasone (give steroids before/with first antibiotic dose — reduces mortality in pneumococcal meningitis). Add ampicillin if >50 or immunocompromised (Listeria coverage).
LP findings: Elevated WBC (PMN predominant), elevated protein, low glucose (<40 or CSF/serum ratio <0.4), elevated opening pressure.

VIRAL MENINGITIS: Lymphocytic pleocytosis, normal glucose, mildly elevated protein. Usually self-limited. HSV PCR to rule out encephalitis.

ENCEPHALITIS: Altered mental status + fever + focal neurologic deficits or seizures.
- HSV encephalitis: Most common treatable cause. MRI: Temporal lobe involvement. CSF HSV PCR. Treat with IV acyclovir immediately (do NOT wait for PCR results).
- Autoimmune encephalitis (anti-NMDA receptor, etc.): Consider in young patients with psychiatric symptoms, seizures, movement disorder. CSF antibody panel.`},

{topic:"C. Difficile Infection",chapter:"Infectious Disease",page:"p.111",content:`RISK FACTORS: Antibiotics (especially fluoroquinolones, clindamycin, cephalosporins), PPIs, hospitalization, age >65, immunosuppression
DIAGNOSIS: Stool testing — PCR (highly sensitive but may detect colonization) or toxin EIA (more specific). Best: Two-step algorithm (GDH screen + toxin confirmation).
Do NOT test formed stools. Do NOT test for cure (can remain positive after treatment).

TREATMENT
Non-severe (WBC <15K, Cr <1.5): Fidaxomicin 200mg BID × 10 days (preferred, lower recurrence) OR oral vancomycin 125mg QID × 10 days
Severe (WBC ≥15K or Cr ≥1.5): Oral vancomycin 125mg QID × 10 days (± fidaxomicin)
Fulminant (hypotension, ileus, megacolon): Oral vancomycin 500mg QID + IV metronidazole 500mg TID + rectal vancomycin (if ileus). Surgical consult for colectomy.

RECURRENCE (occurs in ~20%)
1st recurrence: Fidaxomicin (if not used initially) or vancomycin taper/pulse
2nd+ recurrence: Fecal microbiota transplant (FMT) highly effective (~90% cure), or SER-109 (FDA-approved microbiome therapeutic)
Prevention: Antibiotic stewardship, hand hygiene (soap and water — alcohol gel does NOT kill spores), contact precautions`},

{topic:"Invasive Fungal Infections",chapter:"Infectious Disease",page:"p.112",content:`CANDIDIASIS: Candidemia (#4 cause of BSI in hospitalized patients). Risk: Central lines, TPN, broad-spectrum antibiotics, immunosuppression. Treatment: Echinocandin (micafungin, caspofungin) first-line. Fluconazole if susceptible species. Remove all central lines. Ophthalmology consult. Repeat blood cultures until negative.
ASPERGILLOSIS: Invasive pulmonary aspergillosis in severely immunocompromised (prolonged neutropenia, transplant). CT: Halo sign → air-crescent sign. Diagnosis: Galactomannan antigen, BAL culture. Treatment: Voriconazole (first-line), isavuconazole.
CRYPTOCOCCOSIS: Meningitis in HIV/AIDS (CD4 <100). India ink, cryptococcal antigen (serum/CSF). Treatment: Amphotericin B + flucytosine × 2 weeks (induction) → fluconazole (consolidation + maintenance). Manage elevated ICP with serial LPs.
MUCORMYCOSIS: Rhinocerebral in diabetics (especially DKA), transplant patients. Black eschar on palate/nasal mucosa. Treatment: Amphotericin B + aggressive surgical debridement. Very high mortality.
PJP (Pneumocystis jirovecii): HIV (CD4 <200) or immunosuppressed. Bilateral ground glass opacities. Diagnosis: Beta-D-glucan, BAL with silver stain or PCR. Treatment: TMP-SMX × 21 days. Add steroids if PaO₂ <70 or A-a gradient >35.`},

{topic:"Tuberculosis",chapter:"Infectious Disease",page:"p.113",content:`LATENT TB: Positive TB test (PPD ≥5/10/15mm depending on risk, or positive IGRA) without active disease. Treatment: Rifampin × 4 months (preferred) or isoniazid × 9 months (add pyridoxine/B6 to prevent neuropathy). 3HP regimen: INH + rifapentine weekly × 12 weeks.
ACTIVE TB: Cough >3 weeks, hemoptysis, fevers, night sweats, weight loss. CXR: Upper lobe cavitary lesion, hilar lymphadenopathy. Miliary TB: Diffuse small nodules (disseminated).
Diagnosis: Sputum AFB smear and culture (gold standard), nucleic acid amplification test (rapid). 3 sputum specimens.
Treatment (RIPE × 2 months, then RI × 4 months): Rifampin + Isoniazid + Pyrazinamide + Ethambutol. Directly observed therapy (DOT).
Drug side effects: Rifampin (orange secretions, hepatotoxicity, CYP inducer), INH (hepatotoxicity, peripheral neuropathy — give B6), Pyrazinamide (hepatotoxicity, hyperuricemia), Ethambutol (optic neuritis — check visual acuity).
AIRBORNE PRECAUTIONS: Negative pressure room, N95 respirator. Remove from isolation after clinical improvement + 3 negative sputum AFB smears ≥8h apart.`},

{topic:"HIV/AIDS & Opportunistic Infections",chapter:"Infectious Disease",page:"p.114",content:`DIAGNOSIS: HIV-1/2 antigen/antibody combo test → confirmatory HIV-1/2 differentiation assay. Check viral load and CD4.
TREATMENT: ART for ALL patients regardless of CD4. Goal: Undetectable viral load (<50 copies). Typical regimen: 2 NRTIs (tenofovir + emtricitabine) + 1 integrase inhibitor (dolutegravir or bictegravir). Consider resistance testing before starting.
U=U: Undetectable = Untransmittable.

OI PROPHYLAXIS BY CD4 COUNT
CD4 <200: PJP prophylaxis (TMP-SMX DS daily or dapsone)
CD4 <100: Toxoplasmosis prophylaxis (TMP-SMX covers both PJP and toxo)
CD4 <50: MAC prophylaxis (azithromycin 1200mg weekly)

KEY OPPORTUNISTIC INFECTIONS
PJP: CD4 <200. Bilateral GGO, elevated LDH, beta-D-glucan. TMP-SMX ± steroids.
Toxoplasmosis: CD4 <100. Ring-enhancing brain lesions. TMP-SMX or pyrimethamine + sulfadiazine.
Cryptococcal meningitis: CD4 <100. See Fungal Infections section.
CMV: CD4 <50. Retinitis, colitis, esophagitis. Treatment: Ganciclovir or valganciclovir.
Kaposi sarcoma: HHV-8. Violaceous skin lesions. Treatment: ART ± chemo.
CNS Lymphoma: EBV-associated. Single ring-enhancing lesion. Biopsy to differentiate from toxo.`},

{topic:"Transplant ID",chapter:"Infectious Disease",page:"p.115",content:`TIMELINE OF INFECTIONS POST-TRANSPLANT
Month 0-1: Nosocomial infections (wound, catheter, C. diff), donor-derived infections, HSV reactivation
Month 1-6: HIGHEST RISK period. CMV (most common), EBV, BK virus, PJP, Aspergillus, Listeria, Nocardia, TB reactivation
Month 6+: Community-acquired infections, late viral reactivation (CMV, VZV), PTLD (EBV-driven lymphoma)

PROPHYLAXIS REGIMENS (typical solid organ transplant)
- PJP: TMP-SMX (lifelong in many centers, minimum 6-12 months)
- CMV: Valganciclovir (duration depends on donor/recipient CMV status — D+/R- highest risk, usually 6 months)
- HSV/VZV: Acyclovir or valacyclovir
- Fungal: Varies by organ (liver/lung higher fungal risk — fluconazole or voriconazole)

CMV DISEASE: Fever, leukopenia, hepatitis, colitis, pneumonitis. Diagnose with CMV PCR (viral load). Treat with IV ganciclovir → PO valganciclovir.
BK VIRUS: Primarily kidney transplant → nephropathy. Diagnose with BK PCR. Treatment: Reduce immunosuppression (no antiviral available).`},

{topic:"STIs & Travel Medicine",chapter:"Infectious Disease",page:"p.116",content:`SEXUALLY TRANSMITTED INFECTIONS
Gonorrhea/Chlamydia: Ceftriaxone 500mg IM × 1 (GC) + doxycycline 100mg BID × 7 days (CT). Always treat both if one suspected.
Syphilis: Primary (chancre), secondary (rash, condylomata), latent, tertiary (gummas, CV, neuro). Diagnosis: RPR/VDRL screen → FTA-ABS confirm. Treatment: Penicillin G (IM benzathine for early, IV aqueous for neurosyphilis). Jarisch-Herxheimer reaction possible.
HSV: Painful vesicular/ulcerative lesions. Diagnose with PCR or culture. Treat: Acyclovir or valacyclovir. Suppressive therapy for frequent recurrences.
HIV PEP: Start within 72h of exposure. Tenofovir/emtricitabine + dolutegravir × 28 days.
HIV PrEP: Tenofovir/emtricitabine daily or cabotegravir IM every 2 months.

TRAVEL MEDICINE PEARLS
Malaria prophylaxis: Atovaquone-proguanil, doxycycline, or mefloquine (depending on region)
Traveler's diarrhea: Usually self-limited. Azithromycin for moderate-severe. Loperamide for symptom relief (avoid if bloody).
Typhoid: Fever, relative bradycardia, hepatosplenomegaly, "rose spots." Blood cultures. Treat: Azithromycin or fluoroquinolone.
Dengue: Fever, retro-orbital headache, rash, thrombocytopenia. Supportive care. Avoid NSAIDs (bleeding risk).`},

{topic:"Tick-Borne Diseases",chapter:"Infectious Disease",page:"p.117",content:`LYME DISEASE (Borrelia burgdorferi, Ixodes tick): Early: Erythema migrans (expanding bull's-eye rash). Disseminated: Multiple EM lesions, facial palsy, heart block, meningitis. Late: Arthritis. Treatment: Doxycycline 100mg BID × 10-21 days (or amoxicillin, cefuroxime if doxy contraindicated). IV ceftriaxone for cardiac or CNS involvement.
ANAPLASMOSIS (Anaplasma phagocytophilum): Fever, headache, myalgia, leukopenia, thrombocytopenia, elevated LFTs. Morulae in neutrophils on smear. Treatment: Doxycycline.
BABESIOSIS (Babesia microti): Fever, hemolytic anemia, thrombocytopenia. Maltese cross on blood smear. Treatment: Atovaquone + azithromycin (mild) or clindamycin + quinine (severe). Exchange transfusion if severe parasitemia.
ROCKY MOUNTAIN SPOTTED FEVER (Rickettsia rickettsii): Fever, headache, rash (starts wrists/ankles → spreads centrally, petechial). Can be fatal if untreated. Treatment: Doxycycline immediately (do NOT wait for confirmation).
EHRLICHIOSIS: Similar to anaplasmosis but morulae in monocytes. Treatment: Doxycycline.`},

{topic:"Mpox & Ectoparasites",chapter:"Infectious Disease",page:"p.118",content:`MPOX: Orthopoxvirus. Vesicular/pustular lesions (often umbilicated), lymphadenopathy, fever. Spread by close physical/sexual contact. Diagnosis: Lesion PCR. Treatment: Supportive for mild cases. Tecovirimat (TPOXX) for severe or immunocompromised. Vaccination: JYNNEOS (pre/post-exposure).
SCABIES (Sarcoptes scabiei): Intense pruritus (worse at night), burrows in web spaces, wrists, elbows, genitalia. Diagnosis: Clinical, skin scraping for mites/eggs. Treatment: Permethrin 5% cream (apply neck-down, wash off 8-14h, repeat day 7-14). Ivermectin PO for crusted scabies or treatment failure. Treat all close contacts and household members. Wash all bedding/clothing in hot water.
LICE: Head, body, pubic. Diagnosis: Visualize nits/lice. Treatment: Permethrin or malathion (head lice), ivermectin for resistant cases. Body lice: Treat clothing/bedding (vector).
BED BUGS: Pruritic papules in linear clusters ("breakfast, lunch, dinner"). No known disease transmission. Treatment: Symptomatic (antihistamines, topical steroids). Pest control for eradication.`},

{topic:"Fever of Unknown Origin",chapter:"Infectious Disease",page:"p.119",content:`CLASSIC DEFINITION: Temperature >38.3°C on multiple occasions, duration >3 weeks, no diagnosis after 1 week of intelligent investigation
TOP CATEGORIES: Infection (25-30%), malignancy (15-20%), autoimmune/inflammatory (15-20%), miscellaneous (10-15%), undiagnosed (15-25%)

COMMON CAUSES
Infections: Endocarditis, TB, intra-abdominal abscess, osteomyelitis, EBV/CMV, HIV
Malignancy: Lymphoma (#1 cancer cause of FUO), renal cell carcinoma, hepatocellular carcinoma, atrial myxoma
Autoimmune: Adult-onset Still disease, giant cell arteritis/PMR, SLE, vasculitis, sarcoidosis
Other: Drug fever, DVT/PE, thyroiditis, factitious fever, familial Mediterranean fever

WORKUP APPROACH
1. Thorough history (travel, exposures, medications, sexual history, family history)
2. Comprehensive labs: CBC with diff, CMP, ESR/CRP, blood cultures, UA/culture, LDH, ferritin, peripheral smear
3. Imaging: CT chest/abdomen/pelvis with contrast, TTE/TEE if endocarditis suspected
4. Advanced: FDG-PET/CT (excellent for localizing occult infection/malignancy/inflammation), temporal artery biopsy if GCA suspected, bone marrow biopsy, lymph node biopsy

DRUG FEVER: Diagnosis of exclusion. Common culprits: Antibiotics (beta-lactams, sulfonamides), anticonvulsants, allopurinol, heparin. Usually resolves 48-72h after drug discontinuation.`},

{topic:"Endemic & Region-Specific Infections",chapter:"Infectious Disease",page:"p.120",content:`This section covers institution-specific infection patterns and endemic infections. Key principles for any institution:
- Know your local antibiogram (resistance patterns guide empiric therapy)
- Endemic fungi by region: Histoplasmosis (Ohio/Mississippi River Valley), Coccidioidomycosis (Southwest US), Blastomycosis (Great Lakes, Ohio/Mississippi)
- Consider travel/exposure history for every patient with unexplained fever
- Strongyloides screening before immunosuppression (risk of hyperinfection with steroids)`},

{topic:"Infection Control",chapter:"Infectious Disease",page:"p.121",content:`STANDARD PRECAUTIONS: Hand hygiene, gloves, gown when exposure to body fluids anticipated. Apply to ALL patient encounters.
CONTACT PRECAUTIONS: Gown + gloves for room entry. Indications: MRSA, VRE, C. diff, scabies, resistant gram-negatives.
DROPLET PRECAUTIONS: Surgical mask within 6 feet. Indications: Influenza, pertussis, meningococcal disease, mumps, rubella, group A strep pharyngitis.
AIRBORNE PRECAUTIONS: N95 respirator + negative pressure room. Indications: TB (confirmed/suspected), measles, varicella/disseminated zoster, COVID-19 (during aerosol-generating procedures).

HAND HYGIENE: Alcohol-based hand rub (preferred) for most situations. Soap and water required for: C. diff (spores resistant to alcohol), visibly soiled hands, after using restroom.

NEEDLE STICK PROTOCOL: Wash immediately, report to occupational health, baseline labs (HIV, HBV, HCV for source and exposed). HIV PEP within 72 hours if high risk. HBV: Assess vaccination status/titer.`},

{topic:"Antimicrobial Dosing",chapter:"Infectious Disease",page:"p.122",content:`RENAL-DOSE ADJUSTED DRUGS
Vancomycin: AUC/MIC-guided dosing preferred over trough-based. Target AUC 400-600. Load 20-25 mg/kg, then adjust per levels and renal function.
Aminoglycosides: Extended-interval (once daily) preferred. Dose based on IBW. Monitor levels.
TMP-SMX: Reduce dose when CrCl <30. Full dose for PJP treatment regardless.
Piperacillin-tazobactam: Extended infusion (4h) improves outcomes. Adjust frequency for renal impairment.
Meropenem: Extend infusion to 3h. Reduce dose/frequency for CrCl <50.
Cefepime: Dose-reduce for renal impairment (neurotoxicity risk, especially in elderly).

HEPATICALLY-CLEARED DRUGS: Metronidazole, rifampin, clindamycin, macrolides — use caution in liver disease.

KEY INTERACTIONS
Rifampin: Potent CYP inducer — reduces levels of warfarin, tacrolimus, OCPs, DOACs, protease inhibitors. Check ALL interactions.
Fluoroquinolones: Chelated by cations (Ca, Mg, Fe, Al) — separate dosing by 2h. QT prolongation risk.
Linezolid: MAO inhibitor — serotonin syndrome risk with SSRIs/SNRIs. Thrombocytopenia with >2 weeks use.
Azole antifungals: CYP inhibitors — increase tacrolimus, warfarin, statins. Voriconazole: Visual disturbances, hepatotoxicity, photosensitivity.`},

// ═══════════════════════════════════════
// HEMATOLOGY
// ═══════════════════════════════════════

{topic:"Pancytopenia & Anemia",chapter:"Hematology",page:"p.123",content:`ANEMIA CLASSIFICATION BY MCV
Microcytic (<80): Iron deficiency (#1), thalassemia, anemia of chronic disease, sideroblastic, lead poisoning
Normocytic (80-100): Acute blood loss, anemia of chronic disease, renal disease, mixed deficiency, hemolysis, bone marrow failure
Macrocytic (>100): B12/folate deficiency, MDS, liver disease, hypothyroidism, medications (MTX, hydroxyurea, AZT), reticulocytosis

IRON STUDIES: Iron deficiency: Low ferritin (<30), low iron, high TIBC. Chronic disease: Low iron, low TIBC, normal/high ferritin.
B12 DEFICIENCY: Neurologic symptoms (neuropathy, subacute combined degeneration), megaloblastic anemia. Check methylmalonic acid (elevated = B12 deficiency even if B12 borderline).

HEMOLYTIC ANEMIA: Elevated LDH, low haptoglobin, elevated indirect bilirubin, reticulocytosis
Coombs positive (autoimmune): Warm AIHA (IgG, treat with steroids), Cold AIHA (IgM, treat underlying, avoid cold)
Coombs negative: Microangiopathic (TTP, HUS, DIC — schistocytes on smear), mechanical (prosthetic valve), G6PD, hereditary spherocytosis, PNH, sickle cell

PANCYTOPENIA: Aplastic anemia, MDS, leukemia, B12/folate deficiency, hypersplenism, infections (HIV, parvovirus B19), medications, bone marrow infiltration. Bone marrow biopsy often needed.`},

{topic:"Sickle Cell Disease",chapter:"Hematology",page:"p.124",content:`ACUTE VASO-OCCLUSIVE CRISIS (VOC): Most common reason for hospitalization. Severe pain. Treatment: Aggressive pain management (IV opioids, PCA if needed), IV fluids (avoid overhydration), incentive spirometry (prevent ACS), transfuse ONLY if Hgb drops significantly below baseline.
ACUTE CHEST SYNDROME: New pulmonary infiltrate + respiratory symptoms. #1 cause of death. Treatment: Antibiotics (ceftriaxone + azithromycin), supplemental O₂, simple or exchange transfusion, bronchodilators.
STROKE: Children > adults. CT/MRI urgently. Treatment: Exchange transfusion (target HbS <30%).
APLASTIC CRISIS: Parvovirus B19 infection → reticulocyte count drops to near zero. Self-limited but may need transfusion.
SPLENIC SEQUESTRATION: Rapid splenic enlargement, falling Hgb, thrombocytopenia. Emergency transfusion.

CHRONIC MANAGEMENT: Hydroxyurea (increases HbF, reduces crises/ACS/mortality), vaccinations (pneumococcal, meningococcal — functional asplenia), folic acid, screening (TCD in kids, retinal exams). Newer agents: Voxelotor, crizanlizumab, L-glutamine. Gene therapy emerging (lovotibeglogene).`},

{topic:"Thrombocytopenia",chapter:"Hematology",page:"p.125",content:`APPROACH: Confirm on peripheral smear (rule out pseudothrombocytopenia from clumping). Check for schistocytes (TMA).

CAUSES
Decreased production: Bone marrow failure (aplastic anemia, MDS, leukemia), B12/folate deficiency, medications (chemotherapy, linezolid, valproic acid), infections (HIV, HCV), alcohol
Increased destruction: ITP, TTP, HUS, DIC, HIT, antiphospholipid syndrome, infections, medications (heparin, quinine, vancomycin)
Sequestration: Hypersplenism (cirrhosis, portal HTN)
Dilutional: Massive transfusion

KEY CONDITIONS
ITP: Isolated thrombocytopenia, diagnosis of exclusion. Treatment: Steroids first-line, IVIG if severe bleeding, rituximab, TPO-RA (romiplostim, eltrombopag).
TTP: Pentad (rarely all present): Thrombocytopenia, MAHA, AKI, neuro symptoms, fever. ADAMTS13 activity <10%. EMERGENCY: Plasma exchange (do NOT delay), steroids, caplacizumab.
HIT: Platelet drop >50% or to <150K, 5-10 days after heparin exposure (or sooner if prior exposure). 4T score for pretest probability. Confirm with anti-PF4 antibody → serotonin release assay. STOP all heparin, start non-heparin anticoagulant (argatroban, bivalirudin). Do NOT transfuse platelets.
DIC: Elevated D-dimer, elevated PT/PTT, low fibrinogen, thrombocytopenia, schistocytes. Treat underlying cause. Transfuse products if bleeding.`},

{topic:"Eosinophilia",chapter:"Hematology",page:"p.126",content:`DEFINITION: >500/μL (mild 500-1500, moderate 1500-5000, severe >5000)
CAUSES (NAACP): Neoplasm, Addison's, Allergy/atopy, Collagen vascular disease, Parasites
Additional: Drug reaction (DRESS), eosinophilic GI disorders, EGPA (Churg-Strauss), hypereosinophilic syndrome, ABPA
WORKUP: CBC with diff, peripheral smear, IgE, stool O&P, HIV, tryptase, B12, bone marrow biopsy if unexplained
Hypereosinophilic syndrome (HES): Persistent eosinophilia >1500 + end-organ damage (cardiac, pulmonary, neurologic, skin). Treatment: Steroids, imatinib (if FIP1L1-PDGFRA fusion), mepolizumab.`},

{topic:"Coagulation Disorders",chapter:"Hematology",page:"p.127",content:`HYPERCOAGULABLE STATES
Inherited: Factor V Leiden (#1), prothrombin G20210A mutation (#2), protein C/S deficiency, antithrombin III deficiency
Acquired: Antiphospholipid syndrome (lupus anticoagulant, anticardiolipin Ab, anti-β2GP1), malignancy, pregnancy/OCPs, surgery/immobilization, HIT, nephrotic syndrome, myeloproliferative neoplasms
When to test: Unprovoked VTE + young age, recurrent VTE, strong family history, unusual site (splanchnic, cerebral veins)
Testing caveats: Do NOT test during acute event or on anticoagulation (unreliable results for most assays). Factor V Leiden, prothrombin mutation, and antiphospholipid antibodies can be tested anytime.

BLEEDING DISORDERS
Platelet disorders (primary hemostasis): Mucocutaneous bleeding (petechiae, epistaxis, gingival bleeding). Think: Thrombocytopenia, von Willebrand disease, platelet function defects.
Coagulation factor disorders (secondary hemostasis): Deep tissue/joint bleeding, large hematomas, prolonged bleeding after procedures. Think: Hemophilia A (factor VIII), Hemophilia B (factor IX), acquired inhibitors.
von Willebrand Disease: Most common inherited bleeding disorder. Types 1/2/3. Diagnosis: vWF antigen, vWF activity, factor VIII. Treatment: DDAVP (type 1), vWF-containing concentrates.`},

{topic:"Anticoagulation Agents",chapter:"Hematology",page:"p.128",content:`HEPARINS
UFH: IV, short half-life (1-2h), monitor aPTT (or anti-Xa). Reversed by protamine. Use in ACS, PE, DVT, dialysis, bridge.
LMWH (enoxaparin): SQ, longer half-life, more predictable. Monitor anti-Xa in obesity/renal failure. Partially reversed by protamine. Avoid if CrCl <30.

DIRECT ORAL ANTICOAGULANTS (DOACs)
Apixaban (Eliquis): Factor Xa inhibitor. BID dosing. Minimal renal clearance. First-line for most indications. Reversal: Andexanet alfa.
Rivaroxaban (Xarelto): Factor Xa inhibitor. Daily dosing (with food for absorption). Reversal: Andexanet alfa.
Dabigatran (Pradaxa): Direct thrombin inhibitor. BID dosing. Most renally cleared. Reversal: Idarucizumab (Praxbind).
Edoxaban (Savaysa): Factor Xa inhibitor. Daily dosing. Avoid if CrCl >95 (paradoxically less effective).

WARFARIN: Vitamin K antagonist. Monitor INR (target 2-3 for most, 2.5-3.5 for mechanical mitral valve). Reversed by vitamin K (slow) or 4-factor PCC (rapid). Many drug/food interactions. Bridge with heparin when starting.

DOACs vs WARFARIN: DOACs preferred for non-valvular AF and VTE. Warfarin still required for mechanical valves and antiphospholipid syndrome.`},

{topic:"Anticoagulation Management",chapter:"Hematology",page:"p.129",content:`PERIOPERATIVE MANAGEMENT
Low bleed risk procedure: Continue anticoagulation or brief hold
High bleed risk: Hold DOAC 2-3 days before (longer if renal impairment). Hold warfarin 5 days before.
Bridging (heparin while warfarin held): Only for HIGH thromboembolic risk (mechanical mitral valve, recent VTE <3 months, prior VTE on warfarin). Most AF patients do NOT need bridging (BRIDGE trial).

REVERSAL
Warfarin: Vitamin K 10mg IV (takes 12-24h), 4-factor PCC (immediate, dose by INR: 25-50 units/kg)
Dabigatran: Idarucizumab (Praxbind) 5g IV
Xa inhibitors: Andexanet alfa (Andexxa) if available. Otherwise: 4-factor PCC 50 units/kg.
UFH: Protamine 1mg per 100 units heparin (last 2-3h), max 50mg.

SUPRATHERAPEUTIC INR (on warfarin)
INR 4.5-10, no bleeding: Hold warfarin, monitor, ± low-dose vitamin K PO
INR >10, no bleeding: Hold warfarin + vitamin K 2.5-5mg PO
Major bleeding at any INR: 4-factor PCC + vitamin K 10mg IV + hold warfarin`},

{topic:"Transfusion Medicine",chapter:"Hematology",page:"p.130",content:`TRANSFUSION THRESHOLDS
RBCs: Hgb <7 (most patients, TRICC trial). Hgb <8 (ACS, symptomatic cardiac disease, active hemorrhage). Each unit raises Hgb ~1 g/dL.
Platelets: <10K (prophylactic, no bleeding). <50K (active bleeding, pre-procedure). <100K (neurosurgery, ocular surgery). 
FFP: INR >1.5-2.0 with active bleeding or pre-procedure. Dose: 10-15 mL/kg. Contains all clotting factors.
Cryoprecipitate: Fibrinogen <100-150 (active bleeding) or <200 (DIC). Contains fibrinogen, factor VIII, vWF, factor XIII. Each unit raises fibrinogen ~5-10 mg/dL.
Prothrombin Complex Concentrate (PCC): For urgent warfarin reversal. Contains factors II, VII, IX, X.

MASSIVE TRANSFUSION PROTOCOL: >10 units pRBC in 24h. Balanced resuscitation: 1:1:1 ratio (RBC:FFP:platelets). Give calcium (citrate in blood products chelates Ca). Monitor for hypothermia, hyperkalemia.
TYPE AND SCREEN vs TYPE AND CROSS: Screen identifies antibodies. Cross-match confirms compatibility with specific units. Emergency: O-negative blood (universal donor).`},

{topic:"Transfusion Reactions",chapter:"Hematology",page:"p.131",content:`FEBRILE NON-HEMOLYTIC: Most common reaction. Fever, chills. Cytokine release from stored WBCs. Treatment: Antipyretics. Prevention: Leukoreduced blood products.
ALLERGIC: Urticaria, pruritus (mild) to anaphylaxis (severe — IgA-deficient patients receiving IgA-containing products). Mild: Antihistamine, can resume. Severe: Stop transfusion, epinephrine, support.
ACUTE HEMOLYTIC: ABO incompatibility. Fever, flank pain, dark urine, DIC, renal failure. STOP TRANSFUSION IMMEDIATELY. Send blood bank sample, direct Coombs, free hemoglobin. Aggressive IV fluids to protect kidneys.
TRANSFUSION-RELATED ACUTE LUNG INJURY (TRALI): Non-cardiogenic pulmonary edema within 6h. Bilateral infiltrates, hypoxemia. Stop transfusion. Supportive care (may need intubation). NOT fluid overload.
TRANSFUSION-ASSOCIATED CIRCULATORY OVERLOAD (TACO): Volume overload in at-risk patients (HF, renal failure). Dyspnea, HTN, elevated BNP. Treatment: Diuresis, slow transfusion rate. Prevention: Furosemide with transfusion in at-risk patients.
DELAYED HEMOLYTIC: Days to weeks post-transfusion. Anamnestic antibody response. Gradual Hgb decline, positive direct Coombs. Usually mild.`},

{topic:"Peripheral Smear Interpretation",chapter:"Hematology",page:"p.132",content:`KEY FINDINGS
Schistocytes (helmet cells, fragments): TTP, HUS, DIC, MAHA, mechanical valve hemolysis, malignant HTN
Spherocytes: Hereditary spherocytosis, warm AIHA, burns
Target cells: Thalassemia, liver disease, hemoglobin C, iron deficiency, splenectomy
Sickle cells (drepanocytes): Sickle cell disease
Tear drop cells (dacrocytes): Myelofibrosis, bone marrow infiltration
Howell-Jolly bodies: Asplenia (functional or surgical)
Basophilic stippling: Lead poisoning, thalassemia, sideroblastic anemia, MDS
Rouleaux formation: Multiple myeloma, chronic inflammation (elevated immunoglobulins/fibrinogen)
Bite cells: G6PD deficiency (oxidative hemolysis — Heinz bodies with special stain)
Auer rods: AML (pathognomonic)
Hypersegmented neutrophils (≥5 lobes): B12 or folate deficiency
Toxic granulation/Dohle bodies: Infection, sepsis
Smudge cells: CLL
Atypical lymphocytes: EBV (mono), CMV, HIV, other viral infections`},

// ═══════════════════════════════════════
// ONCOLOGY
// ═══════════════════════════════════════

{topic:"Acute Leukemia",chapter:"Oncology",page:"p.133",content:`AML: Myeloid blasts ≥20% in bone marrow. Auer rods pathognomonic. Most common adult acute leukemia. Subtypes: APL (t(15;17), PML-RARA — treat with ATRA + arsenic trioxide, DIC risk), CBF AML (favorable), FLT3-mutated (poor prognosis, add midostaurin). Treatment: Intensive induction (7+3: cytarabine + daunorubicin) → consolidation ± transplant. Low-intensity: Venetoclax + azacitidine for unfit patients.
ALL: Lymphoid blasts ≥20%. More common in children. Ph+ ALL (BCR-ABL): Add TKI (imatinib/dasatinib). Treatment: Multi-agent chemotherapy (induction → consolidation → maintenance × 2-3 years). CNS prophylaxis (intrathecal chemotherapy).
TUMOR LYSIS SYNDROME PREVENTION: Aggressive hydration, allopurinol (preventive) or rasburicase (if high uric acid/high tumor burden). Monitor K, Ca, phosphorus, uric acid, creatinine q6-8h.`},

{topic:"Lymphadenopathy & Lymphoma",chapter:"Oncology",page:"p.134",content:`LYMPHADENOPATHY WORKUP: If >1cm, persistent >4 weeks, hard/fixed, supraclavicular → biopsy (excisional preferred, NOT FNA)
HODGKIN LYMPHOMA: Bimodal (20s and >60). Reed-Sternberg cells. Contiguous spread. B symptoms (fever, night sweats, >10% weight loss). Treatment: ABVD chemotherapy ± radiation. Highly curable (>80% cure rate).
NON-HODGKIN LYMPHOMA
Aggressive: DLBCL (#1 adult NHL). Treatment: R-CHOP (rituximab + cyclophosphamide, doxorubicin, vincristine, prednisone). ~60-70% cure rate. Burkitt lymphoma: Highly aggressive, "starry sky" pattern, associated with EBV/HIV. Intensive chemotherapy.
Indolent: Follicular lymphoma (#2 NHL). Often watch and wait if asymptomatic. Treatment when symptomatic: Rituximab-based regimens. Not curable with conventional therapy, but long survival. Marginal zone lymphoma, CLL/SLL.
MANTLE CELL LYMPHOMA: Intermediate aggressiveness. t(11;14), cyclin D1 overexpression. Treatment: Aggressive chemotherapy, consider BTK inhibitors (ibrutinib).`},

{topic:"Plasma Cell Disorders",chapter:"Oncology",page:"p.135",content:`MGUS: M-protein <3g/dL, clonal plasma cells <10%, no end-organ damage. Risk of progression to myeloma: ~1%/year. Monitor annually.
SMOLDERING MYELOMA: M-protein ≥3g/dL or plasma cells 10-60%, but no end-organ damage (no CRAB criteria). Higher risk of progression. Close monitoring, consider early treatment in high-risk.
MULTIPLE MYELOMA: Clonal plasma cells ≥10% + end-organ damage (CRAB: Calcium elevation, Renal insufficiency, Anemia, Bone lesions) OR biomarkers of malignancy (≥60% plasma cells, involved/uninvolved FLC ratio ≥100, >1 focal lesion on MRI)
Workup: SPEP, UPEP, serum FLC, bone marrow biopsy, skeletal survey or PET/CT, CBC, CMP, LDH, β2-microglobulin
Treatment: Triplet therapy (lenalidomide + bortezomib + dexamethasone), then autologous stem cell transplant if eligible, then maintenance lenalidomide.
AL AMYLOIDOSIS: Misfolded light chains deposit in organs. Cardiac (HFpEF, low voltage ECG), renal (nephrotic syndrome), neuropathy, hepatomegaly. Congo red stain (apple-green birefringence). Treatment: Target underlying plasma cell clone.`},

{topic:"MDS & MPN",chapter:"Oncology",page:"p.136",content:`MDS (Myelodysplastic Syndromes): Clonal bone marrow disorder with ineffective hematopoiesis → cytopenias. Often elderly. Risk of AML transformation. Diagnosis: Bone marrow biopsy showing dysplasia ± ring sideroblasts ± increased blasts. IPSS-R scoring guides prognosis. Treatment: Lower-risk: ESAs, luspatercept, lenalidomide (del(5q)). Higher-risk: Azacitidine, allogeneic transplant if eligible.

MYELOPROLIFERATIVE NEOPLASMS
Polycythemia Vera: JAK2 mutation (>95%). Elevated Hgb/Hct, splenomegaly, pruritus (especially after hot shower), erythromelalgia. Risk: Thrombosis. Treatment: Phlebotomy (target Hct <45%), aspirin, hydroxyurea if high risk.
Essential Thrombocytosis: Elevated platelets (>450K). JAK2, CALR, or MPL mutations. Risk: Thrombosis AND bleeding (extreme thrombocytosis >1M). Treatment: Aspirin, hydroxyurea if high risk.
Primary Myelofibrosis: Bone marrow fibrosis, tear-drop cells, leukoerythroblastic smear, massive splenomegaly. JAK2/CALR/MPL mutations. Treatment: Ruxolitinib (JAK inhibitor) for symptoms/splenomegaly. Allogeneic transplant for eligible patients (only curative option).
CML: BCR-ABL (Philadelphia chromosome). Elevated WBC with left shift, basophilia. Treatment: TKIs (imatinib, dasatinib, nilotinib). Excellent prognosis with TKI therapy.`},

{topic:"Hematopoietic Stem Cell Transplantation",chapter:"Oncology",page:"p.137",content:`AUTOLOGOUS: Patient's own stem cells. Used for: Multiple myeloma, relapsed lymphoma. No GVHD risk. Higher relapse risk.
ALLOGENEIC: Donor stem cells. Used for: AML, ALL, MDS, aplastic anemia, MPN. Graft-versus-leukemia effect reduces relapse. Risk: GVHD, graft failure, infections.
Conditioning: Myeloablative (intensive, younger patients) vs reduced-intensity (older, comorbidities)

GVHD (Graft-vs-Host Disease)
Acute (typically <100 days): Skin (rash), liver (elevated bilirubin), GI (diarrhea). Treatment: Steroids first-line, ruxolitinib for steroid-refractory.
Chronic (>100 days): Skin (sclerosis), eyes (dry eyes), mouth (lichenoid changes), lungs (bronchiolitis obliterans), liver. Treatment: Steroids, ibrutinib, ruxolitinib, belumosudil.

KEY COMPLICATIONS
Day 0-30: Neutropenic infections, mucositis, engraftment syndrome, veno-occlusive disease (SOS)
Day 30-100: CMV reactivation, acute GVHD, graft failure
Day 100+: Chronic GVHD, late infections (VZV, encapsulated bacteria), secondary malignancies`},

{topic:"Hematopoietic Cell Transplantation",chapter:"Oncology",page:"p.138",content:`Refer to Hematopoietic Stem Cell Transplantation section for comprehensive coverage of autologous and allogeneic transplant, conditioning regimens, GVHD, and complications.`},

{topic:"CAR T cell Therapy",chapter:"Oncology",page:"p.139",content:`MECHANISM: Patient's T cells are collected, genetically modified to express chimeric antigen receptor (CAR) targeting tumor antigens (e.g., CD19), expanded, and infused back.
INDICATIONS: Relapsed/refractory DLBCL, ALL, mantle cell lymphoma, follicular lymphoma, multiple myeloma (BCMA-targeted)
Products: Axicabtagene ciloleucel, tisagenlecleucel, lisocabtagene maraleucel, idecabtagene vicleucel, ciltacabtagene autoleucel

KEY TOXICITIES
Cytokine Release Syndrome (CRS): Fever, hypotension, hypoxia, organ dysfunction. Grading 1-4. Treatment: Tocilizumab (IL-6 receptor antagonist) ± steroids.
ICANS (Immune effector Cell-Associated Neurotoxicity): Confusion, tremor, aphasia, seizures, cerebral edema. Treatment: Steroids, ± tocilizumab.
Prolonged cytopenias, hypogammaglobulinemia (B-cell aplasia with anti-CD19 CARs → monthly IVIG), secondary HLH/MAS.

MONITORING: ICU-level monitoring for first 7-10 days. CRP and ferritin trending. Neuro checks. Tocilizumab at bedside.`},

{topic:"Solid Organ Malignancies",chapter:"Oncology",page:"p.140",content:`LUNG CANCER: #1 cancer killer. Screening: Low-dose CT annually for age 50-80 with ≥20 pack-year history. NSCLC (85%): Surgery if early stage, chemo ± immunotherapy ± radiation for advanced. Test for driver mutations (EGFR, ALK, ROS1, BRAF, KRAS G12C) and PD-L1. SCLC (15%): Limited stage: Chemoradiation + PCI. Extensive stage: Chemo + immunotherapy.
BREAST: Screening mammogram every 1-2 years starting age 40-50. Subtypes: ER/PR+, HER2+, triple negative. Treatment guided by subtype and stage.
COLORECTAL: Screening colonoscopy age 45-75. Staging determines surgery ± chemo. Molecular testing: MSI/MMR, RAS, BRAF. Immunotherapy for MSI-H tumors.
PROSTATE: PSA screening shared decision-making age 55-69. Localized: Active surveillance, surgery, or radiation. Advanced: ADT ± novel hormonal agents (enzalutamide, abiraterone) ± chemo.
PANCREATIC: See GI section. RENAL: Often incidental. Small masses: Active surveillance or partial nephrectomy. Advanced: Immunotherapy + TKI (KEYNOTE-426).`},

{topic:"Immune Checkpoint Inhibitors",chapter:"Oncology",page:"p.141",content:`AGENTS: Anti-PD-1 (pembrolizumab, nivolumab), anti-PD-L1 (atezolizumab, durvalumab, avelumab), anti-CTLA-4 (ipilimumab)
MECHANISM: Remove T-cell inhibition → enhanced anti-tumor immunity

IMMUNE-RELATED ADVERSE EVENTS (irAEs) — can affect any organ
Skin (most common): Rash, pruritus, vitiligo. Treatment: Topical steroids, antihistamines.
GI: Diarrhea/colitis (especially with ipilimumab). Grade 1: Loperamide. Grade 2+: Steroids. Refractory: Infliximab or vedolizumab.
Liver: Hepatitis (elevated LFTs). Hold ICI, steroids. Refractory: Mycophenolate (avoid infliximab).
Endocrine: Thyroiditis (hyper → hypo), hypophysitis, adrenal insufficiency, T1DM. May require lifelong hormone replacement.
Pneumonitis: Dyspnea, cough, ground glass on CT. Hold ICI, steroids ± additional immunosuppression.
Myocarditis: RARE but high mortality. Troponin elevation, arrhythmias, HF. High-dose steroids, may need additional agents.
Neurologic: Myasthenia gravis, GBS, encephalitis.

GENERAL PRINCIPLE: Grade 1 — monitor closely. Grade 2 — hold ICI, consider steroids. Grade 3-4 — discontinue ICI, high-dose steroids (prednisone 1-2 mg/kg). Endocrine irAEs often permanent; others may resolve.`},

{topic:"Oncologic Emergencies",chapter:"Oncology",page:"p.142",content:`TUMOR LYSIS SYNDROME: Massive cell lysis → hyperkalemia, hyperphosphatemia, hypocalcemia, hyperuricemia, AKI. Prevention: Hydration, allopurinol. Treatment: Rasburicase (breaks down uric acid), correct electrolytes, dialysis if needed.
HYPERCALCEMIA OF MALIGNANCY: PTHrP (squamous, renal), bone metastases, lymphoma (calcitriol). Treatment: IV NS resuscitation, calcitonin (rapid but transient), zoledronic acid or denosumab (takes 2-4 days).
SUPERIOR VENA CAVA SYNDROME: Facial/upper extremity edema, dyspnea, dilated neck/chest veins. Causes: Lung cancer, lymphoma, mediastinal masses, thrombosis. Diagnosis: CT with contrast. Treatment: Treat underlying malignancy, stent if severe, steroids if lymphoma.
MALIGNANT SPINAL CORD COMPRESSION: Back pain, weakness, sensory level, bowel/bladder dysfunction. MRI entire spine. Treatment: Dexamethasone 10mg IV immediately, then radiation ± surgery.
NEUTROPENIC FEVER: See Febrile Neutropenia section.
BRAIN METASTASES: Headache, focal deficits, seizures. MRI brain with contrast. Dexamethasone for edema. Treatment: Surgery, SRS, whole brain radiation depending on number/size.`},

{topic:"Febrile Neutropenia",chapter:"Oncology",page:"p.143",content:`DEFINITION: ANC <500 (or expected to drop <500) + single temperature ≥38.3°C or sustained ≥38.0°C for 1 hour
TIME-CRITICAL: Antibiotics within 1 hour of presentation — each hour of delay increases mortality.
WORKUP: Blood cultures (2 sets, including through central line if present), UA/culture, CXR, CBC, CMP, lactate. Additional cultures based on symptoms.

EMPIRIC THERAPY
Monotherapy: Cefepime (preferred), piperacillin-tazobactam, or meropenem
Add vancomycin if: Hemodynamic instability, skin/soft tissue infection, suspected catheter infection, mucositis, known MRSA colonization
Add antifungals (micafungin or voriconazole) if: Persistent fever >4-7 days despite broad-spectrum antibiotics

RISK STRATIFICATION (MASCC score)
Low risk (MASCC ≥21): Consider outpatient therapy with oral antibiotics (amoxicillin-clavulanate + ciprofloxacin) if: Solid tumor, no comorbidities, expected short duration of neutropenia, reliable patient with close follow-up
High risk: Inpatient IV antibiotics until afebrile + ANC recovery

G-CSF (filgrastim): NOT routinely given for treatment of neutropenic fever. Used for prophylaxis in high-risk chemotherapy regimens.`},

{topic:"Inpatient Leukemia & Lymphoma Regimens",chapter:"Oncology",page:"p.144",content:`Common inpatient chemotherapy regimens and key monitoring:
AML Induction (7+3): Cytarabine continuous infusion × 7 days + daunorubicin × 3 days. Expect prolonged pancytopenia (3-4 weeks). Monitor for tumor lysis, febrile neutropenia, mucositis.
APL (ATRA + ATO): Differentiation syndrome (fever, dyspnea, weight gain, pleural/pericardial effusions) — treat with dexamethasone immediately if suspected.
DLBCL (R-CHOP): Rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone. q21 days × 6 cycles.
Hodgkin (ABVD): Adriamycin (doxorubicin), bleomycin, vinblastine, dacarbazine. Monitor pulmonary function (bleomycin toxicity).
ALL (multi-agent): Prolonged treatment (2-3 years). CNS prophylaxis required.

KEY SIDE EFFECTS BY DRUG CLASS
Anthracyclines (doxorubicin): Cardiotoxicity (cumulative dose-dependent). Monitor EF.
Bleomycin: Pulmonary fibrosis. PFTs before and during treatment.
Vincristine: Peripheral neuropathy, constipation (autonomic).
Cyclophosphamide: Hemorrhagic cystitis (prevent with mesna), SIADH.
Cisplatin: Nephrotoxicity, ototoxicity, neuropathy. Aggressive hydration.
Methotrexate: Mucositis, hepatotoxicity, renal toxicity (high-dose). Leucovorin rescue.`},

// ═══════════════════════════════════════
// ENDOCRINOLOGY
// ═══════════════════════════════════════

{topic:"Outpatient Type 2 Diabetes Mellitus",chapter:"Endocrinology",page:"p.145",content:`DIAGNOSIS: Fasting glucose ≥126, random glucose ≥200 + symptoms, A1c ≥6.5%, or 2h OGTT ≥200. Confirm with repeat testing.
A1c TARGETS: <7% for most adults. <6.5% if low hypoglycemia risk. <8% if elderly, limited life expectancy, or high hypoglycemia risk.

TREATMENT APPROACH (ADA 2024)
1. Lifestyle + Metformin (first-line, unless contraindicated)
2. Add based on comorbidities:
  - ASCVD or high CV risk: GLP-1 RA (semaglutide, liraglutide — LEADER, SUSTAIN-6) or SGLT2i (empagliflozin — EMPA-REG, dapagliflozin)
  - Heart failure: SGLT2 inhibitor (DAPA-HF, EMPEROR)
  - CKD: SGLT2 inhibitor (DAPA-CKD, CREDENCE)
  - Obesity/weight management: GLP-1 RA (semaglutide most effective) or tirzepatide
3. If A1c still above target: Add basal insulin, sulfonylurea, DPP-4i, or TZD
4. Insulin intensification if needed: Basal-bolus or premixed regimens

MONITORING: A1c every 3-6 months. Annual: Eye exam, foot exam, urine albumin-to-creatinine ratio, lipids, renal function.`},

{topic:"Inpatient Diabetes Mellitus Management",chapter:"Endocrinology",page:"p.146",content:`GLUCOSE TARGETS: 140-180 mg/dL for most hospitalized patients (NICE-SUGAR trial). Tighter control (110-140) for selected surgical patients.
INSULIN REGIMEN (basal-bolus preferred over sliding scale alone):
- Basal: Glargine or detemir. Start at 0.2-0.3 units/kg/day (or 50% of home basal dose if eating, 80% if NPO).
- Bolus (nutritional): Rapid-acting (lispro, aspart) before meals. Calculate based on carb intake or fixed doses.
- Correction: Supplemental rapid-acting based on pre-meal glucose. Use institutional sliding scale.

SPECIAL SITUATIONS
NPO: Continue basal insulin (may reduce by 20-50%), hold bolus, use correction scale + D5 or D10 drip.
Steroids: Increase insulin significantly (steroids cause marked hyperglycemia, especially afternoon/evening with morning dosing). Often need NPH or increased basal + bolus.
TPN: Add regular insulin to TPN bag (start ~0.1 unit/mL or based on prior requirements). Separate correction scale.
Tube feeds: Basal insulin + correction. If continuous feeds: Consider NPH q12h or basal + regular q6h.

HYPOGLYCEMIA (<70 mg/dL): PO glucose if able (15-20g fast-acting carb). D50 25g IV if NPO/unable. Glucagon 1mg IM if no IV access. Always identify and address cause.`},

{topic:"DKA/HHS",chapter:"Endocrinology",page:"p.147",content:`DKA: Glucose >250 (can be normal in euglycemic DKA with SGLT2i), pH <7.3, HCO₃ <18, anion gap >12, positive ketones
HHS: Glucose >600, serum osmolality >320, pH >7.3, minimal ketones, profound dehydration

DKA MANAGEMENT
1. Fluids: NS 1-1.5 L/hr × 1-2 hours. Then switch to 1/2 NS 250-500 mL/hr. Switch to D5 1/2 NS when glucose <200.
2. Insulin: Regular insulin drip 0.1-0.14 units/kg/hr (no bolus if K <3.3). Target glucose drop 50-70 mg/dL/hr.
3. Potassium: If K <3.3 → HOLD insulin, replete K aggressively. If K 3.3-5.3 → add 20-40 mEq/L to IVF. If K >5.3 → recheck q2h.
4. Bicarbonate: Only if pH <6.9 (give 100 mEq in 400 mL water + 20 mEq KCl over 2h)
5. Monitor: BMP q2-4h, glucose q1h, AG trending, daily phosphorus

RESOLUTION: Glucose <200 AND ≥2 of: pH >7.3, HCO₃ ≥15, AG ≤12
TRANSITION: Give SC basal insulin 1-2h BEFORE stopping drip. Overlap is critical.

HHS: Focus on aggressive fluid resuscitation (may need 6-9L). Insulin drip at lower rate (0.02-0.05 u/kg/hr). Correct Na (add 1.6 per 100 glucose above 100). Watch for cerebral edema with rapid correction.`},

{topic:"Adrenal Insufficiency",chapter:"Endocrinology",page:"p.148",content:`PRIMARY (Addison's): Adrenal gland destruction. Low cortisol + high ACTH. Causes: Autoimmune (#1 developed world), TB (#1 worldwide), hemorrhage (Waterhouse-Friderichsen in meningococcemia), metastases, medications (ketoconazole, etomidate). Hyponatremia, hyperkalemia, hyperpigmentation.
SECONDARY: Pituitary dysfunction. Low cortisol + low/normal ACTH. #1 cause: Chronic exogenous steroid use → HPA axis suppression. Also: Pituitary tumor, surgery, radiation, Sheehan syndrome. No hyperkalemia, no hyperpigmentation.
DIAGNOSIS: AM cortisol <3 confirms, >18 excludes. ACTH stimulation test (cosyntropin): Cortisol <18 at 30 or 60 min = adrenal insufficiency. Check ACTH to differentiate primary vs secondary.

ADRENAL CRISIS: Hypotension, shock, altered mental status. Medical emergency.
Treatment: Hydrocortisone 100mg IV bolus → 50mg IV q8h. Aggressive IV fluids (NS). Do NOT delay steroids for testing if clinically suspected.

CHRONIC MANAGEMENT: Hydrocortisone 15-25mg/day in divided doses (2/3 AM, 1/3 PM) + fludrocortisone if primary (mineralocorticoid replacement). Stress dosing: Double or triple dose during illness, 100mg IV for surgery/major stress. Medical alert bracelet.`},

{topic:"Pituitary Disorders",chapter:"Endocrinology",page:"p.149",content:`PITUITARY ADENOMAS: Microadenoma (<10mm) vs macroadenoma (≥10mm). May cause hormone excess and/or deficiency (mass effect). Visual field defects (bitemporal hemianopia) from optic chiasm compression.
Prolactinoma (#1): Elevated prolactin. Women: Amenorrhea, galactorrhea. Men: Decreased libido, gynecomastia. Treatment: Dopamine agonist (cabergoline > bromocriptine). Surgery if medication-intolerant.
GH-secreting (acromegaly): Coarsened features, large hands/feet, HF, DM, sleep apnea. Diagnose: IGF-1 (screening), OGTT with GH nadir >1 = confirms. Treatment: Surgery first-line, octreotide/lanreotide, pegvisomant.
ACTH-secreting (Cushing's): Weight gain, striae, moon facies, buffalo hump, DM, HTN, easy bruising. Diagnose: 24h urine cortisol, late-night salivary cortisol, 1mg dexamethasone suppression test. Treatment: Surgery.
Non-functioning adenoma: Mass effect only. Surgery if visual field compromise or progressive growth.

HYPOPITUITARISM: Gradual loss of anterior pituitary function. Most vulnerable: GH > LH/FSH > TSH > ACTH. Replace deficient hormones. Cortisol before thyroid (starting levothyroxine without cortisol can precipitate adrenal crisis).`},

{topic:"Calcium Disorders",chapter:"Endocrinology",page:"p.150",content:`HYPERCALCEMIA
Symptoms (bones, stones, groans, moans, psychiatric overtones): Bone pain, nephrolithiasis, abdominal pain/constipation, nausea, confusion, fatigue, short QT
Causes: Primary hyperparathyroidism (#1 outpatient), malignancy (#1 inpatient — PTHrP, bone mets, lymphoma), granulomatous disease (sarcoidosis → calcitriol), vitamin D toxicity, thiazides, immobilization, milk-alkali syndrome
Workup: Ionized calcium or corrected Ca (add 0.8 per 1g albumin below 4), PTH, PTHrP, 25-OH vitamin D, 1,25-OH vitamin D
Treatment: IV NS (aggressive hydration first), calcitonin 4 IU/kg q12h (rapid but short-lived), zoledronic acid 4mg IV (takes 2-4 days, lasts weeks). Avoid thiazides. Dialysis if refractory/severe.

HYPOCALCEMIA
Symptoms: Tetany, Chvostek sign (facial twitch), Trousseau sign (carpopedal spasm), seizures, prolonged QT, arrhythmias
Causes: Hypoparathyroidism (post-surgical #1), vitamin D deficiency, CKD, pancreatitis, hyperphosphatemia, hypomagnesemia, massive transfusion (citrate binds Ca)
Treatment: Mild: Oral calcium + vitamin D. Severe/symptomatic: Calcium gluconate 1-2g IV over 10-20 min (calcium chloride via central line). Must correct magnesium first.`},

{topic:"Osteoporosis & Vitamin D",chapter:"Endocrinology",page:"p.151",content:`OSTEOPOROSIS: T-score ≤-2.5 on DEXA scan. Osteopenia: T-score -1.0 to -2.5.
Screening: DEXA for women ≥65, men ≥70. Earlier if risk factors (steroids, early menopause, family hx, low BMI).
FRAX: 10-year fracture risk calculator. Treat if: Hip fracture risk ≥3% or major osteoporotic fracture risk ≥20%.

TREATMENT
First-line: Bisphosphonates (alendronate PO weekly, zoledronic acid IV yearly). Take PO bisphosphonates fasting with water, stay upright 30 min.
Very high risk: Anabolic agents first (teriparatide, abaloparatide, romosozumab) → then transition to bisphosphonate.
Denosumab: RANK-L inhibitor. SQ q6 months. Do NOT stop abruptly (rebound vertebral fractures) → transition to bisphosphonate before stopping.
Bisphosphonate adverse effects: Esophagitis (PO), osteonecrosis of jaw (rare, dental clearance), atypical femur fracture (rare, with prolonged use >5 years).

VITAMIN D
Deficiency: 25-OH vitamin D <20 ng/mL. Insufficiency: 20-29. Target: ≥30.
Treatment: Ergocalciferol (D2) or cholecalciferol (D3) 50,000 IU weekly × 8-12 weeks, then maintenance 1000-2000 IU daily.`},

{topic:"Thyroid Disorders & Male Hypogonadism",chapter:"Endocrinology",page:"p.152",content:`HYPOTHYROIDISM: Fatigue, weight gain, cold intolerance, constipation, dry skin, bradycardia. Elevated TSH, low free T4. Hashimoto's thyroiditis (#1 cause in developed world, anti-TPO antibodies). Treatment: Levothyroxine (start 1.6 mcg/kg, lower in elderly/cardiac patients). Check TSH in 6-8 weeks.
HYPERTHYROIDISM: Weight loss, heat intolerance, tremor, tachycardia, anxiety, diarrhea. Low TSH, elevated free T4. Graves (#1 cause, TSI positive, diffuse goiter, ophthalmopathy). Treatment: Methimazole (preferred) or PTU (first trimester pregnancy, thyroid storm). Definitive: RAI or thyroidectomy.
THYROID STORM: Severe thyrotoxicosis + organ dysfunction (fever, AMS, HF, liver failure). Treatment: PTU (blocks synthesis + peripheral conversion), propranolol, hydrocortisone 100mg IV q8h, iodine (1h AFTER PTU). ICU admission.
MYXEDEMA COMA: Severe hypothyroidism with hypothermia, AMS, bradycardia, hypotension. Treatment: IV levothyroxine 200-400 mcg loading dose, hydrocortisone 100mg IV (before or with levothyroxine, until adrenal insufficiency excluded), supportive care, gentle rewarming.
THYROID NODULES: TSH first. If TSH low → thyroid scan (hot nodules rarely malignant). If TSH normal/high → ultrasound → FNA based on size and features (TI-RADS/Bethesda).

MALE HYPOGONADISM: Fatigue, low libido, erectile dysfunction, decreased muscle mass, depressed mood. Diagnosis: Two AM total testosterone levels <300. Check LH/FSH to differentiate primary (high LH/FSH — testicular) vs secondary (low/normal LH/FSH — pituitary). Treatment: Testosterone replacement (gel, injection, patch) if symptomatic and confirmed. Monitor Hct, PSA.`},

// ═══════════════════════════════════════
// GERIATRICS & PALLIATIVE CARE
// ═══════════════════════════════════════

{topic:"Pain Management",chapter:"Geriatrics",page:"p.153",content:`WHO PAIN LADDER
Step 1: Non-opioid (acetaminophen, NSAIDs) ± adjuvant
Step 2: Weak opioid (tramadol, codeine) ± non-opioid ± adjuvant
Step 3: Strong opioid (morphine, oxycodone, hydromorphone, fentanyl) ± non-opioid ± adjuvant

OPIOID PRINCIPLES
Starting dose (opioid-naive): Morphine 2-4mg IV q3-4h PRN or 5-15mg PO q4h PRN. Hydromorphone 0.5-1mg IV q3-4h PRN.
Equianalgesic dosing: Morphine 10mg IV = 30mg PO. Hydromorphone 1.5mg IV = 7.5mg PO. Fentanyl 100mcg IV = morphine 10mg IV.
Conversion: When switching opioids, reduce new opioid dose by 25-50% (incomplete cross-tolerance).
PCA: For acute pain. Basal rate generally avoided (respiratory depression risk). Demand dose with lockout interval.

ADJUVANTS
Neuropathic pain: Gabapentin, pregabalin, duloxetine, TCAs (amitriptyline, nortriptyline)
Bone pain: NSAIDs, bisphosphonates, radiation, denosumab
Visceral pain: Dexamethasone, octreotide (bowel obstruction)
Muscle spasm: Cyclobenzaprine, baclofen, tizanidine

CAUTION IN ELDERLY: Avoid meperidine (seizures, normeperidine accumulation), avoid long-acting agents initially, start low/go slow, anticipate constipation (prophylactic bowel regimen with all opioids).`},

{topic:"Adv Care Planning & Code Status",chapter:"Geriatrics",page:"p.154",content:`ADVANCE CARE PLANNING: Ongoing process of discussing values, goals, and preferences for future medical care
ADVANCE DIRECTIVE: Legal document expressing healthcare wishes if unable to communicate (living will + healthcare proxy/POA)
HEALTHCARE PROXY/DURABLE POA: Designated person to make medical decisions when patient lacks capacity

CODE STATUS OPTIONS
Full code: CPR, intubation, all interventions
DNR/DNI: No CPR/intubation, but all other treatments
DNR: No CPR, but may still intubate for non-arrest situations
Comfort measures only: Focus on symptom relief, no life-prolonging treatments

GOALS OF CARE CONVERSATION FRAMEWORK
1. Ask what the patient/family understands about the medical situation
2. Share prognostic information honestly and empathetically (ask permission first)
3. Explore values and goals: "What matters most to you?" "What are you hoping for?"
4. Make a recommendation based on goals: "Given what you've told me about what's important to you, I would recommend..."
5. Document and communicate decisions clearly to the team

KEY POINT: Code status is NOT "all or nothing." Tailor interventions to patient goals. Revisit as clinical situation changes.`},

{topic:"Death & Pronouncement",chapter:"Geriatrics",page:"p.155",content:`DEATH PRONOUNCEMENT PROCEDURE
1. Identify the patient (wristband, chart)
2. Assess for signs of death: No spontaneous breathing, no heart sounds (auscultate for 1 full minute), no pupillary response (fixed, dilated), no response to stimuli
3. Note the time of death
4. Document in the medical record: Time called to bedside, physical exam findings confirming death, time of death
5. Notify attending physician, family, nursing, chaplaincy if requested
6. Express condolences to family. Allow time for grieving.
7. Complete death certificate (cause of death, manner of death)
8. Consider organ/tissue donation (contact organ procurement organization)
9. If death is unexpected, sudden, or suspicious → notify medical examiner/coroner`},

{topic:"End of Life Care & Hospice",chapter:"Geriatrics",page:"p.156",content:`HOSPICE ELIGIBILITY: Terminal diagnosis with estimated prognosis ≤6 months if disease follows expected course. Patient elects comfort-focused care. Must recertify.
HOSPICE SERVICES: Nursing, physician, social work, chaplaincy, home health aide, medications related to terminal diagnosis, DME, bereavement support for family
PALLIATIVE CARE vs HOSPICE: Palliative care is appropriate at any stage of serious illness alongside curative treatment. Hospice is for end-of-life when curative treatment is no longer pursued.

SYMPTOM MANAGEMENT AT END OF LIFE
Dyspnea: Opioids (morphine 2-4mg PO/SL q4h PRN — most effective), fan to face, oxygen (comfort), benzodiazepines if anxiety-related
Pain: Opioids (escalate as needed, no ceiling dose for cancer pain), adjuvants, consider rotation if side effects
Secretions (death rattle): Glycopyrrolate 0.2mg SQ q4h or atropine drops SL. Reposition. Suctioning often distressing and ineffective.
Agitation/delirium: Haloperidol 0.5-2mg q4h. Low-dose benzodiazepines if refractory.
Nausea: Ondansetron, haloperidol, metoclopramide, dexamethasone
Anorexia: Not usually distressing to patient. Avoid aggressive feeding at end of life. Small sips for comfort.`},

{topic:"Frailty & Polypharmacy",chapter:"Geriatrics",page:"p.157",content:`FRAILTY: State of decreased physiologic reserve and increased vulnerability to stressors
Assessment: Fried criteria (≥3 of 5 = frail): Unintentional weight loss, weakness (grip strength), exhaustion, slow gait speed, low physical activity
Clinical Frailty Scale: 1 (very fit) to 9 (terminally ill). Score ≥5 = frail.
Implications: Higher perioperative mortality, worse outcomes after ICU admission, longer hospital stays, higher readmission rates

POLYPHARMACY: Use of ≥5 medications. Risk increases with age, multiple providers, multiple comorbidities.
Beers Criteria: List of medications potentially inappropriate in older adults (AGS)
Key medications to AVOID in elderly: Benzodiazepines (falls, delirium), anticholinergics (confusion), long-acting sulfonylureas (hypoglycemia), NSAIDs (GI bleed, AKI), muscle relaxants (sedation, falls)

DEPRESCRIBING: Systematic process of reducing/stopping medications that are no longer beneficial or are causing harm
Approach: Review all medications → identify inappropriate ones → prioritize which to stop → taper slowly → monitor for withdrawal effects
Examples: Stopping statins in patients with limited life expectancy, reducing polypharmacy in dementia, discontinuing PPIs without clear indication`},

{topic:"Geriatric Assessment & Elder Abuse",chapter:"Geriatrics",page:"p.158",content:`COMPREHENSIVE GERIATRIC ASSESSMENT
Functional: ADLs (bathing, dressing, toileting, transferring, feeding, continence) and IADLs (finances, medications, cooking, shopping, transportation, housework, phone use)
Cognitive: MMSE or MoCA (MoCA more sensitive for mild cognitive impairment)
Mood: PHQ-2/PHQ-9 for depression screening (very common in elderly)
Falls: Screen annually. Assess gait, balance, vision, medications, orthostatic vitals, home safety
Nutrition: Unintentional weight loss, BMI, mini nutritional assessment
Social: Caregiver support, living situation, financial resources, social isolation
Advance care planning: Goals of care, healthcare proxy, advance directive

ELDER ABUSE
Types: Physical, emotional/psychological, sexual, neglect, financial exploitation, abandonment
Red flags: Unexplained injuries, malnutrition/dehydration, fearfulness, poor hygiene, caregiver refuses to leave patient alone, inconsistent explanations for injuries
Reporting: Mandatory in most states. Contact Adult Protective Services (APS). Document findings objectively.`},

// ═══════════════════════════════════════
// RHEUMATOLOGY
// ═══════════════════════════════════════

{topic:"Approach to Rheumatologic Disease",chapter:"Rheumatology",page:"p.159",content:`KEY QUESTIONS: Inflammatory vs mechanical? Mono vs polyarticular? Acute vs chronic? Symmetric vs asymmetric? Small vs large joints? Axial vs peripheral?
INFLAMMATORY SIGNS: Morning stiffness >30 min, improves with activity, swelling/warmth/erythema, elevated ESR/CRP
MECHANICAL SIGNS: Pain worse with activity, better with rest, minimal morning stiffness (<30 min)

WORKUP: CBC, CMP, ESR, CRP, ANA, RF, anti-CCP, uric acid, joint aspiration (if effusion present)
Joint fluid analysis: WBC <2000 (non-inflammatory/OA), 2000-50,000 (inflammatory/RA/gout), >50,000 (likely septic — rule out infection first). Crystals: Monosodium urate (gout — needle-shaped, negatively birefringent), CPPD (pseudogout — rhomboid, positively birefringent).`},

{topic:"Arthritis",chapter:"Rheumatology",page:"p.160",content:`RHEUMATOID ARTHRITIS: Symmetric polyarthritis of small joints (MCP, PIP, wrists), morning stiffness >1h. RF + anti-CCP (most specific). Treatment: Methotrexate (anchor drug) → biologics (TNFi, IL-6i, JAK inhibitors) if inadequate response. Early aggressive treatment prevents joint destruction (TEAR trial).
OSTEOARTHRITIS: Degenerative. DIP/PIP, knees, hips, spine. Bony enlargement, crepitus. Treatment: Exercise, weight loss, acetaminophen, topical NSAIDs, intra-articular steroids, joint replacement for end-stage.
GOUT: Acute monoarthritis (1st MTP classic — podagra). Needle-shaped negatively birefringent crystals. Acute treatment: NSAIDs, colchicine (most effective within 24h), steroids. Chronic: Allopurinol (CARES trial — preferred over febuxostat) or febuxostat. Target uric acid <6. Continue prophylaxis (colchicine low-dose) for 3-6 months after starting ULT.
PSEUDOGOUT (CPPD): Knee/wrist. Rhomboid positively birefringent crystals. Chondrocalcinosis on X-ray. Treatment similar to gout acute management.
SEPTIC ARTHRITIS: Medical emergency. Hot, swollen, painful joint. Synovial WBC >50,000 (often >100,000). Gram stain/culture. Treatment: Empiric vancomycin + ceftriaxone → narrow. Arthrocentesis (drainage) + antibiotics.`},

{topic:"Connective Tissue Diseases",chapter:"Rheumatology",page:"p.161",content:`SLE: Young women, multisystem (skin, joints, kidneys, blood, serositis, neuro). ANA (sensitive), anti-dsDNA (specific, correlates with nephritis), anti-Smith (specific). Low complements (C3/C4) in active disease. Treatment: Hydroxychloroquine (all patients), steroids for flares, mycophenolate/cyclophosphamide for nephritis, belimumab, voclosporin.
SCLERODERMA: Limited (CREST: calcinosis, Raynaud's, esophageal dysmotility, sclerodactyly, telangiectasia, anti-centromere Ab) vs Diffuse (skin thickening proximal to elbows/knees, anti-Scl-70/topoisomerase, ILD, renal crisis). Scleroderma renal crisis: ACEi is treatment of choice.
SJOGREN'S: Dry eyes (keratoconjunctivitis sicca), dry mouth (xerostomia). Anti-SSA (Ro), anti-SSB (La). Associated with lymphoma risk.
INFLAMMATORY MYOPATHIES: Proximal muscle weakness. Dermatomyositis (heliotrope rash, Gottron's papules, anti-Mi-2, anti-MDA5) — associated with malignancy. Polymyositis (anti-Jo1 — antisynthetase syndrome with ILD). Treatment: Steroids ± methotrexate or azathioprine or IVIG.
MIXED CTD: Features of SLE + scleroderma + polymyositis. Anti-U1 RNP antibody.`},

{topic:"Vasculitis",chapter:"Rheumatology",page:"p.162",content:`LARGE VESSEL
Giant Cell Arteritis (GCA): Age >50. Headache, jaw claudication, vision loss (ophthalmologic emergency), elevated ESR (often >50). Temporal artery biopsy (may be negative — skip lesions). Treatment: High-dose prednisone IMMEDIATELY if suspected (do NOT wait for biopsy). Tocilizumab for steroid-sparing.
Takayasu: Young women. Aorta and branches. Pulse deficits, claudication. "Pulseless disease."

MEDIUM VESSEL
Polyarteritis Nodosa (PAN): Associated with HBV. Skin (livedo reticularis, nodules), peripheral neuropathy, renal (HTN, no GN), GI (mesenteric ischemia). ANCA negative. Treatment: Steroids ± cyclophosphamide.

SMALL VESSEL (ANCA-associated)
GPA (Wegener's): Upper/lower respiratory + renal. Saddle nose deformity, sinusitis, pulmonary nodules/cavities, GN. c-ANCA (anti-PR3). Treatment: Rituximab or cyclophosphamide + steroids → maintenance with rituximab or azathioprine.
MPA: Similar to GPA but no upper airway involvement. p-ANCA (anti-MPO). Pulmonary-renal syndrome.
EGPA (Churg-Strauss): Asthma, eosinophilia, vasculitis. p-ANCA in some. Treatment: Steroids ± mepolizumab.
IgA Vasculitis (HSP): Children > adults. Palpable purpura, arthritis, abdominal pain, GN. Usually self-limited.`},

{topic:"Miscellaneous Rheumatologic Diseases",chapter:"Rheumatology",page:"p.163",content:`SARCOIDOSIS: Non-caseating granulomas. Bilateral hilar lymphadenopathy, pulmonary infiltrates, skin (erythema nodosum, lupus pernio), uveitis, hypercalcemia (excess 1,25-vitamin D from granulomas), cardiac (heart block, cardiomyopathy). Elevated ACE level (neither sensitive nor specific). Diagnosis: Biopsy showing non-caseating granulomas + clinical context. Treatment: Observe if mild. Steroids if progressive pulmonary disease, cardiac, neuro, or hypercalcemia.
ADULT-ONSET STILL'S DISEASE: Quotidian fevers (daily spikes, often >39°C), salmon-colored evanescent rash, arthritis, sore throat, ferritin markedly elevated (often >1000), glycosylated ferritin <20%. Treatment: NSAIDs → steroids → IL-1 inhibitors (anakinra) or IL-6 inhibitors (tocilizumab).
REACTIVE ARTHRITIS: Asymmetric oligoarthritis following GI or GU infection. "Can't see, can't pee, can't climb a tree" (conjunctivitis, urethritis, arthritis). Treatment: NSAIDs, intra-articular steroids, DMARDs if chronic.
POLYMYALGIA RHEUMATICA: Age >50. Bilateral shoulder/hip pain and stiffness. Markedly elevated ESR. Dramatic response to low-dose prednisone (10-20mg). Associated with GCA (~15%).`},

{topic:"Autoantibodies",chapter:"Rheumatology",page:"p.164",content:`ANA: Screening test. Sensitive for SLE (>95%) but not specific. Also positive in: Sjogren's, scleroderma, drug-induced lupus, even healthy individuals (5-10%).
Anti-dsDNA: Specific for SLE. Correlates with disease activity and lupus nephritis.
Anti-Smith: Most specific for SLE (but less sensitive).
Anti-SSA (Ro) / Anti-SSB (La): Sjogren's syndrome, neonatal lupus, subacute cutaneous lupus. SSA crosses placenta → neonatal heart block.
Anti-CCP: Highly specific for RA (>95% specificity). More specific than RF.
RF (Rheumatoid Factor): Sensitive but not specific for RA. Also in: Sjogren's, HCV, endocarditis, sarcoidosis.
c-ANCA (anti-PR3): GPA (Wegener's).
p-ANCA (anti-MPO): MPA, EGPA, drug-induced vasculitis.
Anti-Scl-70 (topoisomerase I): Diffuse scleroderma.
Anti-centromere: Limited scleroderma (CREST).
Anti-Jo-1 (antisynthetase): Polymyositis with ILD.
Anti-phospholipid antibodies (lupus anticoagulant, anticardiolipin, anti-β2GP1): Antiphospholipid syndrome (arterial/venous thrombosis, pregnancy loss).
Anti-GBM: Goodpasture syndrome (pulmonary hemorrhage + GN).`},

{topic:"Rheumatologic Medications",chapter:"Rheumatology",page:"p.165",content:`METHOTREXATE: Anchor drug for RA. Weekly dosing (NOT daily — fatal if given daily). Folic acid supplementation (reduces side effects). Monitor: CBC, LFTs. Avoid in pregnancy (teratogenic), renal failure, significant liver disease.
HYDROXYCHLOROQUINE: SLE (all patients), RA, Sjogren's. Generally well-tolerated. Annual ophthalmology exam (retinal toxicity, typically after 5 years).
BIOLOGICS: TNF inhibitors (infliximab, adalimumab, etanercept) — screen for TB before starting. IL-6 inhibitors (tocilizumab). B-cell depletion (rituximab). T-cell co-stimulation blockade (abatacept). JAK inhibitors (tofacitinib, baricitinib, upadacitinib) — VTE and CV risk (FDA warning).
STEROIDS: Rapid anti-inflammatory effect. Long-term side effects: Osteoporosis, DM, HTN, cataracts, adrenal suppression, infection risk, weight gain, mood changes. Always plan steroid taper. Stress dosing when acutely ill.
CYCLOPHOSPHAMIDE: Severe vasculitis, lupus nephritis. Side effects: Hemorrhagic cystitis (prevent with mesna and hydration), myelosuppression, infection, infertility, bladder cancer (long-term).
MYCOPHENOLATE: Lupus nephritis (maintenance), vasculitis maintenance. GI side effects. Teratogenic.
COLCHICINE: Gout, pericarditis, FMF. GI side effects (dose-limiting). Reduce dose with CKD and P-glycoprotein/CYP3A4 inhibitors.`},

// ═══════════════════════════════════════
// ALLERGY & IMMUNOLOGY
// ═══════════════════════════════════════

{topic:"Drug & Contrast Allergy",chapter:"Allergy",page:"p.166",content:`DRUG ALLERGY: True IgE-mediated allergy (immediate, <1h): Urticaria, angioedema, anaphylaxis. Delayed (>1h to weeks): Maculopapular rash (most common), DRESS, SJS/TEN, serum sickness.
PENICILLIN ALLERGY: ~10% report allergy, but >90% are NOT truly allergic when tested. Cross-reactivity with cephalosporins is low (~1-2%). Penicillin skin testing → can safely administer penicillin if negative. De-labeling saves lives (avoids broader-spectrum antibiotics → less resistance, fewer C. diff).
CONTRAST REACTIONS: Not true allergy (anaphylactoid, not IgE-mediated). Premedication for prior contrast reaction: Prednisone 50mg PO at 13h, 7h, and 1h before + diphenhydramine 50mg at 1h before. Use low-osmolar/iso-osmolar non-ionic contrast.
DRUG-INDUCED REACTIONS
SJS/TEN: Severe mucocutaneous reaction. <10% BSA (SJS), >30% BSA (TEN). Common culprits: Allopurinol, sulfonamides, anticonvulsants (carbamazepine, phenytoin, lamotrigine). Treatment: Stop drug, wound care (burn center), IVIG or cyclosporine. High mortality in TEN.
DRESS: Drug Rash with Eosinophilia and Systemic Symptoms. 2-8 weeks after drug exposure. Facial edema, fever, eosinophilia, hepatitis, nephritis. Treatment: Stop drug, systemic steroids.`},

{topic:"Angioedema & Anaphylaxis",chapter:"Allergy",page:"p.167",content:`ANAPHYLAXIS: Rapid-onset, potentially fatal. Criteria: Acute onset + skin/mucosal involvement + respiratory compromise OR hypotension OR end-organ dysfunction after known allergen exposure.
Treatment:
1. EPINEPHRINE 0.3-0.5mg IM (anterolateral thigh) — FIRST-LINE. Repeat q5-15 min if needed.
2. Position: Supine, legs elevated (unless respiratory distress)
3. IV fluids: NS bolus for hypotension
4. Adjuncts: Albuterol (bronchospasm), H1 + H2 blockers, steroids (prevent biphasic reaction)
5. Monitor ≥4-6 hours (biphasic reaction in ~5-20%, up to 72h)
Discharge with: Epinephrine auto-injector prescription, anaphylaxis action plan, allergy referral

ANGIOEDEMA
Histamine-mediated: Urticaria often present. Responds to epinephrine, antihistamines, steroids.
Bradykinin-mediated: No urticaria. ACEi-induced (#1 cause of drug-induced angioedema), hereditary angioedema (C1 inhibitor deficiency — low C4 screening test). Does NOT respond to epinephrine/antihistamines/steroids.
HAE treatment: Acute: C1 inhibitor concentrate, icatibant (bradykinin antagonist), ecallantide. Prophylaxis: C1 inhibitor, lanadelumab, berotralstat.`},

{topic:"Mast Cell Disorders",chapter:"Allergy",page:"p.168",content:`MASTOCYTOSIS: Abnormal mast cell proliferation in skin and/or organs. Elevated serum tryptase (>20 ng/mL baseline). Skin: Urticaria pigmentosa (brown macules, Darier sign — wheal with stroking). Systemic: GI symptoms, bone pain, anaphylaxis, osteoporosis. KIT D816V mutation in most cases. Treatment: H1/H2 blockers, mast cell stabilizers (cromolyn), avoidance of triggers, midostaurin or avapritinib for advanced disease. All patients should carry epinephrine.
MAST CELL ACTIVATION SYNDROME (MCAS): Episodic symptoms of mast cell mediator release (flushing, urticaria, GI symptoms, hypotension) without clonal mast cell disease. Diagnosis: Clinical symptoms + elevated tryptase during episode (>20% + 2 above baseline) + response to mast cell-directed therapy. Treatment: H1/H2 blockers, mast cell stabilizers, leukotriene receptor antagonists, epinephrine for severe episodes.`},

{topic:"Primary Immunodeficiency",chapter:"Allergy",page:"p.169",content:`WHEN TO SUSPECT: Recurrent, severe, unusual, or treatment-resistant infections. Family history of immunodeficiency. Failure to thrive (children).
ANTIBODY DEFICIENCY (most common in adults): Common variable immunodeficiency (CVID) — low IgG, poor vaccine responses, recurrent sinopulmonary infections. IgA deficiency (#1 primary immunodeficiency overall). Specific antibody deficiency.
Treatment: IVIG or SCIG replacement for significant antibody deficiency. Prophylactic antibiotics for some. Vaccinate (avoid live vaccines in severe immunodeficiency).
WORKUP: Quantitative immunoglobulins (IgG, IgA, IgM), vaccine titers (pneumococcal, tetanus), CBC with differential (lymphocyte count), complement levels (CH50, C3, C4), HIV testing.

SECONDARY IMMUNODEFICIENCY (much more common): HIV, medications (steroids, chemotherapy, rituximab, biologics), malignancy, transplant immunosuppression, asplenia (functional or surgical — encapsulated organisms: S. pneumoniae, H. influenzae, N. meningitidis), malnutrition, extremes of age.`},

// ═══════════════════════════════════════
// NEUROLOGY
// ═══════════════════════════════════════

{topic:"Altered Mental Status",chapter:"Neurology",page:"p.170",content:`APPROACH: AEIOU-TIPS mnemonic
A: Alcohol/drugs, E: Endocrine/electrolytes/encephalopathy, I: Insulin (hypo/hyperglycemia), O: Oxygen (hypoxia/CO), U: Uremia
T: Trauma/temperature, I: Infection (meningitis, encephalitis, sepsis, UTI), P: Psychiatric/poison, S: Stroke/seizure/status epilepticus

WORKUP: Glucose (first!), CBC, CMP, TSH, ammonia, lactate, UA, blood cultures, ABG/VBG, toxicology screen, CT head, consider LP, EEG if seizure suspected. Always check medications.

HEPATIC ENCEPHALOPATHY: Confusion in cirrhosis. Precipitants: Infection, GI bleed, constipation, medications (BZDs, opioids), dehydration, electrolyte disturbance. Treatment: Lactulose (titrate to 2-3 BMs/day), rifaximin, treat precipitant.

UREMIC ENCEPHALOPATHY: AMS with severely elevated BUN/Cr. Treatment: Dialysis.

WERNICKE ENCEPHALOPATHY: Thiamine deficiency (alcoholism, malnutrition). Classic triad: Confusion, ophthalmoplegia, ataxia (full triad in only ~10%). Treatment: IV thiamine 500mg TID × 3-5 days. ALWAYS give thiamine BEFORE glucose.`},

{topic:"Delirium",chapter:"Neurology",page:"p.171",content:`DEFINITION: Acute, fluctuating disturbance in attention and awareness
Types: Hyperactive (agitation — easier to recognize), hypoactive (lethargy — more common, often missed), mixed
Screening: CAM (Confusion Assessment Method) or CAM-ICU

CAUSES (I WATCH DEATH): Infection, Withdrawal, Acute metabolic, Trauma, CNS pathology, Hypoxia, Deficiencies (B12, thiamine), Endocrine, Acute vascular, Toxins/drugs, Heavy metals

MANAGEMENT
Non-pharmacologic (FIRST-LINE): Reorientation, sleep hygiene (lights off at night, minimize nighttime interruptions), minimize tethers (remove Foley, restraints), mobilize early, ensure hearing aids/glasses, hydration/nutrition, avoid unnecessary medications
Pharmacologic (only for safety/severe agitation): Haloperidol 0.5-2mg (avoid in Parkinson's, prolonged QT). Quetiapine 12.5-25mg (preferred in Parkinson's). Avoid benzodiazepines (worsen delirium, EXCEPT alcohol/BZD withdrawal and seizures).

PREVENTION: Address risk factors proactively. ABCDEF bundle in ICU. Avoid anticholinergics, benzodiazepines, meperidine. Maintain sleep-wake cycles.`},

{topic:"Dementia",chapter:"Neurology",page:"p.172",content:`Alzheimer's disease (#1): Gradual onset, progressive memory loss (hippocampal), language, visuospatial decline. Amyloid plaques + neurofibrillary tangles. Biomarkers: Low CSF Aβ42, elevated CSF tau, amyloid PET positive. Treatment: Cholinesterase inhibitors (donepezil, rivastigmine), memantine. Newer: Lecanemab, donanemab (anti-amyloid antibodies) for early disease.
Vascular dementia (#2): Stepwise decline, often after strokes. Risk factors same as stroke. Treat vascular risk factors.
Lewy body dementia: Visual hallucinations, parkinsonism, fluctuating cognition, REM sleep behavior disorder. AVOID antipsychotics (severe sensitivity). Treatment: Cholinesterase inhibitors.
Frontotemporal dementia: Personality/behavioral changes (behavioral variant) or language decline (primary progressive aphasia). Younger onset (50-60s). No approved disease-modifying therapy.
Normal pressure hydrocephalus: "Wet, wobbly, wacky" (urinary incontinence, gait apraxia, dementia). Ventriculomegaly on imaging. Treatment: VP shunt (gait most responsive to treatment).

WORKUP: Cognitive testing (MoCA, MMSE), labs (TSH, B12, RPR, HIV, CMP), MRI brain, consider LP and PET in selected cases.`},

{topic:"Headache & Vertigo",chapter:"Neurology",page:"p.173",content:`HEADACHE RED FLAGS (SNOOP): Systemic symptoms/secondary risk factors, Neurologic symptoms, Onset sudden (thunderclap), Older age (new >50), Pattern change (progressive or new)
Thunderclap headache: Worst headache of life, peaks in seconds to minutes. Must rule out SAH (CT head → LP if CT negative within 6h, CTA for aneurysm).
Migraine: Unilateral, pulsating, 4-72h, ±aura, photophobia/phonophobia, nausea. Acute: Triptans (first-line), NSAIDs. Prevention (≥4/month): Beta-blockers, topiramate, valproate, amitriptyline, CGRP antibodies (erenumab, fremanezumab).
Tension-type: Bilateral, pressing, 30min-7days. NSAIDs, acetaminophen.
Cluster: Unilateral, periorbital, severe, 15-180 min, autonomic symptoms (lacrimation, nasal congestion). Acute: Sumatriptan SQ or high-flow O₂. Prevention: Verapamil.
Giant cell arteritis: See Rheumatology section. Start steroids immediately if suspected.

VERTIGO
Peripheral (inner ear): BPPV (#1 — positional, Dix-Hallpike positive, treat with Epley maneuver), vestibular neuritis (acute, days, treat with steroids), Meniere's (episodes of vertigo + hearing loss + tinnitus + ear fullness)
Central (brainstem/cerebellum): HINTS exam (Head Impulse, Nystagmus, Test of Skew) — if ANY finding suggests central → MRI brain urgently. Causes: Stroke, MS, tumor.`},

{topic:"Stroke & TIA",chapter:"Neurology",page:"p.174",content:`ISCHEMIC STROKE (~85%)
Time is brain: Call stroke alert, NIHSS, CT head (rule out hemorrhage), CTA head/neck
tPA (alteplase): Within 4.5h of symptom onset. Contraindications: Active bleeding, recent surgery, platelets <100K, INR >1.7, BP >185/110 uncontrolled.
Thrombectomy: Large vessel occlusion, within 6h (up to 24h in select patients per DAWN/DEFUSE-3 trials based on perfusion imaging). Contact neurosurgery/neuro-interventional.
Acute management: BP permissive (<220/120 if no tPA, <185/110 if tPA given), aspirin 325mg within 24-48h, statin, DVT prophylaxis, swallowing evaluation.

HEMORRHAGIC STROKE
ICH: BP reduction (target SBP <140 per INTERACT2/ATACH-2), reverse anticoagulation, neurosurgical consult if large/posterior fossa/hydrocephalus. Avoid hyperthermia, hyperglycemia, seizures.
SAH: Thunderclap headache. CT → LP if CT negative. CTA for aneurysm. Nimodipine (prevents vasospasm). Neurosurgical clipping or endovascular coiling.

SECONDARY PREVENTION: Antiplatelet (aspirin or clopidogrel), statin, BP control (<130/80). Anticoagulation if cardioembolic (AF → DOAC). Carotid endarterectomy if symptomatic stenosis ≥50%.

TIA: Transient neurologic deficit resolving <24h. Same workup as stroke. ABCD2 score for risk stratification. Start secondary prevention immediately.`},

{topic:"CNS Emergencies",chapter:"Neurology",page:"p.175",content:`STATUS EPILEPTICUS: Continuous seizure >5 min or ≥2 seizures without return to baseline. Medical emergency — mortality increases with duration.
Treatment: ABCs → Lorazepam 4mg IV (repeat ×1) → Levetiracetam, fosphenytoin, or valproate IV → If refractory: Propofol or midazolam drip (intubate). Continuous EEG monitoring.

ELEVATED ICP: Headache, vomiting, papilledema, Cushing triad (HTN, bradycardia, irregular respirations), herniation signs (unilateral fixed dilated pupil, posturing).
Treatment: HOB elevation 30°, mannitol 1g/kg IV or 23.4% hypertonic saline, hyperventilation (temporary, target pCO₂ 30-35 as bridge), neurosurgical decompression. Avoid hypotension, hyperthermia, seizures.

SPINAL CORD COMPRESSION: See Oncologic Emergencies. Back pain → weakness/sensory level → bowel/bladder dysfunction. MRI entire spine. Dexamethasone 10mg IV immediately.

MYASTHENIC CRISIS: Severe weakness with respiratory failure in myasthenia gravis. Precipitants: Infection, surgery, medications (aminoglycosides, beta-blockers, magnesium). Treatment: Intubation if needed (monitor NIF, FVC), IVIG or plasmapheresis, continue pyridostigmine if possible. Avoid succinylcholine.

GUILLAIN-BARRÉ: Ascending weakness after infection (Campylobacter, viral). CSF: Albuminocytologic dissociation (high protein, normal cells). Treatment: IVIG or plasmapheresis. Monitor respiratory function (intubate if FVC <20 mL/kg or NIF <-30). Steroids NOT effective.`},

{topic:"Seizures",chapter:"Neurology",page:"p.176",content:`CLASSIFICATION: Focal (aware or impaired awareness) vs Generalized (absence, tonic-clonic, myoclonic, atonic)
FIRST SEIZURE WORKUP: CT head (emergent), MRI brain (outpatient), EEG, labs (BMP, glucose, Ca, Mg, toxicology), consider LP if febrile/immunocompromised
Do NOT start AED after single unprovoked seizure unless: Abnormal EEG, structural brain lesion, or patient preference

COMMON ANTIEPILEPTICS
Levetiracetam (Keppra): First-line for most. Few drug interactions. Side effects: Irritability, mood changes.
Lamotrigine: Good for focal and generalized. Must titrate slowly (SJS risk). First-line for women of childbearing age (least teratogenic).
Valproate: Broad-spectrum. Effective for generalized epilepsy. Side effects: Weight gain, tremor, hepatotoxicity, teratogenic (avoid in pregnancy).
Carbamazepine/Oxcarbazepine: Good for focal seizures. CYP inducer (many drug interactions). Hyponatremia risk.
Phenytoin/Fosphenytoin: Used acutely (status epilepticus). Zero-order kinetics (small dose changes → big level changes). Monitor levels.

SEIZURE PRECAUTIONS: Fall precautions, no driving (state-dependent laws, typically seizure-free 3-12 months), no swimming/bathing alone, medication adherence.`},

{topic:"Weakness & Neuromuscular Disease",chapter:"Neurology",page:"p.177",content:`LOCALIZATION OF WEAKNESS
UMN (upper motor neuron): Spasticity, hyperreflexia, Babinski (+), clonus. Causes: Stroke, MS, ALS (UMN component), spinal cord lesion.
LMN (lower motor neuron): Flaccidity, hyporeflexia, fasciculations, atrophy. Causes: ALS (LMN component), peripheral neuropathy, radiculopathy, polio.
NMJ (neuromuscular junction): Fatigable weakness, normal reflexes. Causes: Myasthenia gravis, Lambert-Eaton.
Myopathy: Proximal weakness, normal reflexes, elevated CK. Causes: Inflammatory myopathies, hypothyroidism, statin-induced, muscular dystrophy.

KEY CONDITIONS
ALS: Combined UMN + LMN signs, progressive, no sensory involvement. Riluzole modestly extends survival. Edaravone. Supportive care, multidisciplinary approach.
Myasthenia Gravis: Fluctuating weakness, worse with repetitive use. Ptosis, diplopia, dysphagia. Anti-AChR Ab (80-85%), anti-MuSK Ab (5-10%). Edrophonium or ice pack test. CT chest (thymoma in 15%). Treatment: Pyridostigmine, immunosuppression (steroids, azathioprine, mycophenolate), thymectomy, IVIG/plasmapheresis for crisis.
GBS: See CNS Emergencies section.`},

{topic:"Neuroprognostication",chapter:"Neurology",page:"p.178",content:`POST-CARDIAC ARREST: Wait ≥72 hours after rewarming from TTM before prognostication. Use multimodal approach (no single test is sufficient).
Poor prognosis indicators (must be concordant): Bilateral absent pupillary/corneal reflexes at 72h, bilateral absent cortical (N20) SSEPs, persistent status epilepticus on EEG, diffuse anoxic injury on MRI (diffusion restriction), NSE >33 mcg/L (varies by lab).
AVOID: Prognosticating too early, relying on single test, self-fulfilling prophecy (withdraw care based on poor prognosis → patient dies → "prognosis confirmed").

POST-STROKE: NIHSS correlates with severity. Factors: Age, stroke severity, time to treatment, hemorrhagic conversion, edema.
TRAUMATIC BRAIN INJURY: GCS at 24-72h after resuscitation. CT/MRI findings. Pupillary reactivity. Age and mechanism.

KEY PRINCIPLES
- Avoid premature prognostication (confounders: sedation, hypothermia, metabolic derangements)
- Communicate uncertainty honestly to families
- Involve palliative care early for goals-of-care discussions in severe brain injury
- Serial neurologic exams more valuable than single assessments`},

// ═══════════════════════════════════════
// PSYCHIATRY
// ═══════════════════════════════════════

{topic:"Consent & Capacity",chapter:"Psychiatry",page:"p.179",content:`CAPACITY (clinical determination, any physician can assess): Patient can: 1) Communicate a choice, 2) Understand relevant information, 3) Appreciate how it applies to their situation, 4) Reason about options (weigh risks/benefits). Capacity is decision-specific and can fluctuate. Document assessment clearly. If lacking capacity → surrogate decision-maker.
COMPETENCY: Legal determination made by a court. Different from capacity.
INFORMED CONSENT: Requires: Decision-making capacity, adequate disclosure (diagnosis, proposed treatment, risks/benefits, alternatives, consequences of refusal), voluntary agreement, without coercion.
EXCEPTIONS TO INFORMED CONSENT: Emergencies (life-threatening, patient unable to consent, no surrogate available), therapeutic privilege (rare), waiver (patient explicitly waives right to information).`},

{topic:"Agitation",chapter:"Psychiatry",page:"p.180",content:`APPROACH: Safety first. De-escalation techniques (calm voice, empathy, maintain distance, offer choices). Rule out medical causes (hypoglycemia, hypoxia, infection, pain, withdrawal, delirium, intoxication).
PHARMACOLOGIC MANAGEMENT
Mild-moderate: Offer PO medications first. Haloperidol 2-5mg PO/IM, olanzapine 5-10mg PO/IM, lorazepam 1-2mg PO/IM.
Severe/dangerous: IM medications if refusing PO. "B52" cocktail: Benadryl 50mg + Haloperidol 5mg + Lorazepam 2mg IM. Or: Olanzapine 10mg IM (do NOT combine IM olanzapine with IM benzodiazepine — respiratory depression risk).
Special considerations: Avoid haloperidol if prolonged QTc or Parkinson's. Use benzodiazepines primarily for: Alcohol/BZD withdrawal, stimulant intoxication, catatonia. Ketamine 4-5 mg/kg IM for extreme agitation in ED.

RESTRAINTS: Last resort. Use least restrictive option. Reassess frequently (q1-2h). Document justification. Remove as soon as safe.`},

{topic:"Psychosis",chapter:"Psychiatry",page:"p.181",content:`DEFINITION: Loss of contact with reality — hallucinations, delusions, disorganized thought/behavior
DIFFERENTIAL: Schizophrenia, schizoaffective disorder, bipolar with psychotic features, MDD with psychotic features, delirium, substance-induced (stimulants, PCP, cannabis, steroids), medical (thyroid, Cushing's, SLE, anti-NMDAR encephalitis, Wilson's, porphyria)

WORKUP: History (onset, medications, substances, family), physical exam (neuro exam, signs of delirium/medical illness), CBC, CMP, TSH, UA, UDS, RPR, HIV, B12, consider MRI brain and EEG

TREATMENT
Antipsychotics: First-line for primary psychotic disorders.
- First-generation (typical): Haloperidol — effective but higher EPS risk (akathisia, dystonia, parkinsonism, tardive dyskinesia). QTc prolongation.
- Second-generation (atypical): Olanzapine (sedating, metabolic effects), quetiapine (sedating), risperidone (EPS at higher doses, hyperprolactinemia), aripiprazole (least metabolic effects), clozapine (treatment-resistant schizophrenia — requires ANC monitoring for agranulocytosis)

NMS (Neuroleptic Malignant Syndrome): Muscle rigidity, hyperthermia, AMS, autonomic instability, elevated CK. Treatment: Stop antipsychotic, dantrolene, bromocriptine, supportive care.`},

{topic:"Catatonia, NMS, & Serotonin Syndrome",chapter:"Psychiatry",page:"p.182",content:`CATATONIA: Psychomotor disturbance — stupor, mutism, posturing, waxy flexibility, negativism, echopraxia/echolalia. Can occur in psychiatric (schizophrenia, mood disorders) or medical conditions (autoimmune encephalitis, infections).
Diagnosis: Bush-Francis Catatonia Rating Scale. Lorazepam challenge (1-2mg IV — improvement within 10 min supports diagnosis).
Treatment: Benzodiazepines (lorazepam — first-line, often high doses needed). ECT for benzodiazepine-refractory cases. AVOID antipsychotics (may worsen catatonia, risk of NMS).

NMS (Neuroleptic Malignant Syndrome): Antipsychotic-related. "Lead pipe" rigidity, hyperthermia (>38°C), AMS, autonomic instability (tachycardia, labile BP, diaphoresis), very elevated CK (often >1000). Treatment: Stop offending agent, supportive (cooling, fluids), dantrolene (muscle relaxant), bromocriptine (dopamine agonist). ICU-level care.

SEROTONIN SYNDROME: Excess serotonergic activity. Triad: AMS + autonomic instability + neuromuscular excitability (clonus, hyperreflexia, myoclonus — key differentiator from NMS). Causes: Combination of serotonergic drugs (SSRIs + MAOIs, SSRIs + triptans, SSRIs + linezolid, SSRIs + tramadol). Treatment: Stop offending agents, benzodiazepines, cyproheptadine (serotonin antagonist), supportive care.`},

{topic:"Depression",chapter:"Psychiatry",page:"p.183",content:`DIAGNOSIS (DSM-5): ≥5 of 9 symptoms for ≥2 weeks (must include depressed mood or anhedonia): SIG-E-CAPS — Sleep changes, Interest loss, Guilt/worthlessness, Energy decreased, Concentration decreased, Appetite changes, Psychomotor changes, Suicidal ideation
Always assess for safety: Suicidal ideation, plan, intent, access to means, risk factors

TREATMENT
Mild-moderate: Psychotherapy (CBT, IPT) ± medication
Moderate-severe: SSRI (first-line): Sertraline, escitalopram. SNRI: Venlafaxine, duloxetine. Bupropion (no sexual side effects, weight neutral, lowers seizure threshold). Mirtazapine (sedating, weight gain — good for insomnia/poor appetite).
Onset: 2-4 weeks for clinical effect. Full trial: 4-6 weeks at adequate dose.
Treatment-resistant: Augmentation (lithium, aripiprazole, thyroid hormone), ketamine/esketamine (rapid onset), ECT (most effective treatment for severe/refractory depression).

SEROTONIN DISCONTINUATION SYNDROME: Flu-like symptoms, dizziness, "brain zaps," insomnia when stopping SSRIs/SNRIs abruptly. Taper slowly. Most common with paroxetine and venlafaxine (short half-lives).`},

{topic:"Anxiety Disorders",chapter:"Psychiatry",page:"p.184",content:`GENERALIZED ANXIETY DISORDER: Excessive worry about multiple domains for ≥6 months + ≥3 somatic symptoms (restlessness, fatigue, concentration difficulty, irritability, muscle tension, sleep disturbance). Treatment: SSRIs/SNRIs (first-line), buspirone, psychotherapy (CBT). Benzodiazepines for short-term/acute use only (dependence risk).
PANIC DISORDER: Recurrent unexpected panic attacks (sudden surge of intense fear peaking in minutes — palpitations, chest pain, SOB, derealization, fear of dying). Treatment: SSRIs (first-line), CBT. Benzodiazepines for acute attacks only.
SOCIAL ANXIETY DISORDER: Marked fear of social situations. Treatment: SSRIs, CBT. Propranolol for performance anxiety.
OCD: Obsessions (intrusive thoughts) + compulsions (repetitive behaviors to reduce anxiety). Treatment: High-dose SSRIs (fluvoxamine, sertraline), clomipramine (TCA), ERP (exposure and response prevention — most effective psychotherapy).
PTSD: After traumatic event — re-experiencing, avoidance, negative cognitions, hyperarousal for >1 month. Treatment: Trauma-focused CBT or EMDR (first-line), SSRIs (sertraline, paroxetine). Prazosin for nightmares.`},

{topic:"Alcohol Use Disorder & Withdrawal",chapter:"Psychiatry",page:"p.185",content:`SCREENING: CAGE questions (≥2 = positive), AUDIT-C, single question screening
AUD DIAGNOSIS: ≥2 of 11 DSM-5 criteria in past 12 months

ALCOHOL WITHDRAWAL TIMELINE
6-12h: Anxiety, tremor, diaphoresis, tachycardia, nausea, insomnia
12-48h: Seizures (generalized tonic-clonic, brief, usually self-limited)
48-72h: Delirium tremens (DTs — hallucinations, severe agitation, autonomic instability, mortality 5-15% if untreated)

MANAGEMENT
Assessment: CIWA-Ar scale (symptom-triggered dosing preferred over fixed schedule)
Benzodiazepines: First-line. Chlordiazepoxide (long-acting, oral, for mild-moderate). Diazepam (rapid onset, long-acting). Lorazepam (liver disease — no hepatic metabolism). Symptom-triggered: Give BZD when CIWA ≥10.
Refractory DTs: Phenobarbital loading, propofol or dexmedetomidine drip (ICU).
Supportive: Thiamine (100-500mg IV) BEFORE glucose, folate, multivitamin, fluid replacement, electrolyte correction (Mg, K, Phos).

MAINTENANCE
Naltrexone: Opioid antagonist. Reduces craving and heavy drinking days. PO or monthly IM (Vivitrol). Contraindicated with opioid use.
Acamprosate: NMDA/GABA modulation. Maintains abstinence. Safe in liver disease.
Disulfiram: Inhibits aldehyde dehydrogenase → unpleasant reaction if drink. Requires motivation and adherence. Avoid with liver disease.`},

{topic:"Opioid Use Disorder & Withdrawal",chapter:"Psychiatry",page:"p.186",content:`OPIOID WITHDRAWAL (NOT life-threatening but very uncomfortable): Lacrimation, rhinorrhea, yawning, piloerection, myalgia, diarrhea, nausea/vomiting, anxiety, dilated pupils. Onset depends on agent (short-acting 6-12h, long-acting 24-72h).
MANAGEMENT
Buprenorphine (Suboxone): Partial mu-agonist. Can be started in ED or inpatient. Must wait for moderate withdrawal before first dose (COWS ≥8-12) to avoid precipitated withdrawal — OR use low-dose initiation protocol (microdosing) to start without waiting.
Methadone: Full mu-agonist. Daily observed dosing at OTP clinic. Can start in hospital.
Symptomatic: Clonidine (autonomic symptoms), loperamide (diarrhea), ondansetron (nausea), NSAIDs (pain), hydroxyzine (anxiety).

OVERDOSE: Respiratory depression, miosis, altered consciousness. Treatment: Naloxone 0.4-2mg IV/IM/IN, repeat q2-3 min. Observe ≥4h (longer for methadone/long-acting opioids). Discharge with naloxone kit.

MEDICATIONS FOR OUD (MOUD): Buprenorphine, methadone, naltrexone (extended-release IM monthly — must be opioid-free 7-14 days before starting). MOUD reduces mortality by ~50%. All FDA-approved. No special waiver needed to prescribe buprenorphine.`},

{topic:"Other Substance Use",chapter:"Psychiatry",page:"p.187",content:`BENZODIAZEPINE WITHDRAWAL: Similar to alcohol withdrawal (seizures, DTs possible). Taper slowly (10-25% per week). Longer-acting BZD substitution (chlordiazepoxide or diazepam).
STIMULANT USE (cocaine, methamphetamine): Intoxication: Sympathomimetic (tachycardia, HTN, agitation, paranoia, seizures, MI, stroke). Treatment: Benzodiazepines (first-line for agitation and CV complications). Avoid beta-blockers in cocaine use (unopposed alpha stimulation). No FDA-approved medications for stimulant use disorder.
CANNABIS USE DISORDER: Intoxication: Euphoria, red eyes, dry mouth, increased appetite. Withdrawal: Irritability, insomnia, decreased appetite, anxiety (days to weeks). Cannabis hyperemesis syndrome: Cyclic vomiting, relieved by hot showers. Treatment: Cessation, capsaicin cream (topical).
SYNTHETIC CANNABINOIDS (K2/Spice): Unpredictable effects, severe psychosis, seizures, organ damage. NOT detected on standard UDS.
HALLUCINOGENS (LSD, psilocybin, PCP): LSD/psilocybin: Supportive care, benzodiazepines for agitation. PCP: Violent agitation, nystagmus. Benzodiazepines, avoid stimulation, watch for rhabdomyolysis.`},

{topic:"Drug Testing",chapter:"Psychiatry",page:"p.188",content:`URINE DRUG SCREEN (UDS): Immunoassay — rapid but cross-reactivity/false positives possible. Confirm with GC-MS if needed.
Standard panel (varies by institution): Amphetamines, benzodiazepines, cannabinoids, cocaine, opiates, PCP
NOT detected on standard UDS: Fentanyl (need specific fentanyl assay), buprenorphine, synthetic cannabinoids, LSD, GHB, kratom, gabapentin
FALSE POSITIVES: Amphetamines (pseudoephedrine, bupropion, labetalol, trazodone), benzodiazepines (sertraline), opiates (poppy seeds, dextromethorphan), PCP (dextromethorphan, diphenhydramine, venlafaxine, ketamine)

DETECTION WINDOWS (approximate)
Alcohol: 12-24h (EtG up to 80h)
Amphetamines: 1-3 days
Benzodiazepines: 3-7 days (long-acting up to 30 days)
Cocaine: 2-4 days
Cannabis: Single use 3-5 days, chronic use up to 30+ days
Opiates: 2-4 days
PCP: 7-14 days
Fentanyl: 1-3 days (specific assay required)`},

// ═══════════════════════════════════════
// PRIMARY CARE (abbreviated)
// ═══════════════════════════════════════

{topic:"Health Screening & Maintenance",chapter:"Primary Care",page:"p.189",content:`CANCER SCREENING
Breast: Mammogram every 1-2 years starting age 40-50 (guidelines vary). Earlier if high risk.
Cervical: Pap smear every 3 years (age 21-29) or Pap + HPV co-testing every 5 years (age 30-65).
Colorectal: Starting age 45. Colonoscopy q10y, or FIT annually, or Cologuard q3y.
Lung: Low-dose CT annually for age 50-80 with ≥20 pack-year smoking history (current or quit <15 years).
Prostate: Shared decision-making with PSA age 55-69.

OTHER SCREENING
AAA: One-time US for men 65-75 who ever smoked.
Hepatitis C: All adults 18-79 at least once.
HIV: All adults 15-65 at least once, more often if high risk.
Depression: PHQ-2/PHQ-9 annually.
Diabetes: Every 3 years starting age 35, earlier if risk factors.
Lipids: Every 5 years starting age 20. ASCVD risk calculation at age 40.
Osteoporosis: DEXA at 65 (women), 70 (men), earlier if risk factors.

IMMUNIZATIONS: Influenza (annual), COVID-19, Tdap (q10y), Shingrix (≥50), pneumococcal (PCV20 or PCV15→PPSV23 at 65 or high risk), HPV (through age 26, catch-up 27-45).`},

{topic:"Transgender Health",chapter:"Primary Care",page:"p.190",content:`Gender-affirming hormone therapy: Estrogen + anti-androgen (transfeminine), Testosterone (transmasculine). Monitor per Endocrine Society guidelines.
Screening: Follow organ-specific screening guidelines based on anatomy present (e.g., cervical cancer screening for transmasculine patients with cervix).
Mental health: Higher rates of depression, anxiety, suicidality. Affirming care improves outcomes.`},

{topic:"Women's Health",chapter:"Primary Care",page:"p.191",content:`CONTRACEPTION: Efficacy (most to least): IUD/implant > injection > pill/patch/ring > barrier. IUD: Copper (10 years, non-hormonal, can use as emergency contraception) or levonorgestrel (3-7 years). Emergency contraception: Plan B (levonorgestrel) within 72h, ella (ulipristal) within 120h.
MENOPAUSE: Average onset age 51. Symptoms: Hot flashes, vaginal dryness, mood changes, sleep disturbance. Treatment: HRT (estrogen ± progesterone) most effective for vasomotor symptoms. Start <60 or within 10 years of menopause. SSRIs/SNRIs, gabapentin for non-hormonal alternatives.
PREGNANCY: Prenatal vitamins (folic acid 400-800mcg), screening labs (blood type, CBC, rubella, hepatitis B, HIV, syphilis, UA/culture, GDM screen 24-28 weeks, GBS 36 weeks).`},

{topic:"Men's Health",chapter:"Primary Care",page:"p.192",content:`BPH: LUTS (frequency, urgency, nocturia, weak stream). AUA symptom score. Treatment: Alpha-blockers (tamsulosin — first-line for symptoms), 5-alpha reductase inhibitors (finasteride — shrinks prostate, takes months). Combination for large prostates.
ERECTILE DYSFUNCTION: Assess vascular risk factors (marker of CV disease). Treatment: PDE5 inhibitors (sildenafil, tadalafil) — contraindicated with nitrates. Consider testosterone if low.
PROSTATE CANCER SCREENING: PSA shared decision-making age 55-69. If elevated → MRI → biopsy. Gleason score guides management.
TESTICULAR CANCER: Young men (15-35). Painless testicular mass. US to confirm. Tumor markers: AFP, beta-hCG, LDH. Radical inguinal orchiectomy (NOT trans-scrotal biopsy).`},

{topic:"Sleep Medicine",chapter:"Primary Care",page:"p.193",content:`OBSTRUCTIVE SLEEP APNEA: Snoring, witnessed apneas, daytime somnolence (Epworth Sleepiness Scale). Risk: Obesity, male, large neck circumference. Diagnosis: Polysomnography (AHI ≥5 with symptoms = OSA). Treatment: CPAP (first-line for moderate-severe), weight loss, positional therapy, oral appliance (mild). Untreated OSA: HTN, afib, stroke, HF, MVA risk.
INSOMNIA: CBT-I is first-line treatment (more effective long-term than medications). Pharmacologic: Melatonin, trazodone, suvorexant (orexin antagonist), ramelteon. Avoid: Benzodiazepines long-term (dependence, falls in elderly), Z-drugs (zolpidem — complex sleep behaviors).
RESTLESS LEGS SYNDROME: Urge to move legs, worse at rest/evening, relieved by movement. Check ferritin (treat if <75). Treatment: Gabapentin (first-line), dopamine agonists (pramipexole — risk of augmentation with long-term use).`},

{topic:"HEENT Concerns",chapter:"Primary Care",page:"p.194",content:`RED EYE: Conjunctivitis (viral vs bacterial vs allergic), subconjunctival hemorrhage (benign), acute angle-closure glaucoma (painful, fixed mid-dilated pupil, emergent ophthalmology), iritis/uveitis (photophobia, miosis), corneal abrasion/ulcer (fluorescein stain).
HEARING LOSS: Conductive (cerumen, otitis media, otosclerosis) vs sensorineural (presbycusis, noise, Meniere's, acoustic neuroma). Weber/Rinne test. Audiometry.
SINUSITIS: See Infectious Disease section.
ORAL: Aphthous ulcers (common, self-limited), oral candidiasis (immunosuppressed, inhaled steroids — treat with nystatin or fluconazole), leukoplakia (premalignant — biopsy).`},

{topic:"Nodules",chapter:"Primary Care",page:"p.195",content:`THYROID NODULES: See Endocrinology section. TSH first, then US characterization, FNA based on size and features.
PULMONARY NODULES: Incidental finding on CT. Follow Fleischner Society guidelines based on size, solid vs subsolid, and risk factors. Low risk <6mm solid: No follow-up needed. High risk or >8mm: Follow-up CT, PET/CT, or biopsy. Lung-RADS for screening-detected nodules.
ADRENAL INCIDENTALOMA: Found on CT. Assess for: Hormone excess (cortisol → 1mg DST, catecholamines → plasma metanephrines/24h urine, aldosterone/renin if hypertensive), malignancy (size >4cm, heterogeneous, high HU on unenhanced CT → surgical evaluation). Follow-up imaging if stable.
LIVER LESIONS: Hemangioma (most common benign), FNH, hepatic adenoma (stop OCPs, surgery if >5cm), hepatocellular carcinoma (cirrhotics — AFP + US screening q6 months).`},

{topic:"Musculoskeletal Pain",chapter:"Primary Care",page:"p.196",content:`LOW BACK PAIN: Most common MSK complaint. Red flags: Saddle anesthesia, urinary retention/incontinence, progressive weakness (cauda equina → emergent MRI), unexplained weight loss, fever, history of cancer, IV drug use. Most cases: Self-limited, conservative management (activity modification, NSAIDs, physical therapy). Imaging only if red flags or persistent >6 weeks.
SHOULDER PAIN: Rotator cuff (impingement, tear), adhesive capsulitis (frozen shoulder), biceps tendinitis, AC joint pathology. Exam: Neer, Hawkins, drop arm, empty can tests. Treatment: PT, NSAIDs, subacromial steroid injection, surgery for complete tears in active patients.
KNEE PAIN: OA (medial compartment), meniscal tear (mechanical symptoms — locking, catching), ACL tear (pivot injury, Lachman test), baker cyst, bursitis. MRI if concerning for internal derangement.
GOUT/PSEUDOGOUT: See Rheumatology section.`},

{topic:"Immigrant & Refugee Health",chapter:"Primary Care",page:"p.197",content:`SCREENING: TB (IGRA or PPD), hepatitis B and C, HIV, STIs, parasites (Strongyloides serology, stool O&P), malaria smear (if symptomatic from endemic area), lead (children), vaccination catch-up, dental, vision, hearing, mental health (trauma, PTSD). Country-specific endemic infections: Chagas (Central/South America), schistosomiasis (Africa, SE Asia), cysticercosis (Latin America).`},

{topic:"Climate Change & Health",chapter:"Primary Care",page:"p.198",content:`Health impacts: Heat-related illness, worsened air quality (asthma, COPD exacerbations), vector-borne disease expansion, food/water insecurity, mental health effects, climate migration. Vulnerable populations: Elderly, children, outdoor workers, low-income communities. Provider role: Counsel on heat safety, screen for environmental exposures, advocate for public health policy.`},

{topic:"Health Equity & Insurance",chapter:"Primary Care",page:"p.199",content:`SOCIAL DETERMINANTS OF HEALTH: Economic stability, education, healthcare access, neighborhood/built environment, social/community context. Screen with validated tools. Connect to resources: Social work, case management, community health workers. Insurance navigation: Medicare (≥65, ESRD, disability), Medicaid (income-based), marketplace plans. Prior authorization challenges. Medication assistance programs.`},

// ═══════════════════════════════════════
// CONSULTANTS (abbreviated)
// ═══════════════════════════════════════

{topic:"Calling Consults",chapter:"Consultants",page:"p.200",content:`EFFECTIVE CONSULT REQUEST: Specific question ("Is this patient a candidate for X?" not "please evaluate"). Provide: Brief history, relevant data, what you've done so far, urgency level. Document the consultation.`},
{topic:"Perioperative Medicine",chapter:"Consultants",page:"p.201",content:`CARDIAC RISK: RCRI score (≥2 high risk). Consider stress testing if: Poor functional capacity (<4 METs) AND elevated risk AND will change management. Continue beta-blockers, statins, aspirin (if on). Hold ACEi/ARB morning of surgery (resume when euvolemic). Bridging anticoagulation: Only for high-risk (see Hematology). VTE prophylaxis: Chemical + mechanical for most surgeries. Blood glucose: Target 140-180.`},
{topic:"Dermatology",chapter:"Consultants",page:"p.202",content:`SKIN EXAM: Distribution, morphology (macule, papule, plaque, vesicle, bulla, pustule, nodule), color, pattern. Urgent consult: SJS/TEN, DRESS, pemphigus, necrotizing fasciitis, melanoma. Drug rashes: Morbilliform (most common, 7-14 days after drug start), urticarial, fixed drug eruption, SJS/TEN. PSORIASIS: Silvery scales on extensor surfaces. Treatment: Topical steroids → phototherapy → systemic (MTX, biologics). ECZEMA: Pruritic, dry, flexural distribution. Treatment: Moisturizers, topical steroids, calcineurin inhibitors, dupilumab (severe).`},
{topic:"Surgery",chapter:"Consultants",page:"p.203",content:`ACUTE ABDOMEN: Peritoneal signs (guarding, rigidity, rebound), free air on imaging → surgical emergency. Common surgical emergencies: Appendicitis, bowel perforation, strangulated hernia, mesenteric ischemia, ruptured AAA. Consult surgery early — do NOT delay for additional workup if clinical picture is clear.`},
{topic:"Urology",chapter:"Consultants",page:"p.204",content:`EMERGENCIES: Testicular torsion (<6h for salvage), urinary retention (Foley, then workup), priapism (>4h ischemic = emergency), renal colic with infection (obstructive pyelonephritis → urgent stent/nephrostomy), fournier's gangrene (necrotizing fasciitis of perineum → emergent surgical debridement).`},
{topic:"ENT",chapter:"Consultants",page:"p.205",content:`EMERGENCIES: Peritonsillar abscess (trismus, "hot potato" voice → needle aspiration or I&D), epistaxis (anterior → pressure/packing, posterior → balloon/ENT), Ludwig's angina (floor of mouth infection → airway emergency), epiglottitis (secure airway first), foreign body aspiration.`},
{topic:"Ophthalmology",chapter:"Consultants",page:"p.206",content:`EMERGENCIES: Chemical burn (immediate copious irrigation before anything else), acute angle-closure glaucoma (painful red eye, fixed mid-dilated pupil, elevated IOP → timolol, pilocarpine, acetazolamide), retinal detachment (painless vision loss, flashes, "curtain" over vision), central retinal artery occlusion (painless acute monocular vision loss — "stroke of the eye" → tPA consideration), endophthalmitis (post-operative infection).`},
{topic:"OB/GYN",chapter:"Consultants",page:"p.207",content:`MUST-NOT-MISS: Ectopic pregnancy (abdominal pain + positive hCG → transvaginal US), ovarian torsion (acute pelvic pain, nausea → emergent US/OR), placental abruption (vaginal bleeding + abdominal pain + fetal distress), preeclampsia (HTN + proteinuria after 20 weeks — treat with magnesium if severe, delivery is cure). Pregnancy-safe medications: Acetaminophen (not NSAIDs), penicillins, cephalosporins, erythromycin. Avoid: Warfarin, DOACs, ACEi/ARB, statins, methotrexate, fluoroquinolones, tetracyclines.`},

// ═══════════════════════════════════════
// RADIOLOGY & PROCEDURES (abbreviated)
// ═══════════════════════════════════════

{topic:"Radiology Basics",chapter:"Radiology",page:"p.208",content:`ORDERING IMAGING: Right test, right patient, right time. Communicate clinical question clearly. ACR Appropriateness Criteria as guide. Minimize radiation (ALARA principle). Pregnancy: US and MRI preferred (no ionizing radiation).`},
{topic:"Contrast",chapter:"Radiology",page:"p.209",content:`IV CONTRAST: Risk of contrast-induced AKI (CIN) — hydrate with NS if eGFR <30. Hold metformin 48h after contrast (lactic acidosis risk if AKI develops). Contrast allergy premedication: Prednisone 50mg at 13h/7h/1h + diphenhydramine 50mg at 1h before. Gadolinium (MRI): Risk of nephrogenic systemic fibrosis in eGFR <30 (use Group II agents if needed).`},
{topic:"Protocols",chapter:"Radiology",page:"p.210",content:`CT WITH CONTRAST: Pulmonary (CTPA for PE), abdomen/pelvis (appendicitis, diverticulitis, abscess, bowel obstruction), pancreas protocol (pancreatic masses). CT WITHOUT CONTRAST: Kidney stones, head CT for acute stroke/bleeding, lung cancer screening. MRI: Brain (MS, tumor, stroke if CT unclear), spine (cord compression), joint (meniscal/ligament tears, AVN), liver (characterize lesions), cardiac (cardiomyopathy, viability).`},
{topic:"Interpretation of Common Studies",chapter:"Radiology",page:"p.211",content:`LINES AND TUBES ON CXR: ETT: 3-5cm above carina. Central line: Tip at cavoatrial junction (SVC/RA junction). NG tube: Tip below diaphragm, in stomach. Chest tube: Tip at apex for pneumothorax, dependent position for effusion. PICC: Tip at cavoatrial junction. Swan-Ganz: Tip in proximal PA (should NOT be wedged persistently).`},

{topic:"Ultrasound Basics",chapter:"Procedures",page:"p.212",content:`POCUS APPLICATIONS: Cardiac (parasternal long/short axis, apical 4-chamber, subxiphoid), Lung (A-lines normal, B-lines = pulmonary edema, absent lung sliding = pneumothorax), IVC (collapsibility for volume assessment), FAST exam (free fluid — trauma), soft tissue (abscess identification), vascular access guidance. Linear probe: Superficial structures, vascular access. Curvilinear: Abdominal, renal, FAST. Phased array: Cardiac, lung.`},
{topic:"Ultrasound-Guided Peripheral IV",chapter:"Procedures",page:"p.213",content:`Indication: Difficult IV access (obesity, IV drug use, edema, prior access failure). Technique: Linear probe, long-axis preferred for cannulation success. Target brachial or basilic vein above antecubital fossa. Use tourniquet. Insert at 30-45° angle under direct visualization. Advance catheter off needle once flash.`},
{topic:"Central Line",chapter:"Procedures",page:"p.214",content:`SITES: Internal jugular (preferred — lower pneumothorax risk, US-guided), subclavian (lower infection risk, cosmesis), femoral (easiest, highest infection risk, no pneumothorax risk — good for emergencies). Seldinger technique under US guidance. Sterile procedure (cap, mask, gown, gloves, full drape). Confirm with CXR (tip at cavoatrial junction, rule out pneumothorax). COMPLICATIONS: Pneumothorax, arterial puncture, air embolism, infection (CLABSI — daily assessment for line necessity, chlorhexidine dressing, hand hygiene).`},
{topic:"Arterial Line",chapter:"Procedures",page:"p.215",content:`INDICATION: Continuous BP monitoring (shock, vasopressors, hypertensive emergency), frequent ABGs. SITES: Radial (preferred, collateral flow via ulnar artery), femoral, brachial, dorsalis pedis. Modified Allen test (though evidence for utility is debated). US-guided preferred. Complications: Thrombosis, ischemia (rare with radial), hematoma, infection.`},
{topic:"Intraosseous Line",chapter:"Procedures",page:"p.216",content:`INDICATION: Emergency vascular access when IV cannot be obtained (cardiac arrest, severe shock, pediatric emergencies). SITE: Proximal tibia (most common), humeral head. Device: EZ-IO drill. Can infuse any IV medication, fluids, blood products through IO. Flush with 10mL NS. Painful — administer 2% lidocaine 40mg IO before infusion if patient conscious. Remove within 24h (replace with IV access).`},
{topic:"Paracentesis",chapter:"Procedures",page:"p.217",content:`INDICATION: New-onset ascites (diagnostic), suspected SBP, symptomatic tense ascites (therapeutic). SITE: LLQ preferred (less bowel), 2 fingerbreadths medial and cephalad to ASIS. US-guided to confirm fluid pocket. STUDIES: Cell count with diff (PMN ≥250 = SBP), albumin (SAAG = serum albumin − ascites albumin; ≥1.1 = portal HTN), total protein, culture (inoculate blood culture bottles at bedside), glucose, LDH, cytology if malignancy suspected. Large-volume: Replace albumin 6-8g per liter removed if >5L. Coagulopathy/thrombocytopenia NOT absolute contraindication.`},
{topic:"Lumbar Puncture",chapter:"Procedures",page:"p.218",content:`INDICATION: Suspected meningitis/encephalitis, SAH (if CT negative), MS workup, normal pressure hydrocephalus, intrathecal therapy. CONTRAINDICATIONS: Mass lesion with midline shift (risk of herniation → get CT head first if papilledema, focal deficits, or immunocompromised), coagulopathy (INR >1.5, platelets <50K — relative), skin infection at site. POSITION: Lateral decubitus or sitting. L3-L4 or L4-L5 interspace. STUDIES: Opening pressure (normal 6-20 cmH2O), tube 1 (cell count), tube 2 (glucose, protein), tube 3 (Gram stain, culture), tube 4 (cell count — compare tube 1 vs 4 for traumatic tap vs SAH), additional (viral PCR, oligoclonal bands, cytology). Post-LP headache: Positional (worse upright). Treatment: Caffeine, fluids, analgesics, epidural blood patch if persistent.`},
{topic:"Thoracentesis",chapter:"Procedures",page:"p.219",content:`INDICATION: New pleural effusion (diagnostic), symptomatic effusion (therapeutic). SITE: Midscapular or posterior axillary line, 1-2 interspaces below fluid level on US. US-guided strongly recommended. STUDIES: pH, cell count with diff, glucose, protein, LDH, Gram stain/culture, cytology. Light's criteria (exudative if ANY): Pleural protein/serum protein >0.5, pleural LDH/serum LDH >0.6, pleural LDH >2/3 upper limit of normal serum LDH. TRANSUDATIVE: HF (#1), cirrhosis, nephrotic. EXUDATIVE: Infection (empyema, TB), malignancy, PE, autoimmune. Limit therapeutic drainage to ≤1.5L per session (re-expansion pulmonary edema risk). Complications: Pneumothorax, bleeding, infection, re-expansion pulmonary edema.`},
{topic:"Pericardial Drain",chapter:"Procedures",page:"p.220",content:`PERICARDIOCENTESIS: Indication: Tamponade (hemodynamic compromise from pericardial effusion). Approach: Subxiphoid (most common), US-guided preferred (apical approach if best window). Technique: Advance needle under continuous US or with ECG on needle tip (ST elevation if touching myocardium). Aspirate fluid → send for cell count, culture, cytology, protein/LDH. Pericardial drain can be left in place for ongoing drainage. Surgical pericardial window: For recurrent effusions (often malignant). Complication: Myocardial perforation, coronary artery laceration, arrhythmia.`},
{topic:"Fluid Analysis",chapter:"Procedures",page:"p.221",content:`PLEURAL: See Thoracentesis. ASCITIC: See Paracentesis. SYNOVIAL (arthrocentesis): WBC <2000 = non-inflammatory. 2000-50,000 = inflammatory (RA, gout, pseudogout). >50,000 = likely septic (culture!). Crystal analysis: MSU (gout — needle-shaped, negatively birefringent), CPPD (pseudogout — rhomboid, positively birefringent). Always send Gram stain and culture if infection suspected. CSF: See Lumbar Puncture.`},
{topic:"Tube Management",chapter:"Procedures",page:"p.222",content:`CHEST TUBE: Confirm placement on CXR. Monitor output (color, volume). Water seal or suction (-20 cmH₂O typically). Remove when: Output <200 mL/day (effusion) or no air leak + lung re-expanded (pneumothorax). Clamp before removal. Post-removal CXR.
FOLEY CATHETER: Indications: Urinary retention, critical illness (accurate I/O), perioperative, open sacral wounds with incontinence. Remove as soon as possible (CAUTI risk increases with duration). Nurse-driven removal protocols reduce infections.
NG/OG TUBE: Decompression (SBO, ileus), medication delivery. Confirm placement: Aspirate + CXR (tip in stomach, not in lung or esophagus). Complications: Sinusitis (prolonged use), aspiration, esophageal erosion.`},
{topic:"Exposures & Needle Sticks",chapter:"Procedures",page:"p.223",content:`See Infection Control section. Immediately wash wound with soap and water. Report to occupational health. Source testing (HIV, HBV, HCV). HIV PEP: Start within 72h (tenofovir/emtricitabine + dolutegravir × 28 days). HBV: Check vaccination status/titer. If non-immune: HBIG + vaccine series. HCV: No prophylaxis available. Monitor HCV RNA at 4-6 weeks.`},

// ═══════════════════════════════════════
// LOGISTICS
// ═══════════════════════════════════════

{topic:"Monitoring & Prophylaxis",chapter:"Logistics",page:"p.224",content:`DVT PROPHYLAXIS: All hospitalized patients need assessment. Chemical: Enoxaparin 40mg SQ daily or heparin 5000u SQ q8-12h. Mechanical: SCDs (sequential compression devices) if anticoagulation contraindicated. Duration: Throughout hospitalization; extended prophylaxis post-discharge for high-risk surgical patients.
STRESS ULCER PROPHYLAXIS: PPI for ICU patients with: Mechanical ventilation >48h, coagulopathy, history of GI bleed, TBI, burns, spinal cord injury. Not needed for most floor patients.
FALL PRECAUTIONS: Assess risk (age, medications, prior falls, gait impairment). Low bed, call light in reach, non-skid footwear, minimize sedating medications, bed alarm if high risk.
GLYCEMIC MONITORING: Inpatient glucose targets 140-180 mg/dL. Point-of-care glucose before meals and bedtime. Insulin adjustments daily.`},

{topic:"Peri-Procedural Anticoagulation",chapter:"Logistics",page:"p.225",content:`See Hematology — Anticoagulation Management section for detailed perioperative bridging, reversal agents, and DOAC management guidance.`},

{topic:"Senior On Encounters",chapter:"Logistics",page:"p.226",content:`CROSS-COVER TIPS: Review patient list before shift. Know code statuses. Anticipate common overnight issues: Insomnia, pain, fever, tachycardia, hypotension, hypo/hyperglycemia, falls, AMS, chest pain, SOB, hypoxia. Use SBAR (Situation, Background, Assessment, Recommendation) for communication. Escalate early if concerned. Document all encounters and overnight events clearly for the primary team.`},

{topic:"Post-Acute Care",chapter:"Logistics",page:"p.227",content:`DISPOSITION OPTIONS: Home (with or without home health services), skilled nursing facility (SNF — requires 3-day qualifying hospital stay for Medicare), long-term acute care (LTAC — for patients needing prolonged acute care, e.g., vent weaning), inpatient rehabilitation (IRH — requires ability to participate in 3h therapy/day), acute rehabilitation facility. Discharge planning: Start early, involve social work/case management, medication reconciliation, follow-up appointments within 7-14 days, patient education.`},

{topic:"Microaggressions/Bias, Patient-Directed Discharge, ICE",chapter:"Logistics",page:"p.228",content:`ADDRESSING BIAS: Name the behavior, not the person. Document objectively. Support targeted team members. Involve patient relations/social work if needed. Debrief as a team. Hospital policy should protect staff from harassment while maintaining patient care standards.
PATIENT-DIRECTED DISCHARGE (Against Medical Advice): Decision-making capacity assessment required. Informed refusal: Explain risks, document understanding, provide safe discharge plan regardless (prescriptions, follow-up, return precautions). Do NOT use AMA as punitive measure. Insurance coverage is NOT automatically denied for AMA discharges (common myth).`},

{topic:"Hospital Directory & Key Contacts",chapter:"Logistics",page:"p.229",content:`This section covers essential phone numbers, paging directories, and contact information. In any hospital setting, know how to reach: Rapid Response team, Code Blue team, MICU/SICU, pharmacy, blood bank, radiology (for urgent studies), nursing supervisor, chaplaincy, social work, interpreter services, patient relations, security, transfer center.`}

];

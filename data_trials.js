// ══════════════════════════════════════════════════════════════
// DATA_TRIALS — Landmark Internal Medicine Clinical Trials
// Source: lmtrials.com (summarized)
// ══════════════════════════════════════════════════════════════

export const LANDMARK_TRIALS = {
  "Cardiology": {
    "Acute Coronary Syndrome / CAD": [
      { name: "CURE", year: 2001, journal: "NEJM", summary: "Clopidogrel + aspirin in NSTEMI reduced composite of CV death, MI, or stroke by 20% vs aspirin alone. Major bleeding increased.", takeaway: "DAPT is standard for ACS." },
      { name: "CLARITY-TIMI 28", year: 2005, journal: "NEJM", summary: "Adding clopidogrel to aspirin + fibrinolysis in STEMI improved infarct-artery patency and reduced ischemic complications in patients ≤75 years.", takeaway: "Clopidogrel benefits extend to STEMI with fibrinolysis." },
      { name: "GUSTO", year: 1993, journal: "NEJM", summary: "Accelerated tPA + IV heparin had lower 30-day mortality (6.3%) vs streptokinase regimens (7.2–7.4%) in STEMI.", takeaway: "Accelerated tPA is superior for STEMI thrombolysis." },
      { name: "PLATO", year: 2009, journal: "NEJM", summary: "Ticagrelor vs clopidogrel in ACS reduced composite of CV death, MI, stroke (9.8% vs 11.7%) without increasing overall major bleeding.", takeaway: "Ticagrelor preferred over clopidogrel in ACS." },
      { name: "TRITON-TIMI 38", year: 2007, journal: "NEJM", summary: "Prasugrel vs clopidogrel in ACS with planned PCI reduced ischemic events but increased major and fatal bleeding.", takeaway: "Prasugrel: more potent antiplatelet but more bleeding." },
      { name: "STOP-DAPT 2", year: 2019, journal: "JAMA", summary: "1-month DAPT followed by clopidogrel monotherapy was non-inferior to 12-month DAPT after PCI with DES for net clinical benefit.", takeaway: "Short DAPT may be safe after DES in low-risk patients." }
    ],
    "Heart Failure": [
      { name: "PARADIGM-HF", year: 2014, journal: "NEJM", summary: "Sacubitril/valsartan vs enalapril in HFrEF (EF ≤40%) reduced CV death and HF hospitalization by 20%.", takeaway: "ARNI superior to ACEi in HFrEF — now standard of care." },
      { name: "DAPA-HF", year: 2019, journal: "NEJM", summary: "Dapagliflozin reduced worsening HF events and CV death in HFrEF regardless of diabetes status.", takeaway: "SGLT2 inhibitors benefit HFrEF ± diabetes." },
      { name: "RALES", year: 1999, journal: "NEJM", summary: "Spironolactone reduced all-cause mortality by 30% in severe HFrEF (EF ≤35%, NYHA III–IV).", takeaway: "MRA reduces mortality in severe HFrEF." },
      { name: "EMPEROR-Preserved", year: 2021, journal: "NEJM", summary: "Empagliflozin reduced CV death or HF hospitalization in HFpEF (EF >40%). First drug to show benefit in HFpEF.", takeaway: "SGLT2i is first proven therapy for HFpEF." },
      { name: "COPERNICUS", year: 2001, journal: "NEJM", summary: "Carvedilol reduced all-cause mortality by 35% in severe HFrEF (EF <25%), even in decompensated patients once stabilized.", takeaway: "Beta-blockers benefit even severe HFrEF." }
    ],
    "Atrial Fibrillation": [
      { name: "RE-LY", year: 2009, journal: "NEJM", summary: "Dabigatran 150mg BID superior to warfarin for stroke prevention in AF with similar bleeding. 110mg was non-inferior with less bleeding.", takeaway: "Dabigatran is effective alternative to warfarin in AF." },
      { name: "ARISTOTLE", year: 2011, journal: "NEJM", summary: "Apixaban was superior to warfarin for stroke prevention in AF, with less bleeding and lower mortality.", takeaway: "Apixaban preferred over warfarin in non-valvular AF." },
      { name: "ROCKET AF", year: 2011, journal: "NEJM", summary: "Rivaroxaban was non-inferior to warfarin for stroke prevention in AF with similar bleeding rates.", takeaway: "Rivaroxaban is an alternative to warfarin in AF." },
      { name: "LAAOS III", year: 2021, journal: "NEJM", summary: "Surgical left atrial appendage occlusion during cardiac surgery in AF did not significantly reduce stroke or systemic embolism.", takeaway: "Surgical LAA occlusion did not reduce stroke." }
    ],
    "Lipids & Prevention": [
      { name: "4S", year: 1994, journal: "Lancet", summary: "Simvastatin reduced total mortality by 30% and major coronary events by 34% in patients with CHD and elevated cholesterol.", takeaway: "Statins reduce mortality in secondary prevention." },
      { name: "JUPITER", year: 2008, journal: "NEJM", summary: "Rosuvastatin in patients with normal LDL but elevated CRP (>2) reduced major CV events by 44%.", takeaway: "Statins benefit patients with elevated CRP even if LDL normal." },
      { name: "FOURIER", year: 2017, journal: "NEJM", summary: "Evolocumab (PCSK9i) added to statin therapy reduced CV events by 15% in patients with established ASCVD.", takeaway: "PCSK9 inhibitors provide additional CV risk reduction." }
    ],
    "Hypertension": [
      { name: "SPRINT", year: 2015, journal: "NEJM", summary: "Intensive BP target (<120 systolic) vs standard (<140) reduced CV events by 25% and all-cause mortality by 27% in high-risk non-diabetics.", takeaway: "Intensive BP lowering reduces mortality in high-risk patients." },
      { name: "ALLHAT", year: 2002, journal: "JAMA", summary: "Chlorthalidone (thiazide) was as effective as amlodipine or lisinopril for CV outcomes and superior for preventing HF.", takeaway: "Thiazide diuretics are effective first-line for hypertension." }
    ]
  },
  "Pulm/Critical Care": {
    "Sepsis & Shock": [
      { name: "RIVERS (EGDT)", year: 2001, journal: "NEJM", summary: "Early goal-directed therapy reduced in-hospital mortality (30.5% vs 46.5%) in severe sepsis/septic shock.", takeaway: "Early aggressive resuscitation improves sepsis outcomes." },
      { name: "ProCESS", year: 2014, journal: "NEJM", summary: "Protocol-based EGDT did not improve outcomes vs usual care in septic shock. Challenged RIVERS findings.", takeaway: "Protocolized EGDT not superior to good usual care." },
      { name: "SEPSISPAM", year: 2014, journal: "NEJM", summary: "MAP target 80–85 vs 65–70 mmHg in septic shock showed no mortality difference at 28 or 90 days.", takeaway: "MAP ≥65 is sufficient target in septic shock." },
      { name: "SOAP II", year: 2010, journal: "NEJM", summary: "Dopamine vs norepinephrine in shock: similar mortality but more arrhythmias with dopamine (24% vs 12%).", takeaway: "Norepinephrine is first-line vasopressor for shock." },
      { name: "TRISS", year: 2014, journal: "NEJM", summary: "Transfusion threshold Hgb 7 vs 9 g/dL in septic shock showed similar 90-day mortality with fewer transfusions.", takeaway: "Restrictive transfusion (Hgb <7) is safe in septic shock." },
      { name: "VITAMINS", year: 2020, journal: "JAMA", summary: "Vitamin C + hydrocortisone + thiamine (metabolic resuscitation) did not reduce duration of vasopressors in septic shock vs hydrocortisone alone.", takeaway: "Vitamin C cocktail does not improve septic shock outcomes." }
    ],
    "Mechanical Ventilation & ARDS": [
      { name: "ARDSNet (ARMA)", year: 2000, journal: "NEJM", summary: "Low tidal volume ventilation (6 mL/kg IBW) vs traditional (12 mL/kg) reduced mortality by 22% in ARDS.", takeaway: "Low tidal volume ventilation is standard in ARDS." },
      { name: "PROSEVA", year: 2013, journal: "NEJM", summary: "Early prone positioning (≥16 hrs/day) in severe ARDS reduced 28-day mortality (16% vs 32.8%).", takeaway: "Prone positioning saves lives in severe ARDS." },
      { name: "ACURASYS", year: 2010, journal: "NEJM", summary: "Early neuromuscular blockade (cisatracurium ×48h) in early severe ARDS improved 90-day survival.", takeaway: "Early paralysis may benefit severe ARDS." },
      { name: "ROSE", year: 2019, journal: "NEJM", summary: "Neuromuscular blockade for 48h did NOT reduce mortality in moderate-severe ARDS vs usual care with lighter sedation.", takeaway: "Routine paralysis in ARDS is not supported (contradicts ACURASYS)." },
      { name: "FLORALI (HIGH-FLOW)", year: 2015, journal: "NEJM", summary: "High-flow nasal cannula reduced 90-day mortality vs standard O2 or NIV in acute hypoxemic respiratory failure (P/F ≤300).", takeaway: "HFNC may be preferred over NIV in acute hypoxemic respiratory failure." }
    ]
  },
  "Infectious Disease": {
    "COVID-19": [
      { name: "RECOVERY (Dexamethasone)", year: 2021, journal: "NEJM", summary: "Dexamethasone 6mg ×10 days reduced 28-day mortality in hospitalized COVID patients on O2 (23.3% vs 26.2%) or ventilator (29.3% vs 41.4%). No benefit without respiratory support.", takeaway: "Steroids benefit COVID patients needing respiratory support." },
      { name: "ACTT-1 (Remdesivir)", year: 2020, journal: "NEJM", summary: "Remdesivir shortened recovery time (10 vs 15 days) in hospitalized COVID with lower respiratory tract infection.", takeaway: "Remdesivir modestly speeds COVID recovery." }
    ],
    "Endocarditis & Bacteremia": [
      { name: "POET", year: 2019, journal: "NEJM", summary: "IV-to-oral antibiotic switch in stable left-sided endocarditis was non-inferior to continued IV therapy for composite of death, surgery, embolic events, or relapse.", takeaway: "IV-to-oral switch is safe in stable endocarditis." }
    ],
    "Pneumonia": [
      { name: "CAP-START", year: 2015, journal: "NEJM", summary: "In moderate-severity CAP, beta-lactam monotherapy was non-inferior to fluoroquinolone or beta-lactam + macrolide for 90-day mortality.", takeaway: "Beta-lactam monotherapy may be sufficient for moderate CAP." }
    ]
  },
  "Nephrology": {
    "AKI": [
      { name: "ACT", year: 2011, journal: "Circulation", summary: "N-acetylcysteine did NOT prevent contrast-induced AKI vs placebo in patients undergoing angiography.", takeaway: "NAC does not prevent contrast nephropathy." },
      { name: "IDEAL-ICU", year: 2018, journal: "NEJM", summary: "Early vs delayed RRT initiation in septic shock with severe AKI showed no 90-day mortality difference.", takeaway: "Early dialysis does not improve outcomes in septic AKI." }
    ],
    "IV Fluids": [
      { name: "SALT-ED", year: 2018, journal: "NEJM", summary: "Balanced crystalloids vs saline in non-ICU patients: lower adverse kidney events (4.7% vs 5.6%) but no difference in hospital-free days.", takeaway: "Balanced crystalloids may be slightly renoprotective." },
      { name: "SMART", year: 2018, journal: "NEJM", summary: "Balanced crystalloids vs saline in ICU reduced composite of death, new RRT, or persistent renal dysfunction.", takeaway: "Use balanced crystalloids over normal saline in ICU." }
    ],
    "CKD": [
      { name: "DAPA-CKD", year: 2020, journal: "NEJM", summary: "Dapagliflozin reduced sustained eGFR decline ≥50%, ESKD, or renal/CV death by 39% in CKD ± diabetes.", takeaway: "SGLT2 inhibitors are renoprotective in CKD." },
      { name: "EMPA-KIDNEY", year: 2023, journal: "NEJM", summary: "Empagliflozin reduced kidney disease progression or CV death by 28% across broad CKD populations.", takeaway: "SGLT2i benefits extend broadly across CKD spectrum." }
    ]
  },
  "Gastroenterology": {
    "Upper GI": [
      { name: "ASTRONAUT", year: 1998, journal: "NEJM", summary: "Omeprazole was superior to ranitidine for healing and preventing NSAID-associated ulcers (80% vs 63%).", takeaway: "PPIs are preferred over H2RAs for NSAID ulcers." },
      { name: "UGI Bleed Timing", year: 2020, journal: "NEJM", summary: "Urgent endoscopy (<6h) vs early (6–24h) in high-risk UGI bleeding showed no mortality benefit with urgent approach.", takeaway: "Endoscopy within 24h is adequate for high-risk UGI bleeds." }
    ],
    "Liver": [
      { name: "STOPAH", year: 2015, journal: "NEJM", summary: "Prednisolone did not significantly reduce 28-day mortality in severe alcoholic hepatitis. Pentoxifylline showed no benefit.", takeaway: "Steroids have uncertain benefit in alcoholic hepatitis." }
    ],
    "IBD": [
      { name: "SONIC", year: 2010, journal: "NEJM", summary: "Infliximab + azathioprine was superior to either alone for inducing corticosteroid-free remission in moderate-to-severe Crohn's disease.", takeaway: "Combination biologic + immunomodulator is best for Crohn's." }
    ]
  },
  "Hematology": {
    "Transfusion": [
      { name: "TRICC", year: 1999, journal: "NEJM", summary: "Restrictive transfusion (Hgb <7, goal 7–9) was at least as effective as liberal (Hgb <10, goal 10–12) in critically ill patients. In-hospital mortality trended lower with restrictive strategy.", takeaway: "Transfuse at Hgb <7 in most ICU patients." },
      { name: "CHOIR", year: 2006, journal: "NEJM", summary: "Targeting Hgb 13.5 vs 11.3 g/dL with epoetin alfa in CKD increased composite of death, MI, HF hospitalization, stroke.", takeaway: "Don't target normal Hgb with ESAs in CKD." }
    ],
    "VTE": [
      { name: "EINSTEIN-DVT/PE", year: 2010, journal: "NEJM", summary: "Rivaroxaban was non-inferior to standard enoxaparin/warfarin for DVT and PE treatment with similar bleeding.", takeaway: "DOACs are effective for VTE treatment." },
      { name: "AMPLIFY", year: 2013, journal: "NEJM", summary: "Apixaban was non-inferior to standard anticoagulation for VTE with significantly less major bleeding.", takeaway: "Apixaban: equally effective, less bleeding for VTE." },
      { name: "CHEST (Aspirin post-VTE)", year: 2012, journal: "NEJM", summary: "Low-dose aspirin after completing anticoagulation for unprovoked VTE reduced recurrence by ~30% vs placebo.", takeaway: "Aspirin provides modest benefit for extended VTE prevention." }
    ]
  },
  "Endocrinology": {
    "Diabetes": [
      { name: "ACCORD", year: 2008, journal: "NEJM", summary: "Intensive glucose control (A1c <6%) vs standard (7–7.9%) in T2DM increased mortality without reducing CV events. Trial stopped early.", takeaway: "Overly aggressive A1c targets increase mortality." },
      { name: "ADVANCE", year: 2008, journal: "NEJM", summary: "Intensive glucose control (A1c ≤6.5%) reduced microvascular events (mainly nephropathy) but not macrovascular events or death.", takeaway: "Moderate intensive control reduces microvascular risk." },
      { name: "EMPA-REG OUTCOME", year: 2015, journal: "NEJM", summary: "Empagliflozin in T2DM with established CVD reduced CV death by 38%, HF hospitalization by 35%, and all-cause mortality by 32%.", takeaway: "SGLT2 inhibitors reduce CV death in T2DM with CVD." },
      { name: "LEADER", year: 2016, journal: "NEJM", summary: "Liraglutide in T2DM with high CV risk reduced composite of CV death, MI, stroke by 13% and all-cause mortality by 15%.", takeaway: "GLP-1 RAs reduce CV events in high-risk T2DM." },
      { name: "DCCT / EDIC", year: 1993, journal: "NEJM", summary: "Intensive insulin therapy in T1DM reduced microvascular complications by 50–76%. Long-term follow-up showed persistent CV benefit.", takeaway: "Tight glycemic control in T1DM prevents complications." },
      { name: "DPP", year: 2002, journal: "NEJM", summary: "Lifestyle intervention reduced progression from prediabetes to T2DM by 58% vs placebo; metformin reduced it by 31%.", takeaway: "Lifestyle changes are most effective for diabetes prevention." }
    ],
    "Thyroid": [
      { name: "TRUST", year: 2017, journal: "NEJM", summary: "Levothyroxine for subclinical hypothyroidism (TSH 4.6–19.9) in adults ≥65 did not improve symptoms or quality of life.", takeaway: "Don't routinely treat mild subclinical hypothyroidism in elderly." }
    ]
  },
  "Rheumatology": {
    "Rheumatoid Arthritis": [
      { name: "TEAR", year: 2012, journal: "NEJM", summary: "Early aggressive therapy (triple DMARD or MTX + etanercept) was superior to step-up from MTX monotherapy in early RA.", takeaway: "Early aggressive DMARD therapy preferred in RA." }
    ],
    "Gout": [
      { name: "CARES", year: 2018, journal: "NEJM", summary: "Febuxostat was non-inferior to allopurinol for gout, but associated with higher all-cause and CV mortality.", takeaway: "Allopurinol preferred first-line for gout." }
    ]
  },
  "Oncology": [
    { name: "EV-302", year: 2023, journal: "NEJM", summary: "Enfortumab vedotin + pembrolizumab doubled progression-free survival vs chemotherapy in advanced urothelial carcinoma.", takeaway: "Antibody-drug conjugate + immunotherapy is new standard in advanced bladder cancer." },
    { name: "KEYNOTE-426", year: 2019, journal: "NEJM", summary: "Pembrolizumab + axitinib vs sunitinib in advanced RCC improved OS, PFS, and response rate.", takeaway: "Immunotherapy + TKI is standard first-line for advanced RCC." },
    { name: "ESOPEC", year: 2024, journal: "NEJM", summary: "FLOT perioperative chemo was superior to neoadjuvant CROSS regimen for resectable esophageal adenocarcinoma (OS benefit).", takeaway: "FLOT is preferred perioperative regimen for esophageal adenocarcinoma." }
  ]
};

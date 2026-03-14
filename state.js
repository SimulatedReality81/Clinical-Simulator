// ══════════════════════════════════════════════════════════════
// STATE — Shared application state
// ══════════════════════════════════════════════════════════════

export const IM_CATS=[{n:'Cardiovascular Disease',p:14},{n:'Pulmonary Disease',p:9},{n:'Gastroenterology',p:9},{n:'Infectious Disease',p:9},{n:'Rheumatology and Orthopedics',p:9},{n:'Endocrinology, Diabetes, and Metabolism',p:9},{n:'Hematology',p:6},{n:'Nephrology and Urology',p:6},{n:'Medical Oncology',p:6},{n:'Neurology',p:4},{n:'Psychiatry',p:4},{n:'Obstetrics and Gynecology',p:3},{n:'Dermatology',p:3},{n:'Geriatric Syndromes',p:3},{n:'Allergy and Immunology',p:2},{n:'Miscellaneous',p:2},{n:'Ophthalmology',p:1},{n:'Otolaryngology and Dental Medicine',p:1}];

export const HT_CATS=['Hypovolemia','Hypoxia','Hydrogen Ion (Acidosis)','Hyperkalemia','Hypokalemia','Hypothermia','Hypoglycemia','Toxins/Tablets','Tamponade (Cardiac)','Tension Pneumothorax','Thrombosis (MI)','Thromboembolism (PE)','Trauma'];

export const MAX_CATS_ACLS=4;
export const MAX_CATS_RR=2;

// Settings
export let S={fb:'realtime',diff:'easy',grade:'ungraded',scType:'acls',tp:'on',docName:'',prompt:'',minR:-1,selCatsRR:[],selCatsACLS:[],lastACLSCause:'',inputMode:'freetext',pgy:'PGY-1'};

// Conversation & simulation state
export let conv=[];
export let sysP='';
export let wait=false;
export let simEnd=false;
export let fbDone=false;
export let uaCount=0;
export let qList=[];
export let pendHL='';
export let histEntries=[];
export let qEditIndex=-1;
export let currentCaseTopics=[];
export let simPhase='active';
export let unsureCount=0;
export let selRange=null;

// Session-only scores (no localStorage persistence)
export let scores=[];
export let mcScores=[];
export let recSims=[];

// Speech
export let rec=null;
export let isRec=false;

// Auto theme
export let autoThemeInterval=null;

// Setters for primitives (since ES modules export bindings, not values for let)
export function setWait(v){wait=v;}
export function setSimEnd(v){simEnd=v;}
export function setFbDone(v){fbDone=v;}
export function setSysP(v){sysP=v;}
export function setSimPhase(v){simPhase=v;}
export function setPendHL(v){pendHL=v;}
export function setSelRange(v){selRange=v;}
export function setQEditIndex(v){qEditIndex=v;}
export function setRec(v){rec=v;}
export function setIsRec(v){isRec=v;}
export function setAutoThemeInterval(v){autoThemeInterval=v;}
export function setUnsureCount(v){unsureCount=v;}
export function incUaCount(){uaCount++;}
export function resetForNewSim(){
  conv=[];simEnd=false;fbDone=false;uaCount=0;qList=[];pendHL='';histEntries=[];simPhase='active';unsureCount=0;qEditIndex=-1;
}
export function pushConv(msg){conv.push(msg);}
export function pushQ(q){qList.push(q);}
export function removeQ(i){qList.splice(i,1);}
export function clearQList(){qList.length=0;}
export function pushHistEntry(e){histEntries.push(e);}
export function setCurrentCaseTopics(v){currentCaseTopics=v;}
export function pushScore(entry){
  if(entry.inputMode==='mc'){mcScores.push(entry);}
  else{scores.push(entry);}
}
export function pushRecSim(sim){
  recSims.unshift(sim);
  if(recSims.length>10)recSims.length=10;
}

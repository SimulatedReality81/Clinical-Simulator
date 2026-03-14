// ══════════════════════════════════════════════════════════════
// CONFIGURATION — Central config for the Clinical Training Simulator
// ══════════════════════════════════════════════════════════════

// Backend proxy URL — all API calls route through this.
// Replace with your deployed Cloudflare Worker URL.
export const WORKER_URL = 'https://clinical-sim-api.v-kasula0902.workers.dev/api';

// Model to use for simulations
export const MODEL = 'claude-sonnet-4-20250514';

// Max tokens per API response
export const MAX_TOKENS = 4096;

// Max tokens for procedure chatbot
export const PROC_CHAT_MAX_TOKENS = 1024;

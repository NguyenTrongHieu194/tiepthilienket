/// <reference types="vite/client" />

// Declare global variables provided by the Canvas environment
// These are needed for TypeScript to recognize them during compilation.
declare const __app_id: string | undefined;
declare const __firebase_config: string | undefined;
declare const __initial_auth_token: string | undefined;

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
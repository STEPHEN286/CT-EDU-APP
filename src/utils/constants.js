console.log('All env vars:', import.meta.env);
console.log('VITE_BASE_URL specifically:', import.meta.env.VITE_BASE_URL);
export const BASE_URL = import.meta.env.VITE_BASE_URL;

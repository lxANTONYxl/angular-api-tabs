
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-api-tabs/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-api-tabs"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angular-api-tabs",
    "route": "/angular-api-tabs/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5060, hash: 'f569e18d152af8a4c43914b239761121a27bcb3bdba45e33f24739bc45bfacbf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1032, hash: 'ae8661caee621398036e047d23ef4ded16794004a236b4304dde2ce35b66f051', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38076, hash: '562b229f7aae5e995357787d5cb7b6c79807cb67b3fae3bb2b52751eebd07d93', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};

export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'storage.googleapis.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'storage.googleapis.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  { name: 'strapi::poweredBy', config: { poweredBy: 'Zapal <zapal.tech>' } },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  { name: 'strapi::public', config: { defaultIndex: false } },
];

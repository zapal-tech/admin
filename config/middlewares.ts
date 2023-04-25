export default [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  { name: 'strapi::poweredBy', config: { poweredBy: 'Zapal <zapal.tech>' } },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  { name: 'strapi::public', config: { defaultIndex: false } },
];

export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          type: 'OAuth2',
          user: env('EMAIL_USER'),
          serviceClient: env('EMAIL_CLIENT'),
          privateKey: env('EMAIL_PRIVATE_KEY'),
        },
      },
      settings: {
        defaultFrom: `Zapal | Admin Panel <${env('EMAIL_USER')}>`,
        defaultReplyTo: env('EMAIL_USER'),
        testAddress: env('EMAIL_USER'),
      },
    },
  },
  upload: {
    config: {
      breakpoints: {
        '700': 700,
        '750': 750,
        '800': 800,
        '850': 850,
        '900': 900,
        '950': 950,
        '1000': 1000,
      },
    },
  },
  seo: true,
});

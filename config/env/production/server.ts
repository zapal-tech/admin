export default ({ env }) => ({
  proxy: true,
  url: env('APP_URL'),
});

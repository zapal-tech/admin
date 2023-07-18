import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::contact.contact', ({ strapi }) => ({
  async create(params) {
    const result = await super.create(params);

    console.log(result);

    try {
      await strapi.service('api::notification.notification').sendTelegramNotification(result?.toString?.());
    } catch (error) {
      console.error(error);
    }

    return result;
  },
}));

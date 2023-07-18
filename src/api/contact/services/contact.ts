import { factories } from '@strapi/strapi';

type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};

export default factories.createCoreService('api::contact.contact', ({ strapi }) => ({
  async create(params) {
    const result = (await super.create(params)) as Contact;

    const { firstName, lastName, email, company, message } = result;

    const notificationText = `Hi, Zapal!\n\n${firstName} ${lastName} from ${company} sent you a message:\n${message}\n\nYou can reply to ${email}`;

    strapi.service('api::notification.notification').sendTelegramNotification(notificationText);

    return result;
  },
}));

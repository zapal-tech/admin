import { factories } from '@strapi/strapi';
import { Bot } from 'grammy';

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

export default factories.createCoreService('api::contact.contact', () => ({
  async create(params) {
    const result = (await super.create(params)) as Contact;

    try {
      const { firstName, lastName, email, company, message } = result;

      const notificationText = `Hi, Zapal!\n\n${firstName} ${lastName} from ${company} sent you a message:\n${message}\n\nYou can reply to ${email}`;

      const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);

      await bot.start();

      await bot.api.sendMessage(process.env.TELEGRAM_CHAT_ID, notificationText);

      console.log('Telegram notification sent!');

      await bot.stop();
    } catch (error) {
      console.log('Error calling notification service (telegram), but contact was created.');
      console.error(error);
    }

    return result;
  },
}));

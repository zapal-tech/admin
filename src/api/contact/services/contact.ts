import { factories } from '@strapi/strapi';
import axios from 'axios';

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

      const text =
        `Hi, Zapal!\n\n${firstName} ${lastName} from ${company} sent you a message:\n${message}\n\nYou can reply to ${email}`.substring(
          0,
          4096,
        );

      await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
      });
    } catch (error) {
      console.log('Error sending Telegram notification, but contact was created.');
      console.error(error);
    }

    return result;
  },
}));

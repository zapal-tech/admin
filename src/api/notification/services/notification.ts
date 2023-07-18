// Notification service
import { Bot } from 'grammy';
import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::notification.notification', () => ({
  async sendTelegramNotification(text: string) {
    try {
      const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);

      await bot.api.sendMessage(process.env.TELEGRAM_CHAT_ID, text);

      bot.stop();

      return true;
    } catch (error) {
      console.error(error);

      return false;
    }
  },
}));

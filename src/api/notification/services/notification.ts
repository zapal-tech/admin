// Notification service

import { Bot } from 'grammy';
import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::notification.notification', () => ({
  async sendTelegramNotification(text: string) {
    try {
      const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);

      await bot.start();

      await bot.api.sendMessage(process.env.TELEGRAM_CHAT_ID, text);

      console.log('Telegram notification sent!');

      await bot.stop();

      return true;
    } catch (error) {
      console.log('Error sending Telegram notification');
      console.error(error);

      return false;
    }
  },
}));

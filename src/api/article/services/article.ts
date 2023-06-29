import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::article.article', ({ strapi }) => ({
  async findOne(slug: string | number) {
    const isId = Number.isInteger(parseInt(`${slug}`));
    const entity = await strapi.db
      .query('api::article.article')
      .findOne({ where: isId ? { $or: [{ slug }, { id: slug }] } : { slug } });

    return entity;
  },
}));

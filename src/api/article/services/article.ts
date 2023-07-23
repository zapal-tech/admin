import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::article.article', ({ strapi }) => ({
  async findOne(slug: string | number, params: any) {
    const isId = Number.isInteger(parseInt(`${slug}`));

    if (isId) return super.findOne(slug as number, params);

    const entity = await strapi.db.query('api::article.article').findOne({ where: { slug } });

    return super.findOne(entity.id, params);
  },
}));

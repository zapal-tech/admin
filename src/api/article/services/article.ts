import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::article.article', ({ strapi }) => ({
  async findOne(slug: string | number) {
    const isId = Number.isInteger(parseInt(`${slug}`));

    const entity = await strapi.db.query('api::article.article').findOne({
      where: isId ? { $or: [{ slug }, { id: slug }] } : { slug },
      populate: [
        'cover',
        'author',
        'author.avatar',
        'tags',
        'content',
        'content[shared.media]',
        'content[shared.slider]',
        'seo',
      ],
    });

    return entity;
  },
}));

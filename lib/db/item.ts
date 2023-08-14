import { models } from './models';
import { Item as ItemAttributes } from '@lib/interfaces';

export const ItemFactory = {
  create: async (attrs: Partial<ItemAttributes> = {}) =>
    models.Item.create(attrs),

  readAll: async () => models.Item.findAll(),
};

import { Sequelize } from 'sequelize';
import ItemModel from './item';

const dev = process.env.NODE_ENV !== 'production';

export const client = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_PATH ?? './db.sqlite',
  logging: dev ? true : false,
});

const Item = ItemModel(client);

export const models = {
  Item,
};

client.sync(dev ? { force: true } : { force: false, alter: false });

export default client;
export * from './errors';

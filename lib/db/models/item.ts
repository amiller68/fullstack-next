import { DataTypes, Model, ModelDefined, Sequelize } from 'sequelize';
import { validateOrReject } from 'class-validator';
import { BadModelFormat } from './errors';
import { Item as ItemAttributes } from '@lib/interfaces';

interface ItemInstance extends Model<ItemAttributes>, ItemAttributes {
  addId(): Promise<void>;
  validate(): Promise<void>;
}

const ItemModel = (sequelize: Sequelize): ModelDefined<ItemAttributes, {}> => {
  const Item = sequelize.define<ItemInstance>(
    'Item',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCreate: async (Item: ItemInstance) => {
          await Item.validate().catch((err) => {
            throw new BadModelFormat(err);
          });
        },
        beforeUpdate: async (Item: ItemInstance) => {
          await Item.validate().catch((err) => {
            throw new BadModelFormat(err);
          });
        },
      },
      tableName: 'items',
    }
  );

  Item.prototype.validate = async function () {
    if (!this.name) {
      throw new BadModelFormat('Name is required');
    }
    await validateOrReject(this);
  };

  return Item;
};

export default ItemModel;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Coin extends Model {}

Coin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    asset: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    holdings: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    symbol: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'coin',
  }
);

module.exports = Coin;

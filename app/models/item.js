'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Item.init({
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    userId: {
		type: DataTypes.INTEGER,
		references: {
		  model: 'User',
		  key: 'id',
		  as: 'userId',
		}
	}
  }, {
    sequelize,
    modelName: 'Item',
  });
  Item.associate = function (models) {
    // associations can be defined here
    Item.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Item;
};
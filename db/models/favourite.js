'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Recipe, User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Recipe, { foreignKey: 'recipe_id' });
    }
  }
  Favourite.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      recipe_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Recipes',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Favourite',
    }
  );
  return Favourite;
};
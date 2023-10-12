'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ RecipeIngredient }) {
      this.hasMany(RecipeIngredient, { foreignKey: 'ingredient_id' });
    }
  }
  Ingredient.init(
    {
      name: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Ingredient',
    }
  );
  return Ingredient;
};

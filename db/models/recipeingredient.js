'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeIngredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Recipe, Ingredient }) {
      this.belongsTo(Ingredient, { foreignKey: 'ingredient_id' });
      this.belongsTo(Recipe, { foreignKey: 'recipe_id' });
    }
  }
  RecipeIngredient.init(
    {
      recipe_id: {
        type: DataTypes.INTEGER,
      },
      ingredient_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'RecipeIngredient',
    }
  );
  return RecipeIngredient;
};

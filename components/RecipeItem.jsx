const React = require('react');

module.exports = function RecipeItem({ user, recipe }) {
  return (
    <a href="#" className="recipe-item-container flex flex-dir-col">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
    </a>
  );
};

const React = require('react');

module.exports = function RecipeItem({ user, recipe, isFavorite }) {
  return (
    <div
      className="recipe-item-container flex flex-dir-col"
      data-id={recipe.id}
    >
      <h2>{recipe.name}</h2>
      <a href={'/recipes/' + recipe.id}>
        <img src={recipe.image} alt={recipe.name} />
      </a>
      {!isFavorite ? (
        <button className="btn-favorite">❤︎</button>
      ) : (
        <button className="btn-remove-favorite">❤︎</button>
      )}
    </div>
  );
};

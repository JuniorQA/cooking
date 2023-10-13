const React = require('react');

module.exports = function RecipeItem({ user, recipe, isFavorite }) {
  return (
    <div
      className="recipe-item-container flex flex-dir-col"
      data-id={recipe.id}
    >
      <div className="flex btn-like-container">
        <h2>{recipe.name}</h2>
        {!isFavorite ? (
          <button className="btn-favorite">❤︎</button>
        ) : (
          <button className="btn-remove-favorite">❤︎</button>
        )}
      </div>
      <a href={'/recipes/' + recipe.id}>
        <img src={recipe.image} alt={recipe.name} />
      </a>
    </div>
  );
};

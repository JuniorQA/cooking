const React = require('react');

module.exports = function RecipeItem({ user, recipe }) {
  return (
    <div
      className="recipe-item-container flex flex-dir-col"
      data-id={recipe.id}
    >
      <h2>{recipe.name}</h2>
      <a href={'/recipes/' + recipe.id}>
        <img src={recipe.image} alt={recipe.name} />
      </a>
      <button className="btn-favorite">В Избранное</button>
      <button className="btn-remove-favorite">Удалить из Избранного</button>
    </div>
  );
};

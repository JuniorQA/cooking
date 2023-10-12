const React = require('react');

module.exports = function NavBar({ user, recipe }) {
  return (
    <div className="recipe-item-container flex flex-dir-col">
      <h2>Название: {recipe.name}</h2>
    </div>
  );
};

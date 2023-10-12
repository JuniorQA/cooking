const React = require('react');
const Layout = require('./Layout');

function RecipePage({ title, recipe, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="flex flex-dir-col inner-recipe-container container">
        <h2 className="card-title">{recipe.name}</h2>
        <img src={recipe.image} className="inner-img" alt="recipe" />
        <div className="card-body">
          <h2>Рецепт</h2>
          <p>{recipe.description}</p>
          <h3>Время приготовления: {recipe.cooking_time} минут</h3>
        </div>
      </div>
    </Layout>
  );
}

module.exports = RecipePage;

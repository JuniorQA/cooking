const React = require('react');
const Layout = require('./Layout');
const RecipeItem = require('../components/RecipeItem');
function FavoritesPage({ title, user, recipes }) {
  return (
    <Layout title={title} user={user}>
      <div className="card__container">
        {recipes.map((recipe) => (
          <RecipeItem recipe={recipe} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = FavoritesPage;

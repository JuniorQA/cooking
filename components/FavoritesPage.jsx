const React = require('react');
const Layout = require('./Layout');

function FavoritesPage({ title, user, recipes }) {
  return (
    <Layout title={title} user={user}>
      <div className="card__container">
        {recipes.map((recipe) => (
          <div data-id={recipe.id} className="card" style={{ width: '18rem' }}>
            <img src={recipe.image} className="card-img-top" alt="recipe" />
            <div className="card-body">
              <h5 className="card-title">{recipe.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = FavoritesPage;

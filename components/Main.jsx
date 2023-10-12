const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');
const RecipeItem = require('./RecipeItem');
module.exports = function Main({ user, recipes = [] }) {
  return (
    <Layout>
      <NavBar user={user} />
      <div className="recipes-container container flex">
        {user &&
          recipes.map((recipe) => (
            <>
              <RecipeItem recipe={recipe} />
            </>
          ))}
      </div>
    </Layout>
  );
};

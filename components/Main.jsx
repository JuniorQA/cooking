const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');
const RecipeItem = require('./RecipeItem');
module.exports = function Main({ user, recipes = [] }) {
  return (
    <Layout>
      <NavBar user={user} />
      {user &&
        recipes.map((recipe) => (
          <>
            <RecipeItem recipe={recipe} />
          </>
        ))}
    </Layout>
  );
};

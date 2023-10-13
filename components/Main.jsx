const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');
const RecipeItem = require('./RecipeItem');
module.exports = function Main({ user, recipes = [], favorites = [] }) {
  console.log(recipes);
  const favs = favorites.map((el) => el.recipe_id);
  return (
    <Layout>
      <NavBar user={user} />
      {user && (
        <>
          <form className="sort-section flex">
            <div className="sort-method-container">
              <label htmlFor="sort-select-label">Тип сортировки: </label>
              <select name="sort-select">
                <option value="asc">По возрастанию</option>
                <option value="desc">По убыванию</option>
              </select>
            </div>
            <div className="sort-method-container">
              <label htmlFor="sort-type-label">Как сортировать: </label>
              <select name="sort-type">
                <option value="ign-count">По количеству ингридиентов</option>
                <option value="cooking-time">По времени приготовления</option>
              </select>
            </div>
            <button type="submit">Сортировать</button>
          </form>
        </>
      )}
      <div className="recipes-container container flex">
        {user &&
          recipes.map((recipe) => (
            <>
              <RecipeItem
                recipe={recipe}
                isFavorite={favs.includes(recipe.id)}
              />
            </>
          ))}
      </div>
    </Layout>
  );
};

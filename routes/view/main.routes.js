const router = require('express').Router();
const { where } = require('sequelize');
const Main = require('../../components/Main');
const RecipePage = require('../../components/RecipePage');
const { Recipe, Favourite } = require('../../db/models');
const shuffleArray = require('../../public/scripts/shuffle');
const sotrRecipe = require('../../public/scripts/sortRecipe');

router.get('/', async (req, res) => {
  const favorites = await Favourite.findAll({
    where: { user_id: req.session.user_id },
  });
  const recipes = await Recipe.findAll();
  shuffleArray(recipes);
  const html = res.renderComponent(Main, {
    title: 'cooking-book',
    recipes,
    favorites,
  });
  res.send(html);
});

router.get('/recipes/:recipeId', async (req, res) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findOne({ where: { id: recipeId } });
    const html = res.renderComponent(RecipePage, {
      title: 'Recipe page',
      recipe,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;

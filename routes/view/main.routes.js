const router = require('express').Router();
const Main = require('../../components/Main');
const { Recipe } = require('../../db/models');
const shuffleArray = require('../../public/scripts/shuffle')
const sotrRecipe = require('../../public/scripts/sortRecipe')

router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll();
  sotrRecipe(recipes)
  console.log(recipes)
  const html = res.renderComponent(Main, { title: 'cooking-book', recipes });
  res.send(html);
});

module.exports = router;

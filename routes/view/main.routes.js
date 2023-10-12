const router = require('express').Router();
const Main = require('../../components/Main');
const { Recipe } = require('../../db/models');

router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll();
  const html = res.renderComponent(Main, { title: 'cooking-book', recipes });
  res.send(html);
});

module.exports = router;

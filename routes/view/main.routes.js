const router = require('express').Router();
const { where } = require('sequelize');
const Main = require('../../components/Main');
const RecipePage = require('../../components/RecipePage');
const { Recipe , Ingredient,RecipeIngredient } = require('../../db/models');

const shuffleArray = require('../../public/scripts/shuffle');
const sortArray = require('../../public/scripts/sortRecipe');

router.get('/', async (req, res) => {
  const recipes = await Recipe.findAll({


    //  where: { recipe_id: ingredient_id },
    include: { model: RecipeIngredient },
  });
    const {sortSelect,sortType } = req.query 
    
    console.log(sortSelect)

    
    sortArray(recipes,sortSelect,sortType);
  const html = res.renderComponent(Main, { title: 'cooking-book', recipes });
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

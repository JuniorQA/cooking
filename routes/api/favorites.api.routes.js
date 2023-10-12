const router = require('express').Router();
const {Favourite} = require('../../db/models')

router.post('/',async (req,res)=> {
  let result 
  try {
    const { id } = req.body;
    result = await Favourite.findOne({ where: { id, user_id: req.session.userId } });
    if (result) {
      res.json({ message: 'Вы уже добавляли в избранное' });
      return;
    } else {
      result = await Favourite.create({ recipe_id: id, user_id: req.session.userId });
      res.json({ message: 'success' });
      return;
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:recipeId', async (req, res) => {
  try {
    const { recipeId } = req.params;
    const result = await Favourite.destroy({
      where: { recipe_id: recipeId, user_id: req.session.userId },
    });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'false' });
  } catch ({ message }) {
    res.json({ message });
  }
});



module.exports = router;
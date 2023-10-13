const router = require('express').Router();
const FavoritesPage = require('../../components/FavoritesPage');
const { Favourite, User, Recipe } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const favorites = await Favourite.findAll({
      where: { user_id: req.session.user_id },
      include: { model: Recipe },
    });
    const recipes = favorites.map((favorite) => favorite.Recipe);
    const html = res.renderComponent(FavoritesPage, {
      title: 'favorites page',
      recipes,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;

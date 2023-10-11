const router = require('express').Router();
const Main = require('../../components/Main');

router.get('/', async (req, res) => {
  const html = res.renderComponent(Main, { title: 'fit-main' });
  res.send(html);
});

module.exports = router;

const router = require('express').Router();

const mainRouter = require('./view/main.routes');

router.use('/', mainRouter);

module.exports = router;

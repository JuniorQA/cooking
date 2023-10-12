const router = require('express').Router();

const mainRouter = require('./view/main.routes');
const authRouter = require('./view/auth.routes');


const authApiRouter = require('./api/auth.api.routes');

router.use('/', mainRouter);

router.use('/auth', authRouter);

router.use('/api/auth', authApiRouter);

module.exports = router;

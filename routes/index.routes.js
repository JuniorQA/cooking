const router = require('express').Router()

const mainRouter = require('./view/main.routes')
const authRouter = require('./view/auth.routes')
const favoritesRouter = require('./view/favorites.routes')

const favoriteApiRouter = require('./api/favorites.api.routes')
const authApiRouter = require('./api/auth.api.routes')

router.use('/', mainRouter)
router.use('/auth', authRouter)
router.use('/favorites', favoritesRouter)

router.use('/api/auth', authApiRouter)
router.use('/api/favorites', favoriteApiRouter)

module.exports = router

const router = require('express').Router()
const Main = require('../../components/Main')
const RecipePage = require('../../components/RecipePage')
const { Recipe } = require('../../db/models')
const shuffleArray = require('../../public/scripts/shuffle')

router.get('/', async (req, res) => {
	const recipes = await Recipe.findAll()
	shuffleArray(recipes)
	const html = res.renderComponent(Main, { title: 'cooking-book', recipes })
	res.send(html)
})

router.get('/recipeId', async (req, res) => {
	try {
		const { recipeId } = req.params
		const recipe = await Recipe.findOne({ where: { id: recipeId } })
		const html = res.renderComponent(RecipePage, {
			title: 'Recipe page', recipe,
		})
		res.send(html)
	} catch ({ message }) {
		res.json({ message })
	}
})

module.exports = router

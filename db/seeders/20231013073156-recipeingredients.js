'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const testRecipeIngredients = [
			{
				recipe_id: 1,
				ingredient_id: 4,
			},
			{
				recipe_id: 1,
				ingredient_id: 11,
			},
			{
				recipe_id: 2,
				ingredient_id: 2,
			},
			{
				recipe_id: 2,
				ingredient_id: 11,
			},
			{
				recipe_id: 3,
				ingredient_id: 12,
			},
			{
				recipe_id: 3,
				ingredient_id: 13,
			},
			{
				recipe_id: 4,
				ingredient_id: 11,
			},
			{
				recipe_id: 4,
				ingredient_id: 14,
			},
			{
				recipe_id: 5,
				ingredient_id: 2,
			},
			{
				recipe_id: 5,
				ingredient_id: 15,
			},
			{
				recipe_id: 6,
				ingredient_id: 11,
			},
			{
				recipe_id: 6,
				ingredient_id: 16,
			},
			{
				recipe_id: 7,
				ingredient_id: 17,
			},
			{
				recipe_id: 7,
				ingredient_id: 18,
			},
			{
				recipe_id: 8,
				ingredient_id: 11,
			},
			{
				recipe_id: 8,
				ingredient_id: 8,
			},
			{
				recipe_id: 9,
				ingredient_id: 19,
			},
			{
				recipe_id: 9,
				ingredient_id: 20,
			},
			{
				recipe_id: 10,
				ingredient_id: 20,
			},
			{
				recipe_id: 10,
				ingredient_id: 20,
			},
		]

		const testRecipeIngredientsMapped = testRecipeIngredients.map(el => ({
			...el,
			createdAt: new Date(),
			updatedAt: new Date(),
		}))
		await queryInterface.bulkInsert(
			'RecipeIngredients',
			testRecipeIngredientsMapped
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('RecipeIngredients')
	},
}

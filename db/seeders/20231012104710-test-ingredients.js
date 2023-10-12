'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const testIngredients = [
      { name: 'Молоко' },
      { name: 'Яйца' },
      { name: 'Мука' },
      { name: 'Сахар' },
      { name: 'Соль' },
      { name: 'Масло оливковое' },
      { name: 'Картофель' },
      { name: 'Помидоры' },
      { name: 'Огурцы' },
      { name: 'Говядина' },
      { name: 'Курица' },
      { name: 'Лосось' },
      { name: 'Свекла' },
      { name: 'Морковь' },
      { name: 'Лук' },
      { name: 'Перец' },
      { name: 'Чеснок' },
      { name: 'Шпинат' },
      { name: 'Брокколи' },
      { name: 'Свинина' },
      { name: 'Мед' },
      { name: 'Лимон' },
      { name: 'Апельсины' },
      { name: 'Яблоки' },
      { name: 'Бананы' },
      { name: 'Клубника' },
      { name: 'Малина' },
      { name: 'Ананас' },
      { name: 'Арбуз' },
      { name: 'Груши' },
      { name: 'Персики' },
      { name: 'Киви' },
      { name: 'Манго' },
      { name: 'Грейпфрут' },
      { name: 'Авокадо' },
      { name: 'Орехи' },
      { name: 'Кешью' },
      { name: 'Фисташки' },
      { name: 'Кокос' },
      { name: 'Миндаль' },
      { name: 'Какао' },
      { name: 'Корица' },
      { name: 'Карри' },
      { name: 'Гвоздика' },
      { name: 'Шафран' },
      { name: 'Кориандр' },
      { name: 'Кинза' },
      { name: 'Тыква' },
      { name: 'Семена льна' },
      { name: 'Семена чиа' },
      { name: 'Петрушка' },
      { name: 'Кинза' },
      { name: 'Тыква' },
      { name: 'Семена льна' },
      { name: 'Семена чиа' },
      { name: 'Петрушка' },
    ];
    const testIngredientsMapped = testIngredients.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Ingredients', testIngredientsMapped);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ingredients');
  },
};

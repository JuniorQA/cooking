'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const testUsers = [
      {
        login: 'Ivan',
        password: await bcrypt.hash('Bolvan', 10),
        email: 'Ivan@ivan',
      },
      {
        login: 'sasha',
        password: await bcrypt.hash('russia', 10),
        email: 'sasha@gmail.com',
      },
      {
        login: 'Maks',
        password: await bcrypt.hash('axe', 10),
        email: 'Maks@gmail.com',
      },
      {
        login: 'Serega',
        password: await bcrypt.hash('tennis', 10),
        email: 'Serega@gmail.com',
      },
    ];
    const testUsersMapped = testUsers.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', testUsersMapped);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users');
  },
};

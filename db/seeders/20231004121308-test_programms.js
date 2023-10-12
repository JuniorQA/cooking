'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const testProgrammsData = [
      {
        category: 'Похудение',
        description: 'Худею жостко',
        content:
          'https://cs11.pikabu.ru/post_img/big/2019/06/10/2/1560125207186531951.jpg',
        user_id: 3,
      },
      {
        category: 'Похудение',
        description: 'Худею, но нежостко',
        content:
          'https://cs14.pikabu.ru/post_img/big/2021/06/08/9/1623163236192472533.jpg',
        user_id: 3,
      },
      {
        category: 'Масса',
        description: 'На массе жостко',
        content:
          'https://vzmsrc.mszn27.ru/sites/files/mszn/kgu/vzmsrc/picture/2022/100380.jpg',
        user_id: 3,
      },
      {
        category: 'Масса',
        description: 'На массе,но нежостко',
        content:
          'https://www.meme-arsenal.com/memes/67aeae87e43bce161c8cd0971e2dc719.jpg',
        user_id: 3,
      },
    ];
    const testProgrammsDataMapped = testProgrammsData.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Programms', testProgrammsDataMapped);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Programms');
  },
};

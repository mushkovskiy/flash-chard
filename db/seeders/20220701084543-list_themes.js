'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const arr = [
      {
        title: 'Тема 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        title: 'Тема 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        title: 'Тема 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
    await queryInterface.bulkInsert('Themes', arr, {});



  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Themes', null, {});

  }
};

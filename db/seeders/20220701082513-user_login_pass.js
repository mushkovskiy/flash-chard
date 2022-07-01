'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const arr = [
      {
        username: 'NewUser',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        username: 'MainUser',
        password: '@123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        username: 'SuperUser',
        password: '34567',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
    await queryInterface.bulkInsert('Users', arr, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};

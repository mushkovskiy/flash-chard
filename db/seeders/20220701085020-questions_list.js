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
        description: 'По какой звезде ориентируются моряки и путешественники?',
        answer: 'Полярная звезда',
        point: 10,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'В какой стране мира самая высокая продолжительность жизни?',
        answer: 'Китай',
        point: 15,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Дюшбора — это…',
        answer: 'Азербайджанские пельмени',
        point: 10,
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'В каком языке нет знаков препинания',
        answer: 'Тайский',
        point: 15,
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Какой срок годности ГОСТ предписывал советскому мороженому?',
        answer: 'Неделя',
        point: 10,
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Какой безалкогольный напиток первым был взят в космос?',
        answer: 'Кока-Кола',
        point: 15,
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Кто написал знаменитый дневник, скрываясь от нацистов в Амстердаме?',
        answer: 'Анна Франк',
        point: 20,
        theme_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Что означает термин “пиано”',
        answer: 'В мягком темпе',
        point: 20,
        theme_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Как называется маленький пластмассовый кусочек на конце шнурка?',
        answer: 'Аглет',
        point: 20,
        theme_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
    await queryInterface.bulkInsert('Questions', arr, {});


     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Questions', null, {});
  }
};

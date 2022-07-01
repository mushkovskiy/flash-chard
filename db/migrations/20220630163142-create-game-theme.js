'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GameThemes', {
      game_id: {
    
        type: Sequelize.INTEGER,
        references: {
          model: 'Games',
          key: 'id'
        }
      },
      question_id: {
        
        type: Sequelize.INTEGER,
        references: {
          model: 'Questions',
          key: 'id'
        }

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GameThemes');
  }
};
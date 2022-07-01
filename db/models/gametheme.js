'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameTheme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Game, Theme}) {

    }
  }
  GameTheme.init({
    game_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Game',
        key: 'id'
      }
    },
    question_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Question',
        key: 'id'
      }

    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'GameTheme',
    tableName: 'GameThemes',
  });
  return GameTheme;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Theme, Game}) {
      // Question.Theme = Question.belongsTo(Theme, {foreignKey:'theme_id'})
      Question.Game = Question.belongsToMany(Game, {
        foreignKey: 'question_id',
        through: 'GameTheme'
      })
    }
  }
  Question.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT
    },
    answer: {
      type: DataTypes.TEXT
    },
    point: {
      type: DataTypes.INTEGER
    },
    theme_id: {
      type: DataTypes.INTEGER,
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
    modelName: 'Question',
    tableName: 'Questions',
  });
  return Question;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class team_player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  team_player.init({
    teamid: DataTypes.INTEGER,
    playerid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'team_player',
  });
  return team_player;
};
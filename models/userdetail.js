'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userdetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userdetail.belongsTo(models.user,{
        foreignKey:'userid'
      });
    }
  }
  userdetail.init({
    education: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userdetail',
  });
  return userdetail;
};
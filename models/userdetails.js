'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Userdetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //belogs to
      Userdetails.hasOne(models.User,{
        foreignKey:'userid'
      });
      
    }
  }
  Userdetails.init({
    education: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Userdetails',
  });
  return Userdetails;
};
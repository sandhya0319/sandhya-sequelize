'use strict';
const {Model} = require('sequelize');
const Userdetails=require('../models/userdetails')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here

      //hasone
      // User.hasOne(models.Userdetails,{
      //   foreignKey:'userid'
      // });
      User.belongsTo(models.Userdetails,{
        foreignKey:"userid"
      });
      User.belongsTo(models.courses,{
        foreignKey:'userid'
      });
    }
  }
  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
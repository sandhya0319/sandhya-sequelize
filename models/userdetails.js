'use strict';
const {
  Model
} = require('sequelize');
const User=require('../models/user')
module.exports = (sequelize, DataTypes) => {
  class Userdetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Userdetails.hasOne(models.User,{
        foreignKey:'userid'
      }
       );
      // User.belongsTo(Userdetails);

    }
  }
  Userdetails.init({
    qualification: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Userdetails',
  });
  return Userdetails;
};
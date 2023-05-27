'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
   
    static associate(models) {
      // define association here
      courses.hasOne(models.User,{
        foreignKey:'userid'
      });

    }
  }
  courses.init({
    coursename: DataTypes.STRING,
    year: DataTypes.INTEGER,
    userid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'courses',
  });
  return courses;
};
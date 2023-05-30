'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      student.hasMany(models.course,{
        foreignKey:'userid',
      })
    }
  }
  student.init({
    name: DataTypes.STRING,
    rollno: DataTypes.INTEGER,
    address: DataTypes.STRING
  }, {
    sequelize,
    paranoid:true,
    modelName: 'student',
  });
  return student;
};
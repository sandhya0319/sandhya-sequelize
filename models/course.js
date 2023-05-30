'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      course.belongsTo(models.student,{
        foreignKey:'userid',
      })
    }
  }
  course.init({
    coursename: DataTypes.STRING,
    year: DataTypes.INTEGER,
    userid: DataTypes.INTEGER
  }, {  
    sequelize,
    modelName: 'course',
  });
  return course;
};  



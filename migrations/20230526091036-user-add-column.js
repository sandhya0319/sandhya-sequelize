'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // when we add more then one column
    const transaction=await queryInterface.sequelize.transaction();
    try{
      await queryInterface.addColumn('Users','city',{
        type:DataTypes.STRING,
        defaultValue:"abc"
      },{transaction});

      await queryInterface.addColumn('Users','state',{
        type:DataTypes.STRING,
      },{transaction})
      await transaction.commit();
    }
    catch(err){
      await transaction.rollback();
    }

  },

  async down (queryInterface, Sequelize) {
    // when we add more then one column
    const transaction=await queryInterface.sequelize.transaction();
    try{

      await queryInterface.removeColumn('Users','city',{transaction})
      await queryInterface.removeColumn('Users','state',{transaction})
      await transaction.commit();
      

    }
    catch{
      await transaction.rollback();
    }
  }
};

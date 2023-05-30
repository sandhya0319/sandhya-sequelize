'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction=await queryInterface.sequelize.transaction();
     try {
      
       await queryInterface.addColumn('students', 'deletedAt',{
        type:Sequelize.DATE,
        allowNull:true,
       });
    //    await queryInterface.addConstraint('students', ['deletedAt'], {
    //      type: 'allowNull:true',
    //      name: 'my_constraint'
    //  });
     transaction.commit();
     }
      catch (error) {
      console.log(error);
      transaction.rollback();
      
     }
  },

  async down (queryInterface, Sequelize) {
    const transaction=await queryInterface.sequelize.transaction();
    try {
      
      await queryInterface.removeColumn('students', 'deletedAt',{
        type:Sequelize.DATE,
        allowNull:true
       });
    //   await queryInterface.removeConstraint('students', ['deletedAt'], {
    //     type: 'allowNull:true',
    //     name: 'my_constraint'
    // });
    } 
    catch (error) {
      console.log(error);
      transaction.rollback();
    }
  }
};

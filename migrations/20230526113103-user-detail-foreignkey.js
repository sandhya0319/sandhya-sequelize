'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Userdetails', 'hobbies', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Userdetails', 'phone', {
          type: Sequelize.DataTypes.INTEGER,
        }, { transaction: t }),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Userdetails', 'hobbies', { transaction: t }),
        queryInterface.removeColumn('Userdetails', 'phone', { transaction: t }),
        queryInterface.removeColumn('Userdetails', 'userid', { transaction: t }),
      ]);
    });
  }
};

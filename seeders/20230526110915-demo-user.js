'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) => {
    const users= [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      city:"abc",
      state:"up",
      createdAt: new Date(),
      updatedAt: new Date()
    }];

    await queryInterface.bulkInsert('Users',users,{});
  },
  down:async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

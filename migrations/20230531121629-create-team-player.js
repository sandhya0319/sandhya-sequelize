'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('team_players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teamid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'teams',
          key:'id',
        }
      },
      playerid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'players',
          key:'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('team_players');
  }
};
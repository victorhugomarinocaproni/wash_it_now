'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.changeColumn('servicos', 'created_at', { 
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      });

    await queryInterface.changeColumn('servicos', 'updated_at', { 
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.changeColumn('servicos', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
    
    await queryInterface.changeColumn('servicos', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn('usuarios',
      'endereco', 
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    );

    await queryInterface.addColumn('usuarios',
      'numero_endereco', 
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    );

    await queryInterface.addColumn('usuarios',
      'zipcode', 
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    );
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('usuarios',
      'endereco'
    );

    await queryInterface.removeColumn('usuarios',
      'numero_endereco'
    );

    await queryInterface.removeColumn('usuarios',
      'zipcode'
    );
  }
};

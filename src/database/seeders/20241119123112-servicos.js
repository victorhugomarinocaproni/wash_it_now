'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('servicos', [
      {
        nome: 'Tá limpo, lava-rápido',
        endereco: 'Av. Taltaltal de tau',
        numero: 115,
        descricao: 'Atuando desde não sei quando, sempre oferecendo serviços de qualidade e papapa',
        preco: 15.00,
        zipcode: '13086-754',
      },
      {
        nome: 'Lava-rápido Celsão',
        endereco: 'Av. Teuteuteu de Teu',
        numero: 231,
        descricao: '',
        preco: 25.00,
        zipcode: '13086-200',
      },
      {
        nome: 'Calota Limpa, Lavadora',
        endereco: 'Av. Não sei o que não sei que lá',
        numero: 9,
        descricao: 'Oferecemos nossos serviços de lavagem para qualquer um con o dia a dia corrido.',
        preco: 17.50,
        zipcode: '13086-400',
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicos', null, {});
  }
};

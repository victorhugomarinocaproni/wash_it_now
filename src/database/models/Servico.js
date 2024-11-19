const { Model, DataTypes } = require('sequelize');

class Servico extends Model {
  static init(sequelize) {
    return super.init({
      nome: DataTypes.STRING,
      endereco: DataTypes.STRING,
      descricao: DataTypes.STRING,
      preco: DataTypes.DOUBLE,
      zipcode: DataTypes.STRING,
      numero: DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'Servico',
      tableName: 'servicos',
      underscored: true,
    });
  }
}

module.exports = Servico;
const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    return super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'Usuario',
      tableName: 'usuarios',
      underscored: true,
    });
  }
}

module.exports = Usuario;
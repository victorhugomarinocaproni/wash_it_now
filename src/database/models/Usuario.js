const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class Usuario extends Model {
  static init(sequelize) {
    return super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      endereco: DataTypes.STRING,
      numero_endereco: DataTypes.INTEGER,
      zipcode: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'Usuario',
      tableName: 'usuarios',
      underscored: true,
    });
  }

  // Static Methods 
  static async login(nome, email, senha) {
    const usuario = await this.findOne( {where: {nome, email} } );
    if (!usuario) {
      throw new Error('E-mail Incorreto!');
    }
    const isSenhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!isSenhaCorreta) {
      throw new Error ('Senha Incorreta!');
    }
    return usuario;
  }
}

module.exports = Usuario;
const Usuario = require('../database/models/Usuario');
const bcrypt = require('bcrypt');

const handleErrors = (err) => {
    console.log(err.message, err.code);
}

module.exports = {

    async cadastro_get(req, res) {

    },

    async login_get(req, res) {

    },

    async cadastro_post(req, res) {

        try {
            const salt = await bcrypt.genSalt(10);

            var usr = {
                nome: req.body.nome,
                email: req.body.email,
                senha: await bcrypt.hash(req.body.senha, salt)
            };

            const usuario = await Usuario.create(usr);
            res.status(201).json(usuario);
        }
        catch (err) {
            handleErrors(err);
            res.status(400).send('Erro, usuário não pode ser criado!');
        }
    },

    async login_post(req, res) {

    },
};
const Usuario = require('../database/models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
    console.log(err.message, err.code);

    let erros = {
        email: '',
        senha: ''
    };

    if (err.message === 'E-mail Incorreto!') {
        erros.email = 'E-mail não registrado para este usuário';
    }

    if (err.message === 'Senha Incorreta!') {
        erros.senha = 'A senha está incorreta';
    }

    return erros;
}

const maxAge = 3 * 24 * 60 * 60; // 3 dias em segundos

// jwt deve receber 3 parâmetros: {payload}, secret, {duration}
const createToken = (id) => {
    return jwt.sign({ id }, 'your application secret', {
        expiresIn: maxAge
    });
}

module.exports = {

    async cadastro_get(req, res) {
        res.render('signup');
    },

    async login_get(req, res) {
        res.render('login');
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
            const token = createToken(usuario.id);

            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: maxAge * 1000,
                sameSite: 'lax',
                secure: false});

            res.status(201).json({ usuario: usuario.id });

        }
        catch (err) {
            handleErrors(err);
            res.status(400).send('Erro, usuário não pode ser criado!');
        }
    },

    async login_post(req, res) {

        const { nome , email, senha } = req.body;

        try {
            const usuario = await Usuario.login(nome, email, senha);
            const token = createToken(usuario.id);
            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: maxAge * 1000
            });
            res.status(200).json({ usuario: usuario.id });
        }
        catch (err) {
            const errors = handleErrors(err);
            res.status(400).json({ errors: errors });
        }
    },
};
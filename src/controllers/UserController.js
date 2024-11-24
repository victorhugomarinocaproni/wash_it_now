const Usuario = require('../database/models/Usuario');
const bcrypt = require('bcrypt');

module.exports = {

    async atualizar_dados_get(req, res) {
        const usuario_id = req.params.id;
        const usuario = await Usuario.findByPk(usuario_id);

        if (usuario) {
            res.status(201).render('update', { usuario });
        }
        else {
            res.status(400).json({ err: 'Usuário não encontrado'});
        }
    },

    async atualizar_dados_put(req, res) {
        const usuario_id = req.params.id;
        const usuario = await Usuario.findByPk(usuario_id);

        if (usuario) {

            if (usuario.senha === req.body.senha) {
                const usuario = await Usuario.update({
                    nome: req.body.nome,
                    email: req.body.email,
                    endereco: req.body.endereco,
                    numero_endereco: req.body.numero_endereco,
                    zipcode: req.body.zipcode,
                },
                {
                    where: {id: usuario_id}
                }
                );
            }
            else {
                const salt = await bcrypt.genSalt(10);
                const senha = await bcrypt.hash(req.body.senha, salt); 

                const usuario = await Usuario.update({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: senha,
                    endereco: req.body.endereco,
                    numero_endereco: req.body.numero_endereco,
                    zipcode: req.body.zipcode,
                },
                {
                    where: {id: usuario_id}
                }
                );
            }

        }
        else {
            res.status(400).json({ err: 'Usuário não encontrado'});
        }
    },
};
const Usuario = require('../database/models/Usuario');

module.exports = {

    async atualizar_dados_get(req, res) {
        const usuario_id = req.params.id;
        const usuario = await Usuario.findByPk(usuario_id);

        if (usuario) {
            res.status(201).json({ user: usuario });
        }
        else {
            res.status(400).json({ err: 'Usuário não encontrado'});
        }
    },

    async atualizar_dados_put(req, res) {
        const usuario_id = req.params.id;
    },
};
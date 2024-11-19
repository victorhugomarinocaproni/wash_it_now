const Usuario = require('../database/models/Usuario');

module.exports = {

    async atualizar_dados_get(req, res) {
        res.status(201).json({ ok: 'BATEU NO UPDATE' });
    },

    async atualizar_dados_put(req, res) {
        const usuario_id = req.params;
        
    },
};
const Usuario = require('../database/models/Usuario');

module.exports = {

    async home_get(req, res) {
        res.render('home');
    },
    
};
const jwt = require('jsonwebtoken');
const Usuario = require('../database/models/Usuario');

const requireAuth = (req, res, next) => {

    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'your application secret', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/login');
            }
            else {
                console.log(decodedToken);
                next();
            }
        });
    }
    else {
        res.redirect('/login');
    }
};

const checkCurrentUser = (req, res, next) => {

    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'your application secret', async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.usuario = null;
                next();
            }
            else {
                console.log(decodedToken);
                let usuario = await Usuario.findByPk(decodedToken.id);
                res.locals.usuario = usuario;
                next();
            }
        });
    }
    else {
        res.locals.usuario = null;
        next();
    }
}

const validatePermissions = (req, res, next) => {

    const url_id = parseInt(req.params.id);
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'your application secret', async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
            }
            else {
                let usuario = await Usuario.findByPk(decodedToken.id);
                const id = usuario.id;

                if (url_id !== id) {
                    return res.status(403).json({ err: 'Você não tem permissão para acessar essa página.' });
                }
                next();
            }
        });
    }
    else {
        next();
    }
}

module.exports = { requireAuth, checkCurrentUser, validatePermissions };
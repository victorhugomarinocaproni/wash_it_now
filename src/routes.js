const express = require('express');
const UserController = require('./controllers/UserController.js');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('OK');
});
routes.post('/usuarios', UserController.store);

module.exports = routes;
const { Router } = require('express');
const router = Router();

const AuthController = require('../controllers/AuthController');

router.get('/cadastro', AuthController.cadastro_get);
router.post('/cadastro', AuthController.cadastro_post);
router.get('/login', AuthController.login_get);
router.post('/login', AuthController.login_post);


module.exports = router;
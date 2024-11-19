const { Router } = require('express');
const router = Router();

const NavigationController = require('../controllers/NavigationController');
const UserController = require('../controllers/UserController');

const { requireAuth } = require('../middleware/authMiddleware');

router.get('/home', requireAuth, NavigationController.home_get);

router.get('/usuario/:id', requireAuth, UserController.atualizar_dados_get);
router.put('/usuario/:id', requireAuth, UserController.atualizar_dados_put);

module.exports = router;
const { Router } = require('express');
const router = Router();

const NavigationController = require('../controllers/NavigationController');
const UserController = require('../controllers/UserController');

const { requireAuth, checkCurrentUser, validatePermissions } = require('../middleware/authMiddleware');

// Aplica o Middleware 'checkCurrentUser' para todos os endpoints do tipo GET
router.get('*', checkCurrentUser);

router.get('/home', requireAuth, NavigationController.home_get);

router.get('/usuario/:id', requireAuth, validatePermissions, UserController.atualizar_dados_get);
router.put('/usuario/:id', requireAuth, validatePermissions, UserController.atualizar_dados_put);

module.exports = router;
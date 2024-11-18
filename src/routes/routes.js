const { Router } = require('express');
const router = Router();
const RouteController = require('../controllers/RouteController');
const { requireAuth } = require('../middleware/authMiddleware');

router.get('/home', requireAuth, RouteController.home_get);

module.exports = router;
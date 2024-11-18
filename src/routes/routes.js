const { Router } = require('express');
const router = Router();

const RouteController = require('../controllers/RouteController');

router.get('/home', RouteController.home_get);

module.exports = router;
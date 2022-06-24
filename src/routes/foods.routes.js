const { Router } = require('express');
const foodController = require('../controllers/foodController');

const foodsRoutes = Router();

foodsRoutes.get('/', foodController.index);
foodsRoutes.get('/:idFood', foodController.show);

module.exports = foodsRoutes;
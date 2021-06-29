const Router = require('express');
const ROUTE = new Router();
const deviceController = require('../controllers/deviceController')
const checkRole = require("../middleware/CheckRoleMiddleware")


ROUTE.post('/', checkRole("ADMIN"), deviceController.create)
ROUTE.get('/', deviceController.getAll)
ROUTE.get('/:id', deviceController.getOne)

module.exports = ROUTE;
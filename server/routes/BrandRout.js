const Rout = require('express');
const checkRole = require("../middleware/CheckRoleMiddleware")

const ROUTE = new Rout();

const brandController = require("../controllers/brandController")

ROUTE.post("/", checkRole("ADMIN"), brandController.create )
ROUTE.get("/", brandController.getAll )


module.exports = ROUTE;
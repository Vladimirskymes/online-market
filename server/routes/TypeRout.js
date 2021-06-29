const Rout = require('express');
const ROUTE = new Rout();
const typeController = require("../controllers/typeController")
const checkRole = require("../middleware/CheckRoleMiddleware")

ROUTE.post("/", checkRole("ADMIN"), typeController.create )
ROUTE.get("/", typeController.getAll )


module.exports = ROUTE;
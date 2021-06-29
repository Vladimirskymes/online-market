const Rout = require('express');
const ROUTE = new Rout();
const UserController = require("../controllers/userController")
const authMiddleware = require("../middleware/AuthMiddleware")
ROUTE.post("/registration", UserController.registration )
ROUTE.post("/login", UserController.login)
ROUTE.get("/authorization", authMiddleware, UserController.check)


module.exports = ROUTE;
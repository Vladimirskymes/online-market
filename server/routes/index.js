const Rout = require('express');
const ROUTE = new Rout();

const DeviceRout = require("./DeviceRout");
const BrandRout = require("./BrandRout");
const TypeRout = require("./TypeRout");
const UserRout = require("./UserRout");

ROUTE.use("/user", UserRout);
ROUTE.use("/device", DeviceRout);
ROUTE.use("/brand", BrandRout);
ROUTE.use("/type", TypeRout);

module.exports = ROUTE;
const routes = require("express").Router();

routes.get("/usuarios");
routes.get("/usuarios:id");

module.exports = routes;

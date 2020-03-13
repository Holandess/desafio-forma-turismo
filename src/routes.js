const routes = require("express").Router();

routes.get("/usuarios");
routes.get("/usuarios:id");

routes.get("/usuarios", UserController.index);
routes.get("/usuarios/:id", UserController.usuarioById);

module.exports = routes;

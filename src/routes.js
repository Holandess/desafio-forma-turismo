const routes = require("express").Router();
const UserController = require("./controllers/UserController");

routes.get("/usuarios", UserController.index);
routes.get("/usuarios/:id", UserController.usuarioById);

module.exports = routes;

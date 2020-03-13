const routes = require("express").Router();
const UserController = require("./controllers/usersControllers");

routes.get("/usuarios", UserController.index);
routes.get("/usuarios/:id", UserController.usuarioById);

module.exports = routes;

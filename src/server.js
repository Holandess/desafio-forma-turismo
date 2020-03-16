const express = require("express");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(routes);

//Porta usada no localhost
app.listen(4200);

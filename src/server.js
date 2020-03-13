const express = require("express");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(routes);

//port used for localhost
app.listen(4200);

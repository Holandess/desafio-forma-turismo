const mysql = require("mysql");
const connectionConfig = require("../config/database");

var connection = mysql.createConnection({
  host: connectionConfig.host,
  user: connectionConfig.user,
  password: connectionConfig.password,
  database: connectionConfig.database
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

const connection = require("../model/db");

module.exports = {
  async index(req, res) {
    connection.query("SELECT * FROM usuarios", (err, rows, fields) => {
      return res.json(rows);
    });
  },

  async usuarioById(req, res) {
    const usuario = req.params.id;
    connection.query(
      `SELECT * FROM usuarios WHERE id= ?`,
      [usuario],
      (err, rows, fields) => {
        return res.json(rows);
      }
    );
  }
};

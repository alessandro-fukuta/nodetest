var mysql = require("mysql2");

var connection = mysql.createConnection({
    host:"localhost",
    user:"fukuta",
    password:"FatecFranca123#",
    database: "MINHA_API"
});

module.exports = connection;

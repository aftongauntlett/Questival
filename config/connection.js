// Set up connection to database and export connection

// Boiler Plate Connection 
var mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",

    //adding process.env so I don't have to show my password in code ("PASSWORD= ___ node server.js")
    password: process.env.PASSWORD,
    database: "questivalDB"
});

connection.connect(function (err) {
    if (err) throw err;
});

// Export the connection.
module.exports = connection;
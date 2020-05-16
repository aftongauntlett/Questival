// Set up the connection to the database and export that connection

// Boiler Plate Connection copied from activity files
var mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",

    //adding process.env (accessing the environment variable password) so I don't have to show my password in code ("PASSWORD= ___ node server.js")
    password: process.env.PASSWORD,
    database: "questival_db"
});


// Export the connection.
module.exports = connection;
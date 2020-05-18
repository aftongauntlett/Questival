// Set up the connection to the database and export that connection

// Boiler Plate Connection copied from activity files
var mysql = require("mysql");
const config = require("./db");

<<<<<<< HEAD
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    
    //adding process.env (accessing the environment variable password) so I don't have to show my password in code ("PASSWORD= ___ node server.js")
    password: "AuraZaira77",
    database: "questival_DB"
});
=======

const connection = mysql.createConnection(process.env === 'production' ? config.heroku : config.db);
>>>>>>> 4efba1b2f112250dfda36259efa8d9b132d12d9d


// Export the connection.
module.exports = connection; 
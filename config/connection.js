// Set up the connection to the database and export that connection

// Boiler Plate Connection copied from activity files
var mysql = require("mysql");

<<<<<<< HEAD
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
=======
// Get database configs
const config = require("./db");

// Apply heroku config if node_env is production
const connection = mysql.createConnection(process.env.NODE_ENV === 'production' ? config.heroku : config.db);
>>>>>>> 0b0769d1f50075d358d34c20e5c753b7ee6e1597


// Export the connection.
module.exports = connection; 
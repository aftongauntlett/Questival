// Set up the connection to the database and export that connection

// Boiler Plate Connection copied from activity files
var mysql = require("mysql");
const config = require("./db");


const connection = mysql.createConnection(process.env === 'production' ? config.heroku : config.db);


// Export the connection.
module.exports = connection; 
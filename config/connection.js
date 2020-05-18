// Set up the connection to the database and export that connection

// Boiler Plate Connection copied from activity files
var mysql = require("mysql");

// Get database configs
const config = require("./db");

// Apply heroku config if node_env is production
const connection = mysql.createConnection(process.env.NODE_ENV === 'production' ? config.heroku : config.db);


// Export the connection.
module.exports = connection; 
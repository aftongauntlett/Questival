// import connection.js 
const connection = require("../config/connection");

// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const event = {

    all(callback) {
        connection.query("SELECT * FROM event", (err, events) => {
            if (err) throw err;
            callback(events)
        })
    },

    create(callback, name) {
        connection.query("INSERT INTO event SET ?", {
            event_name,
            event_desc: 0,
            event_location,
            event_date,
        }, function (resp) {
            callback(resp)
        })
    },
}


// Export at the END of the .js file.
module.exports = event;


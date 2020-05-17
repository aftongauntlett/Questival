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

    create(event_name, event_desc, event_location, event_date, callback) {
        connection.query("INSERT INTO event SET ?", {
            event_name,
            event_desc,
            event_location,
            event_date,
        }, function (err, resp) {
            if (err) throw err;
            callback(resp)
        })
    },

    // pulling from the join tables here, connecting info from the user and interests tables to the events description page.
    getWithUsersAndInterests(id, callback) {
        let query = "SELECT * FROM event WHERE id = " + id;
        let userQuery = "SELECT * FROM user INNER JOIN users_events ON user.id = users_events.user_id where users_events.event_id = " + id;
        let interestQuery = "SELECT * FROM interest INNER JOIN interest_events ON interest.id = interest_events.interest_id where interest_events.event_id = " + id;

        connection.query(query, (err, res) => {
            if (err) throw err;
            connection.query(userQuery, (err, users) => {
                if (err) throw err;
                connection.query(interestQuery, (err, interests) => {
                    if (err) throw err;
                    callback(res, users, interests);
                })
            })
        })
    }
}

// Export at the END of the .js file.
module.exports = event;



// import connection.js 
const connection = require("../config/connection");

// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const interest = {

    all(callback) {
        connection.query("SELECT * FROM interest", (err, interests) => {
            if (err) throw err;
            callback(interests)
        })
    },

    create(interest, interest_desc, callback) {
        connection.query("INSERT INTO interest SET ?", {
            interest,
            interest_desc,
         }, function (err, resp) {
            console.log('err', err);
            console.log('resp', resp)
            if (err) throw err;
            callback(resp)
        })
    },

    // pulling from the join tables here, connecting info from the user and interests tables to the events description page.
    getWithUsersAndEvents(id, callback) {
        let query = "SELECT * FROM interest WHERE id = " + id;
        let userQuery = "SELECT * FROM user INNER JOIN users_events ON user.id = users_interest.user_id where users_interest.interest_id = " + id;
        let interestQuery = "SELECT * FROM event INNER JOIN interest_events ON event.id = interest_events.event_id where interest_events.interest_id = " + id;

        connection.query(query, (err, res) => {
            if (err) throw err;
            connection.query(userQuery, (err, users) => {
                if (err) throw err;
                connection.query(eventQuery, (err, events) => {
                    if (err) throw err;
                    callback(res, users, events);
                })
            })
        })
    }
}

// Export at the END of the .js file.
module.exports = interest;
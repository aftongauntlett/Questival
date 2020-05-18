const connection = require("../config/connection");
const user = {
    all(callback) {
        connection.query("SELECT * FROM user", (err, users) => {
            if (err) throw err;
            callback(users)
        })
    },

    getEventsUsersAndInterests(id, callback) {
        let query = "SELECT * FROM user WHERE id = " + id;
        let eventQuery = "SELECT * FROM event INNER JOIN users_events ON event.id = users_events.event_id where users_events.user_id = " + id;
        let interestQuery = "SELECT * FROM interest INNER JOIN users_interest ON interest.id = users_interest.interest_id where users_interest.user_id = " + id;

        connection.query(query, (err, res) => {
            if (err) throw err;
            connection.query(eventQuery, (err, events) => {
                if (err) throw err;
                connection.query(interestQuery, (err, interests) => {
                    if (err) throw err;
                    callback(res, events, interests);
                })
            })
        })
    },

    create(user_name, callback) {
        connection.query("INSERT INTO user SET ?", {
            attendee_name: user_name
        }, function (err, resp) {
            if (err) throw err;
            callback(resp)
        })
    },

    addInterest(user_id, interest_id, callback) {
        connection.query("INSERT INTO users_interest SET ?", {
            user_id,
            interest_id
        }, function (err, resp) {
            if (err) throw err;
            callback(resp)
        })
    },

    addEvent(user_id, event_id, callback) {
        connection.query("INSERT INTO users_events SET ?", {
            user_id,
            event_id
        }, function (err, resp) {
            if (err) throw err;
            callback(resp)
        })
    },

    get(id, callback) {
        let query = "SELECT * FROM user WHERE id = " + id;
        connection.query(query, (err, res) => {
            if (err) throw err;
            callback(res)
        })
    }
}

module.exports = user;

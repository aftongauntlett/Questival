// CRUD (Create, Read, Update, Delete) Methods

// Return all users attending this (selected) event.

// This is made to talk to the database (this is sometimes entered in the server.js file, but for sanity sake we are creating the "models" folder to store this data.)

var orm = require('../config/orm.js');

// Return all users attending this (selected) event.
var event = {
    selectEvent: function(id, cb) {
      orm.selectEvent("event", id, function(res) {
      cb(res);
      });
    }
};
  
module.exports = event;
  


// connection.query("SELECT * FROM tasks;" = example of what code will be inside of these files
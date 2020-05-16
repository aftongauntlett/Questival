// CRUD (Create, Read, Update, Delete) Methods
var orm = require("../config/orm.js")

// Create a method to return the users events 
// Create another method to return the users interestsvar orm = require('../config/orm.js')

var attendee = {
    selectAll: function (cb) {
      orm.selectAll('user', function (res) {
        cb(res)
      })
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
      orm.create('user', cols, vals, function (res) {
        cb(res)
      })
    },
    update: function (objColVals, condition, cb) {
      orm.update('user', objColVals, condition, function (res) {
        cb(res)
      })
    },
    delete: function (condition, cb) {
      orm.delete('user', condition, function (res) {
        cb(res)
      })
    }
  }

  module.exports = attendee
var connection = require ('./connection.js');
var orm = {
    selectEvent: function (tableInput, id, cb){
        var queryString = "SELECT * FROM" + tableInput +"WHERE user_id ="+id+";"
        createConnection.query(queryString,function(err,result){
            if (err){ throw err;
            }
            cb(result);
        });
    },

    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
    
};

module.exports = orm ;

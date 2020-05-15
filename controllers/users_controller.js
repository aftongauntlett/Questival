// Import Express
const express = require("express");
const router = express.Router();
const connection = require("../config/connection");

// export the router at the end of your file.
module.exports = router;


app.get('/', function (req, res) {
    connection.query("SELECT * FROM user;", function(err, data) {
      if (err) throw err;
     
      res.render('index', {user: data});
    })
  })
  app.post("/api/user", function(req, res) {
    
    connection.query("INSERT INTO user (attendee_name) VALUES (?)", [req.body.attendee_name], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
  
      // Send back the ID of the new plan
      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    });
  });

 
  // Update a attendee name
  app.put("/api/user/:id", function(req, res) {
    connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.attendee_name, req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
  });
  
  // Delete a plan
  app.delete("/api/user/:id", function(req, res) {
    connection.query("DELETE FROM user WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
  });

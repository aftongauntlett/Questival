// Boiler Plate Express setup

const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const eventRoutes = require("./controllers/events_controller.js");
const userRoutes = require("./controllers/users_controller.js");
const interestRoutes = require("./controllers/interests_controller.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// Set the port of our application, process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(eventRoutes);
app.use(userRoutes);
app.use(interestRoutes);


app.get("/", function (req, res) {
    res.render("index")
})

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});


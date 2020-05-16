// Import Express
const express = require("express");
const router = express.Router();
const event = require("../models/event")

// import config connection here
const connection = require("../config/connection");

// Import event.js here
const burger = require("../models/event")

// create new events
router.post("/event", function (req, res) {
    burger.create(function (resp) {
        res.redirect("/")
    }, req.body.event)
})

router.get("/events", function (req, res) {
    event.all(result => {
        res.render("events", { events: result })
    })
})

// router.get("/", function (req, res) {
//     burger.all(function (burgers) {
//         const devouredBurgers = burgers.filter(burger => burger.devoured === 1)
//         const uneatenBurgers = burgers.filter(burger => burger.devoured === 0)
//         res.render("index", { devouredBurgers, uneatenBurgers })
//     })
// })

// router.post("/devour/:id", function (req, res) {
//     burger.devour(req.params.id, function () {
//         res.redirect("/")
//     })
// })

// export the router at the END  of your file.
module.exports = router;

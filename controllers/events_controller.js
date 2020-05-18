// Import Express
const express = require("express");
const router = express.Router();
const event = require("../models/event")

router.get("/events", function (req, res) {
    event.all(result => {
        res.render("events/events", { events: result })
    })
})

router.get("/events/new", function (req, res) {
    res.render("events/newEvent");
})

router.get("/events/:id", function (req, res) {
    event.getWithUsersAndInterests(req.params.id, (result, users, interests) => {
        console.log(JSON.stringify(result))
        console.log(interests)
        res.render("events/eventsDetail", { event: result[0], users, interests })
    })
})

router.post("/events", function (req, res) {
    event.create(req.body.event_name, req.body.event_desc, req.body.event_location, req.body.event_date, function (resp) {
        res.redirect("/events")
    })
})

module.exports = router;

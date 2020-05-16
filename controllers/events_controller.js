// Import Express
const express = require("express");
const router = express.Router();
const event = require("../models/event")

router.get("/events", function (req, res) {
    event.all(result => {
        res.render("events/events", { events: result })
    })
})

// export the router at the END  of your file.
module.exports = router;

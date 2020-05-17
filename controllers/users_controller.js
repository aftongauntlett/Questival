const express = require("express");
const router = express.Router();
const user = require("../models/user")
const interest = require("../models/interest.js")
const event = require("../models/event.js")

router.get("/users", function (req, res) {
    user.all(result => {
        res.render("users/usersMain", { users: result })
    })
})



router.get("/users/:id", function (req, res) {
    user.getEventsUsersAndInterests(req.params.id, (result, events, interests) => {
        console.log(JSON.stringify(result))
        console.log(interests)
        res.render("users/usersDetail", { user: result[0], events, interests })
    })
})

router.get("/user/new", function (req, res) {
    res.render("users/newUser", {})
})

router.post("/user", function (req, res) {
    user.create(req.body.name, function (resp) {
        res.redirect("/users")
    })
})

router.get("/users/edit/:id", function (req, res) {
    user.get(req.params.id, (users) => {
        interest.all(interests => {
            event.all(events => {
                res.render("users/userEdit", { user: users[0], interests, events })
            })
        })
    })
})

router.post("/user/:id/interest/:interest_id", function (req, res) {
    user.addInterest(req.params.id, req.params.interest_id, function (resp) {
        res.redirect("/users/" + req.params.id)
    })
})

module.exports = router;
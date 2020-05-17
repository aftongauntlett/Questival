const express = require("express");
const router = express.Router();
const user = require("../models/user")
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
module.exports = router;
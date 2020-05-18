const user = require("../models/user.js");

test("Can retrieve user based on user ID", () => {
    user.getEventsUsersAndInterests(1, function(res){
        return expect(typeof(res)).toBe("object");
    })
});
  
test("Can retrieve event which users is attending based on user ID", () => {
    user.getEventsUsersAndInterests(1, function(res, events){
        return expect(typeof(events)).toBe("object");
    })
});

test("Can retrieve interest which user is interesting based on user ID", () => {
    user.getEventsUsersAndInterests(1, function(res, events, interests){
        return expect(typeof(interests)).toBe("object");
    })
});
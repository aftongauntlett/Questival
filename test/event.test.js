const event = require("../models/event.js");

test("Can retrieve event based on event ID", () => {
    event.getWithUsersAndInterests(1, function(res){
        return expect(typeof(res)).toBe("object");
    })
});
  
test("Can retrieve event and users attending based on event ID", () => {
    event.getWithUsersAndInterests(1, function(res, users){
        return expect(typeof(users)).toBe("object");
    })
});

test("Can retrieve event and interest based on event ID", () => {
    event.getWithUsersAndInterests(1, function(res, users, interest){
        return expect(typeof(interest)).toBe("object");
    })
});
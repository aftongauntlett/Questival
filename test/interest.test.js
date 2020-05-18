const interest = require("../models/interest.js");

test("Can retrieve interest based on interest ID", () => {
    interest.getWithUsersAndEvents(1, function(res){
        return expect(typeof(res)).toBe("object");
    })
});
  
test("Can retrieve interest and users interesting based on interest ID", () => {
    interest.getWithUsersAndEvents(1, function(res, users){
        return expect(typeof(users)).toBe("object");
    })
});

test("Can retrieve interest and event based on interest ID", () => {
    interest.getWithUsersAndEvents(1, function(res, users, event){
        return expect(typeof(event)).toBe("object");
    })
});


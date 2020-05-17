const interest = require("../models/interest.js");

test("Can retrieve interest based on interest ID", () => {
    interest.getWithUsersAndEvents(1, function(res){
        return expect(typeof(res)).toBe("object");
    })
});



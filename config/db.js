module.exports = {
    db: {
        host: "localhost",
        port: 3306,
        user: "root",
        //adding process.env so I don't have to show my password in my code
        password: process.env.PASSWORD,
        database: "burgersDB"
    },
    heroku: {
        host: "qn66usrj1lwdk1cc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "iuu3k2kco9mjowpp",
        password: "DB_PASSWORD",
        database: "t4a1t4a2eeysw4u2",
    }
}
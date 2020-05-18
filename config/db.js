// include heroku or local db options

module.exports = {
    db: {
        host: "localhost",
        port: 3306,
        user: "root",
        //adding process.env so I don't have to show my password in my code
        password: process.env.PASSWORD,
        database: "questival_db"
    },
    heroku: {
        host: "us-cdbr-east-06.cleardb.net",
        port: 3306,
        user: "beead55ea48309",
        password: process.env.DB_PASSWORD,
        database: "heroku_fac058297c4f621",
    }
}

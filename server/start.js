var app = require("express");
var connection = require("./db/connetion");
var db = require("./db/db");

connection.sequelize
            .authenticate()
                .then(() => console.log("Success!"))
                .catch(err => console.log(err));
db.sequelize.sync({force: true});
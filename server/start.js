var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var connection = require("./db/connetion");
var db = require("./db/db");

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}));


connection.sequelize
            .authenticate()
                .then(() => console.log("Success!"))
                .catch(err => console.log(err));

app.listen(8080, "localhost",() =>{
    console.log("Server has started!");
});

require("./routing/controllers")(app);

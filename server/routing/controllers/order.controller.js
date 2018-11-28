const db = require("../../db/db");

const controller = "/order";

module.exports = app => {

    app.get(controller + "/all", (req, res)=>{
        db.Order.findAll({
            attributes: ['id', 'num'],
            include: [
                {model: db.Customer, attributes: ['fullName']},
                {model: db.SalesPerson, attributes: ['fullName']},
            ]
        }).then(data => {res.send(data); console.log(data)});
    });
    
    app.get(controller + "/findByName/:name", (req, res) => {
        db.Order.findAll({
            attributes: ['id', 'num'],
            include: [
                {model: db.SalesPerson, attributes: ['fullName'],  where: {fullName: req.params.name} },
                {model: db.Customer, attributes: ['fullName']},
            ]
        })
        .then(data => res.send(data));
    });
};
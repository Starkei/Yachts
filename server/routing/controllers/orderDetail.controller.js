const db = require("../../db/db");

const controller = "/orderDetails";

module.exports = app => {

    app.get(controller + "/all", (req, res)=>{
        db.OrderDetail.findAll({
            attributes: ['id', 'num'],
            include: [
                {model: db.Order, attributes: ['num']},
            ]
        }).then(data => {res.send(data); console.log(data)});
    });
    
    app.get(controller + "/findByName/:name", (req, res) => {
        db.OrderDetail.findAll({
            attributes: ['id', 'num'],
            include: [
                {model: db.Order, attributes: ['num'], include: [
                    {model: db.SalesPerson, where: {fullName: req.params.name}}
                ]},
            ]
        })
        .then(data => {res.send(data); console.log(data)});
    });
};
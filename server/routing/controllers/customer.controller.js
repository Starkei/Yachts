const db = require("../../db/db");

const controller = "/customer";

module.exports = app => {

    app.get(controller + "/all", (req, res)=>{
        db.Customer.findAll({
            attributes: ['id', 'fullName', 'phoneNumber'],
        }).then(data => {res.send(data); console.log(data)});
    });
    
    app.get(controller + "/findByPrice/:price", (req, res) => {
        db.Customer.findAll({
            attributes: ['id', 'name', 'price'],
            include: [
                {model: db.OrderDetail, attributes: ['num']},
            ],
            where: {
                price: { gt: Number(req.params.price)}
            }
        })
        .then(data => res.send(data));
    });
};
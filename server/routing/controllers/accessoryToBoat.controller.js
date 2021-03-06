const db = require("../../db/db");

const controller = "/accessoryToBoat";

module.exports = app => {

    app.get(controller + "/all", (req, res)=>{
        db.AccessoryToBoat.findAll({
            attributes: ['id', 'num'],
            include: [
                {model: db.Accessory, attributes: ['name']},
            ]
        }).then(data => {res.send(data); console.log(data)});
    });
    
    app.get(controller + "/findByNum/:num", (req, res) => {
        db.AccessoryToBoat.findAll({
            attributes: ['id', 'num'],
            where: {
                num: { lt: Number(req.params.num)}
            },
            include: [
                {model: db.Accessory, attributes: ['name']},
            ]
        })
        .then(data => {res.send(data); console.log(data)});
    });
};
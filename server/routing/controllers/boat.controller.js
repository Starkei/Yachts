const db = require("../../db/db");

const controller = "/boat";

module.exports = app => {

    app.get(controller + "/all", (req, res)=>{
        db.Boat.findAll({
            attributes: ['id', 'model'],
            include: [{model: db.Order, attributes: ['num']}]
        }).then(data => res.send(data));
    });
    
    app.get(controller + "/findByModel/:model", (req, res) => {
        db.Boat.findAll({
            where: {
                price: req.params.model
            }
        })
        .then(data => res.send(data));
    });
};
const db = require("../../db/db");

const controller = "/accessory";

module.exports = app => {

    app.get(controller + "/all", (req, res)=>{
        db.Accessory.findAll().then(data => res.send(data));
    });
    
    app.get(controller + "/findByPrice/:price", (req, res) => {
        db.Accessory.findAll({
            where: {
                price: { gt: Number(req.params.price)}
            }
        })
        .then(data => res.send(data));
    });
};
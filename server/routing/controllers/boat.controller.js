const db = require("../../db/db");

const controller = "/boat";

module.exports = app => {

    app.get(controller + "/all", (req, res)=>{
        db.Accessory.findAll().then(data => res.send(data));
    });
    
    app.get(controller + "/findByModel/:model", (req, res) => {
        db.Accessory.findAll({
            where: {
                price: req.params.model
            }
        })
        .then(data => res.send(data));
    });
};
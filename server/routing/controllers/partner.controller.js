const db = require("../../db/db");

const controller = "/partner";

module.exports = app => {

    app.get(controller + "/all", (req, res)=>{
        db.Partner.findAll({
            attributes: ['id', 'name']
        }).then(data => {res.send(data); console.log(data)});
    });
    
    app.get(controller + "/findByName/:name", (req, res) => {
        db.Partner.findAll({
            attributes: ['id', 'name'],
            where: {
                name: { like: '%'+req.params.name +'%'}
            }
        })
        .then(data => res.send(data));
    });
};
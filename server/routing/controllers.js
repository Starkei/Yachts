module.exports = app => {
    require("./controllers/accessory.controller")(app);
    require("./controllers/accessoryToBoat.controller")(app);
    require("./controllers/boat.controller")(app);
}
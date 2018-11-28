module.exports = app => {
    require("./controllers/accessory.controller")(app);
    require("./controllers/accessoryToBoat.controller")(app);
    require("./controllers/customer.controller")(app);
    require("./controllers/order.controller")(app);
    require("./controllers/orderDetail.controller")(app);
    require("./controllers/partner.controller")(app);
    require("./controllers/boat.controller")(app);
    require("./controllers/salesPeson.controller")(app);
}
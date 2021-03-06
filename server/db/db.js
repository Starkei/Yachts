const connection = require("./connetion");

const Customer = require("./models/customer.model")(connection);
const SalesPerson = require("./models/salesPerson.model")(connection);
const Order = require("./models/order.model")(connection);
const Boat = require("./models/boat.model")(connection);
const OrderDetail = require("./models/orderDetail.model")(connection);
const AccessoryToBoat = require("./models/accessoryToBoat.model")(connection);
const Accessory = require("./models/accessory.model")(connection);
const Partner = require("./models/partner.model")(connection);

const db = {};

Accessory.hasMany(AccessoryToBoat);
Accessory.belongsTo(Partner);
Accessory.belongsTo(OrderDetail);

Partner.hasMany(Accessory);

Boat.hasMany(AccessoryToBoat);
Boat.belongsTo(Order);

AccessoryToBoat.belongsTo(Accessory);
AccessoryToBoat.belongsTo(Boat);


Order.hasMany(Boat);
Order.hasMany(OrderDetail);
Order.belongsTo(SalesPerson);
Order.belongsTo(Customer);

OrderDetail.hasMany(Accessory);
OrderDetail.belongsTo(Order);

SalesPerson.hasMany(Order);

Customer.hasMany(Order);

db.Customer = Customer;
db.SalesPerson = SalesPerson;
db.Order = Order;
db.Boat = Boat;
db.OrderDetail = OrderDetail;
db.AccessoryToBoat = AccessoryToBoat;
db.Accessory = Accessory;
db.Partner = Partner;

db.sequelize = connection.sequelize;

module.exports = db;
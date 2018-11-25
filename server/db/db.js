const connection = require("./connetion");

const Customer = require("./models/customer.model")(connection);
const Contract = require("./models/contract.model")(connection);
const SalesPerson = require("./models/salesPerson.model")(connection);
const Order = require("./models/order.model")(connection);
const Boat = require("./models/boat.model")(connection);
const OrderDetail = require("./models/orderDetail.model")(connection);
const AccessoryToBoat = require("./models/accessoryToBoat.model")(connection);
const Accessory = require("./models/accessory.model")(connection);
const Partner = require("./models/partner.model")(connection);

const db = {};

Accessory.hasMany(AccessoryToBoat);

Partner.hasMany(Accessory);

Boat.hasMany(AccessoryToBoat);

Order.hasMany(Boat);
Order.hasMany(OrderDetail);

SalesPerson.hasMany(Order);

Customer.hasMany(Order);

db.Customer = Customer;
db.Contract = Contract;
db.SalesPerson = SalesPerson;
db.Order = Order;
db.Boat = Boat;
db.OrderDetail = OrderDetail;
db.AccessoryToBoat = AccessoryToBoat;
db.Accessory = Accessory;
db.Partner = Partner;

db.sequelize = connection.sequelize;

module.exports = db;
const Sequelize = require("sequelize");
const config = require("./config")
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: config.operatorsAliases,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
});

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
module.exports = {
    database: 'yachts',
    user: 'root',
    password: '5789887',
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
};
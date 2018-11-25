module.exports = connection => {

    const Order = connection.sequelize.define('orders', {

        id:{
            type: connection.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        num: {
            type: connection.Sequelize.INTEGER,
            unique: true
        }
    });

    return Order;
};
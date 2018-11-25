module.exports = connection => {

    const OrderDetail = connection.sequelize.define('orderDetails', {
        id: {
            type: connection.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        num: {
            type: connection.Sequelize.INTEGER,
            unique: true
        }
    });

    return OrderDetail;
};
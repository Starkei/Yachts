module.exports = (connection) => {
    
    const Accessory = connection.sequelize.define('accessories', {
        id: {
            type: connection.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    
        name: {
            type: connection.Sequelize.STRING,
            unique: true
        },
    
        price: {
            type: connection.Sequelize.DOUBLE
        }
    });

    return Accessory
};
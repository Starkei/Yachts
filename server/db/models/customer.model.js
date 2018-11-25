module.exports = connection => {
   
    const Customer = connection.sequelize.define('customers', {
        id: {
            type: connection.Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    
        fullName: {
            type: connection.Sequelize.STRING,
            unique: true
        },
    
        phoneNumber: {
            type: connection.Sequelize.INTEGER
        }
    });

    return Customer;
};
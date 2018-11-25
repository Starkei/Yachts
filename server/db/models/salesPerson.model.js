module.exports = connection => 
{
    const SalesPerson = connection.sequelize.define('salesPersons',{

        id: {
            type: connection.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    
        fullName: {
            type: connection.Sequelize.STRING,
            unique: true
        },
    
        phoneNumber: {
            type: connection.Sequelize.INTEGER
        }
    
    });

    return SalesPerson;
};
module.exports = connection =>{
    
    const Contract = connection.sequelize.define('contacts', {
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
    
    return Contract
};
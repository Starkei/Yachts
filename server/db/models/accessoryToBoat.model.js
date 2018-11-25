module.exports = connection => {

    const AccessoryToBoat = connection.sequelize.define('accessoriesToBoat', {

        id:{
            type: connection.Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    
        num: {
            type: connection.Sequelize.INTEGER,
            unique: true
        }
    
    });
   

    return AccessoryToBoat
};
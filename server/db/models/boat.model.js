module.exports = (connection) => {

    const Boat = connection.sequelize.define('boats', {
        id: {
            type: connection.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    
        model: {
            type: connection.Sequelize.STRING,
            unique: true
        }
    });

    return Boat
};
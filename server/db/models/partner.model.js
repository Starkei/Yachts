module.exports = connection => {
    
    const Partner = connection.sequelize.define('parners', {
        id:{
            type: connection.Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        name:{
            type: connection.Sequelize.STRING,
            unique: true
        }
    });

    return Partner;
};
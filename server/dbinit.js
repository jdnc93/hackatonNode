
var Sequelize = require('sequelize');

const User = dbContext.sequelize.define('User', {
    id : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
});

const Building = dbContext.sequelize.define('Building', {
    id : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: Sequelize.STRING,
});

const Room = dbContext.sequelize.define('Room', {
    id : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: Sequelize.STRING,
    number: Sequelize.INTEGER,
});

const Person = dbContext.sequelize.define('Person', {
    id : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    faceId: Sequelize.STRING,
    image : Sequelize.TEXT('long'),
    number: Sequelize.INTEGER,
    building: Sequelize.STRING,
});

Building.hasMany(Room, {as: 'rooms', foreignKey : 'buildingId', targetKey: 'id'});

dbContext.User = User;
dbContext.Building = Building;
dbContext.Room = Room;
dbContext.Person = Person;

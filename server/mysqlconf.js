const Sequelize = require('sequelize');

const dbConnection = {
  host: 'localhost',
  database: 'locator',
  username: 'root',
  password: 'root'
};

const sequelize = new Sequelize(dbConnection.database, dbConnection.username, dbConnection.password, {
  host: dbConnection.host,
  dialect: 'mysql',
  pool: {
      max: 5,
      min: 0,
      idle: 10000
  },
});

dbContext.sequelize = sequelize;
require('./dbinit');
sequelize.sync().then(() =>{
  require('./datainit');
}).catch(error =>{
  console.log(error);
});
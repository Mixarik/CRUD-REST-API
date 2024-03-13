const {Sequelize} = require('sequelize')
const env = require('./env.config.js');
const {createNamespace} = require('cls-hooked');

const namespace = createNamespace('ns');

Sequelize.useCLS(namespace);

const db = new Sequelize({
   dialect: env.DB_TYPE,
   host: env.DB_HOSTNAME,
   port: env.DB_PORT,
   username: env.DB_USERNAME,
   password: env.DB_PASSWORD,
   database: env.DB_DATABASE,
   define: {
      timestamps: false
   }
});

const openConnection = async () => {
   try {
      await db.authenticate();
      console.log('Connection has been established successfully.')
   } catch (e) {
      console.log('Unable to connect to the database: ', e)
   }
};

const closeConnection = async () => {
   try {
      await db.close();
   } catch (e) {
      console.log(e)
   }
};

module.exports = {db, openConnection, closeConnection, namespace};

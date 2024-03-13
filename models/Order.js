const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('crud', 'postgres', '1221', {
   host: 'localhost',
   dialect: 'postgres'
});

const Order = sequelize.define(
  'Order',
  {
     order_id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
     },
     create_time: DataTypes.DATE,
     products: {type: DataTypes.JSONB}
  },
  {
     tableName: 'orders',
     timestamps: false,
  })
;

module.exports = {Order};
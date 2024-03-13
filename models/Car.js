const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize('crud', 'postgres', '1221', {
   host: 'localhost',
   dialect: 'postgres'
});

const Car = sequelize.define(
  'Car', {
     car_id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
     },
     car_model_title: {
        allowNull: false,
        type: DataTypes.STRING
     },
     model: {
        allowNull: false,
        type: DataTypes.STRING
     },
     fuel_type: {
        allowNull: false,
        type: DataTypes.STRING
     },
     number_models_sold: {
        allowNull: false,
        type: DataTypes.INTEGER
     }
  },
  {
     tableName: 'cars',
     timestamps: false,
  }
);

module.exports = {Car};
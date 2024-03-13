'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("cars", {
         car_id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER
         },
         car_model_title: {
            allowNull: false,
            type: Sequelize.DataTypes.STRING
         },
         model: {
            allowNull: false,
            type: Sequelize.DataTypes.STRING
         },
         fuel_type: {
            allowNull: false,
            type: Sequelize.DataTypes.STRING
         },
         number_models_sold: {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER
         }
      })
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("Cars")
   }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("orders", {
         order_id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER
         },
         create_time: Sequelize.DataTypes.DATE,
         products: {type: Sequelize.JSONB},
         customer: {
            allowNull: false,
            type: Sequelize.DataTypes.STRING
         },
         status: {
            allowNull: false,
            type: Sequelize.DataTypes.STRING
         }

      })
   },

   async down(queryInterface) {
      await queryInterface.dropTable("productOrder")
   }
};

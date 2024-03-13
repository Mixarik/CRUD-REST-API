const {Order} = require('../models/Order.js');

const resolvers = {
   Query: {
      orders: async () => await Order.findAll(),
      order: async (_, {order_id}) => await Order.findByPk(order_id)
   },
   Mutation: {
      createOrder: async ({products, customer, status}) => {
         return await Order.create({
            createdTime: new Date(),
            products,
            customer,
            status
         });
      },
      deleteOrder: async ({order_id}) => {
         const order = await Car.findByPk(order_id);
         if (!order) {
            throw new Error(`Car with ID ${order} not found`);
         }
         await order.destroy();
         return true;
      }

   }
};

module.exports = {resolvers};
const {gql} = require('apollo-server');


const typeDefs = gql`
 type Query {
    orders: [Order!]!
    order(id: ID!): Order
  }
  
  type Product {
    car_id: ID!
    car_model_title: String!
    model: String!
    fuel_type: String!
    number_models_sold: Int
  }

  type Order {
    order_id: ID!
    createdTime: String!
    products: [Product!]!
    customer: String!
    status: String!
  }
  type Mutation {
   createOrder(id: ID!): Order
   deleteOrder(id: ID!): Order
}
`;


module.exports = {typeDefs};

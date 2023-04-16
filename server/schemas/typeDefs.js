const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Username {
    _id: ID
    username: String
  }

  type Query {
    usernames: [Username]!
    username(usernameID: ID!): Username
  }
`;

module.exports = typeDefs;

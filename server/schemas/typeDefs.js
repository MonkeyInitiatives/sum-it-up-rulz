// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    summaries: [Summary]
  }

  type SummaryApi {
    sentences: String
  }

  type Summary{
  _id: ID
  summaryText: String!
  createdAt: String 
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    getSummary(text: String!, sentnum: Int): SummaryApi
    summaries(username: String): [Summary]
    summary(summaryId: ID!): Summary
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addSummary(username:String!, summaryText:String!): Summary
  }
`;

module.exports = typeDefs;
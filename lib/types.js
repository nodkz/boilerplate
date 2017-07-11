// For reference:
// http://graphql.org/learn/schema/
const typeDefs = `
  type User {
    id: Int!
    firstName: String
    lastName: String
    about: String
  }

  type Query {
    user(id: Int!): User
    users: [User]
  }
`;

export default typeDefs;

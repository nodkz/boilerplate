const typeDefs = `
  type User {
    id: Int!
    created: String!
    firstName: String
    lastName: String
    emailAddress: String!
    username: String
    about: String
    avatarUrl: String
  }

  type Query {
    user(
      id: Int
      firstName: String
      lastName: String
      username: String
    ): User
    users: [User]
  }
`;

export default typeDefs;

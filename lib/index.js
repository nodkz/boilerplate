import express from 'express';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { find } from 'lodash';
import 'colors';

const app = express();

const typeDefs = `
  type User {
    id: Int!
    created: Int
    firstName: String
    lastName: String
    about: String
    submitted: [Post]
  }

  type Post {
    id: Int!
    by: Int
    created: Int
    content: String
    title: String
    url: String
    public: Boolean
    related: [Post]
  }

  type Query {
    post(id: Int!): Post
    posts: [Post]
    user(id: Int!): User
    users: [User]
  }
`;

const resolvers = {
  Query: {
    post: (_, { id }) => find(posts, { id: id }),
    posts: () => posts,
    user: (_, { id }) => find(users, { id: id }),
    users: () => users,
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

addMockFunctionsToSchea({ schema });

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => console.log(`
GraphQL server up and running on ${`localhost:4000/graphql`.green}
`));

import express from 'express';
import graphqlHTTP from 'express-graphql';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { find } from 'lodash';
import moment from 'moment';
import casual from 'casual';
import 'colors';

const app = express();

const typeDefs = `
  type User {
    id: Int!
    created: String
    firstName: String
    lastName: String
    about: String
    submitted: [Post]
  }

  type Post {
    id: Int!
    by: Int
    created: String
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

const mocks = {
  Post: () => ({
    id: casual.integer(0,10),
    by: casual.integer(0,10),
    created: moment(Date.now()).format('MMMM Do YYYY'),
    content: casual.description,
    title: casual.title,
    url: casual.url,
    public: true,
  }),
  User: () => ({
    id: casual.integer(0,10),
    created: moment(Date.now()).format('MMMM Do YYYY'),
    firstName: casual.first_name,
    lastName: casual.last_name,
    about: casual.short_description
  }),
};

addMockFunctionsToSchema({ schema, mocks });

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => console.log(`
GraphQL server up and running on ${`localhost:4000/graphql`.green}
`));

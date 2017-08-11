import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import typeDefs from './types';
import mocks from './mocks';
import resolvers from './resolvers';

// http://dev.apollodata.com/tools/graphql-tools/generate-schema.html
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// http://dev.apollodata.com/tools/graphql-tools/mocking.html
addMockFunctionsToSchema({ schema, mocks });

export default schema;
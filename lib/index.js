import express from 'express';
import graphqlHTTP from 'express-graphql';

// The executable schema
import schema from './schema';

const app = express();
const PORT = 4000;

// Define our routes
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => console.log(`GraphQL server up and running on localhost:4000/${PORT}`));

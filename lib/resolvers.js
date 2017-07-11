import { find } from 'lodash';

// For reference:
// http://graphql.org/learn/execution/#root-fields-resolvers
const resolvers = {
  Query: {
    user: (_, { id }) => find(users, { id: id }),
    users: () => users,
  },
};

export default resolvers;
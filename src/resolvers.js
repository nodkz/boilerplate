import { find } from 'lodash';

// http://graphql.org/learn/execution/#root-fields-resolvers
const resolvers = {
  Query: {
    user: (_, { id, firstName, lastName, username }) =>
      find(users, {
        id,
        firstName,
        lastName,
        username,
      }),
    users: () => users,
  },
};

export default resolvers;

import { find } from 'lodash';

// http://graphql.org/learn/execution/#root-fields-resolvers
const resolvers = {
  Query: {
    user: (_, { id, firstName, lastName, username }) => {
      return find(users, {
        id: id,
        firstName: firstName,
        lastName: lastName,
        username: username
      });
    },
    users: () => users,
  },
};

export default resolvers;
import moment from 'moment';
import casual from 'casual';

const mocks = {
  User: () => ({
    id: casual.integer(0,10),
    created: moment(Date.now()).format('MMMM Do YYYY'),
    firstName: casual.first_name,
    lastName: casual.last_name,
    emailAddress: casual.email,
    username: casual.username,
    about: casual.description,
    avatarUrl: casual.url
  }),
};

export default mocks;
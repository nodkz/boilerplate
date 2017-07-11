import moment from 'moment';
import casual from 'casual';

const mocks = {
  User: () => ({
    id: casual.integer(0,10),
    created: moment(Date.now()).format('MMMM Do YYYY'),
    firstName: casual.first_name,
    lastName: casual.last_name,
    about: casual.short_description
  }),
};

export default mocks;
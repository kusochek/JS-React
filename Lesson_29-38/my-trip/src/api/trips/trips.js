import axios from '../index';

export const trips = {
  get: () => axios.get('/trips')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

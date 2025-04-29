import axios from '../index';

export const trip = {
  get: (id) => axios.get(`/trips/${id}`)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error);
    }),
  post: (params) => axios.post('/trips', params),
  put: (id, params) => axios.put(`/trips/${id}`, params),
};

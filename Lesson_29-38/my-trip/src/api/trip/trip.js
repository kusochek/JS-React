import axios from '../index';

export const trip = {
  get: (id) => axios.get(`/trips/${id}`),
  post: (params) => axios.post('/trips', params),
  put: (id, params) => axios.put(`/trips/${id}`, params),
};

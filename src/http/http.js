import axios from 'axios'

axios.interceptors.request.use(function (config) {
    return config;
  });
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
export default axios
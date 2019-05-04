import axios from 'axios';
const baseurl = axios.create ({
  baseURL: 'http://localhost:8000/', //https://www.backend.epsotechsolutions.com/
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
});

baseurl.interceptors.request.use (
  function (config) {
    const token = localStorage.getItem('id_token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

export default baseurl;
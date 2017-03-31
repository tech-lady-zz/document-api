import axios from 'axios';
import { getToken } from './helpers';

const api = (AUTH_TOKEN = '', BASE_URL) => {
  const instance = axios.create({
    baseURL: BASE_URL || 'http://localhost:3001',
  });

  // Adds interceptors to every request
  instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${AUTH_TOKEN}`;
    console.log(config);
    return config;
  }, error => Promise.reject(error));

// Add a response interceptor
  axios.interceptors.response.use(response => response);

  return instance;
};

export default api(getToken() || '');

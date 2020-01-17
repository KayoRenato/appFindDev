import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.140:3333', //192.168.100.140
});

export default api;
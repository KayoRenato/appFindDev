import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.11:3333', //exp://192.168.1.11:19000
});

export default api;
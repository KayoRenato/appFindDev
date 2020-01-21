import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.140:3333', //Atualizar sempre que iniciar o Expo
});

export default api;
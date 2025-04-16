import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // 根据实际情况修改
  timeout: 5000,
});

export default instance;

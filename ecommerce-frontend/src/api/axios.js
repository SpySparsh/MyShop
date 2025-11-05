import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://myshop-4-rjis.onrender.com/api',
  withCredentials: true // needed for refresh token cookie
});
export default instance;

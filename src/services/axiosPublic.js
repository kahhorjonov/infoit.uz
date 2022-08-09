import axios from 'axios';

const BASE_URL = 'http://134.122.124.181:8089/';

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

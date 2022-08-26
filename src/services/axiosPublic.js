import axios from 'axios';

const BASE_URL = 'http://142.93.250.225:8089/';

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

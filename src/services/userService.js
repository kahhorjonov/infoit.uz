import axios from 'axios';
import api from 'utils/config.json';

const { baseURL } = api;

export function fetchAllUsers() {
  const config = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMiIsImlhdCI6MTY1OTgwMTAzOSwiZXhwIjoxNjYxNTI5MDM5fQ.khok_N4bSt4x93kTwTLG8qX8Fez1x3c-j45uLWr-K9qpqX9006xAKTzkunY35ecYDSN7eAou99h18Qrsi9xnjg',
    },
  };
  return axios.get(`${baseURL}/user/v1`, config);
}

export const getUserById = id => {
  const config = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMiIsImlhdCI6MTY1OTgwMTAzOSwiZXhwIjoxNjYxNTI5MDM5fQ.khok_N4bSt4x93kTwTLG8qX8Fez1x3c-j45uLWr-K9qpqX9006xAKTzkunY35ecYDSN7eAou99h18Qrsi9xnjg',
    },
  };

  return axios.get(`${baseURL}/user/v1/by-id/${id}`, config);
};

export default {
  fetchAllUsers,
  getUserById,
};

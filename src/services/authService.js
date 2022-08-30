import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { toast } from 'react-toastify';

import api from 'utils/config.json';

const { baseURL } = api;

// const token = localStorage.getItem("token");

const parseJwt = token => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export const getTokenFromStorage = () => {
  let token;
  const tokenLs = localStorage.getItem('token');

  const parsedJwt = parseJwt(tokenLs);
  if (tokenLs && parsedJwt.exp * 1000 > Date.now()) {
    token = tokenLs;
  }
  return token;
};

export const login = (phoneNumber, password) => {
  const result = axios.post(`${baseURL}/auth/v1/login`, {
    phoneNumber: `+998${phoneNumber}`,
    password,
  });

  return result;
};

export function setToken(jwt) {
  const path = jwtDecode(jwt).roles.name.slice(5).toLowerCase();
  const parsedJwt = parseJwt(jwt);
  if (jwt && parsedJwt.exp * 1000 > Date.now()) {
    localStorage.setItem('token', jwt);
    if (path === 'admin') return window.location.replace(`/${path}`);
  }
  return null;
}

export const register = async data => {
  try {
    const {
      data: {
        objectKoinot: { accessToken },
      },
    } = await axios.post(`${baseURL}/auth/v1/register`, data);

    const parsedJwt = parseJwt(accessToken);

    if (accessToken && parsedJwt.exp * 1000 > Date.now()) {
      localStorage.setItem('token', accessToken);
    }
    return window.location.replace('/');
  } catch (error) {
    toast.error(error);
  }
  return null;
};

export const decodedToken = () => {
  const jwt = localStorage.getItem('token');
  const parsedJwt = parseJwt(jwt);
  let decodedJwt;

  if (jwt && parsedJwt.exp * 1000 > Date.now()) {
    decodedJwt = jwtDecode(jwt);
  }
  return decodedJwt;
};

export default {
  login,
  decodedToken,
  getTokenFromStorage,
  register,
};

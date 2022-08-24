import axios from 'axios';
import jwtDecode from 'jwt-decode';

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
    phoneNumber,
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
    if (path === 'user') return window.location.replace('/');
  }
  return null;
}

// const me = () => {
//   const config = {
//     headers: { Authorization: `Bearer ${token}` },
//   };

//   return axios.get(baseURL + "/user/me", config);
// };

// export const register = async (data) => {
//   try {
//     const { data: jwt } = await axios.post(baseURL + "/user/registerUser", data);

//     const path = jwtDecode(jwt).roles[0].roleName.slice(5).toLowerCase();
//     const parsedJwt = parseJwt(jwt);

//     if (jwt) {
//       if (parsedJwt.exp * 1000 < Date.now()) {
//         return;
//       } else {
//         localStorage.setItem("token", jwt);
//         return window.location.replace(`/${path}`);
//       }
//     }
//   } catch (error) {}
// };

// export const logout = () => {
//   localStorage.removeItem("token");
// };

export const decodedToken = () => {
  const jwt = localStorage.getItem('token');
  const parsedJwt = parseJwt(jwt);
  let decodedJwt;

  if (jwt && parsedJwt.exp * 1000 > Date.now()) {
    decodedJwt = jwtDecode(jwt);
  }
  return decodedJwt;
};

// export function loginWithJwt(jwt) {
//   const parsedJwt = parseJwt(localStorage.getItem("token"));

//   if (parsedJwt && parsedJwt.exp * 1000 < Date.now()) {
//     return alert("Profilga qaytadan kiring");
//   } else {
//     localStorage.setItem("token", jwt);
//   }
// }

// export default {
//   me,
//   register,
//   logout,
//   loginWithJwt,
//   useAuth,
//   decodedToken,
// };

export default {
  login,
  decodedToken,
  getTokenFromStorage,
};

import axios from "axios";
import api from "utils/config.json";

const { baseURL } = api;

export function fetchAllUsers() {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMiIsImlhdCI6MTY1OTU4NzgzNCwiZXhwIjoxNjYxMzE1ODM0fQ.v8scELtTJpwgYSMvGMaZmyO7reUec9ogXmqkXKsmsskV-3h8VaF3y97zhlayExT0EG-oCR9nCdcO0bHULWSYBw",
    },
  };
  return axios.get(`${baseURL}/user/v1`, config);
}

export default {
  fetchAllUsers,
};

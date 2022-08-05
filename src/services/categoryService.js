import axios from "axios";
import api from "utils/config.json";

const { baseURL } = api;

export function fetchAllCategories() {
  return axios.get(`${baseURL}/category/v1`);
}

export default {
  fetchAllCategories,
};

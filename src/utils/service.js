import axios from "axios";
import { OMDB_API_KEY } from "../constants/index";
const instance = axios.create({
  baseURL: `http://www.omdbapi.com/`,
});
instance.interceptors.request.use((config) => {
  config.params = {
    apikey: OMDB_API_KEY,
    ...config.params,
  };
  return config;
});
export default instance;

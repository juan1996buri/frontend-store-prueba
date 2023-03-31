import axios from "axios";

import { store } from "../features/store";
import { selectToken } from "../features/authSlice";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(async (config) => {
  const token = selectToken(store.getState());

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;

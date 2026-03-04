import axios from "axios";
import { encryptData } from "../utils/crypto";
import { getToken, logout } from "./token.service";
import { openSnackbar } from "../utils/snackbar";
import GlobalSnackbar from "../Components/Global/Globalsnackbar";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 40000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": import.meta.env.VITE_API_KEY,
  },
});


api.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (import.meta.env.DEV) {
      //   console.log("RAW PAYLOAD:", config.data);
    }

    if (config.data) {
      const encrypted = encryptData(config.data);

      config.data = {
        payload: encrypted,
      };

      if (import.meta.env.DEV) {
        // console.log("ENCRYPTED PAYLOAD STRING:", encrypted);
        // console.log("FINAL REQUEST BODY:", config.data);
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 400 || error.response?.status === 401) {
      let message = "Something went wrong";

      if (error.response) {
        message =
          error.response.data?.message ||
          error.response.data?.error ||
          "Request failed";
      } else if (error.request) {
        message = "Server not responding";
      }

      openSnackbar(message, "error");

    }
    return Promise.reject(error);
  }
);

export default api;

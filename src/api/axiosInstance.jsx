import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://e8dba4410d4b53f8.mokky.dev",
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});

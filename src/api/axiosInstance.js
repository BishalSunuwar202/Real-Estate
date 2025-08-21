import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.100.10:8002/api",
  timeout: 1000,
});

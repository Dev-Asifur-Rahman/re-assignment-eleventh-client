import axios from "axios";

export const ApiInstance = axios.create({
  baseURL: "https://re-assignment-eleventh-server.vercel.app",
  withCredentials: true,
});

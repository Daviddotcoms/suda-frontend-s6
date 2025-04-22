import axios from "axios";

export const classmatesApi = axios.create({
  baseURL: "http://localhost:3100",
});

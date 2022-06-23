import axios from "axios";

export const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

import axios from "axios";

export const marvelClient = axios.create({
  baseURL: "http://gateway.marvel.com:80/v1/public",
});

export const msMarvelClient = axios.create({
  baseURL: "127.0.0.1:8000",
  timeout: 1000,
  headers: {
    Accept: "application/json",
  },
});


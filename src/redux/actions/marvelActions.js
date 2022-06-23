import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCharacters = createAsyncThunk(
  "marvel/fetchCharacters",
  async () => {
    // callAxios("get", `characters${marvelUrl}`);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    // return { response, loading };
    return JSON.parse(await response.text());
  }
);

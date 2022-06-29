import { createAsyncThunk } from "@reduxjs/toolkit";
import { marvelClient } from "../../utils/axios/axios.util";

export const fetchComics = createAsyncThunk(
  "marvel/fetchComics",
  async (payload) => {
    const { offset, marvelUrl } = payload;

    try {
      const response = await marvelClient.get(
        `${marvelUrl}&offset=${offset}&limit=100`
      );

      return await response.data;
    } catch (error) {
      return error.response;
    }
  }
);

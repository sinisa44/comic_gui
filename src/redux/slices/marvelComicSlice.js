import { createSlice } from "@reduxjs/toolkit";
import { fetchComics } from "../actions/marvelComicActions";

const initialState = {
  comics: [],
  loading: false,
  offset: 100,
  errors: undefined,
};

const marvelComicSlice = createSlice({
  name: "marvelComics",
  initialState,
  reducers: {
    setOffset(state, { payload }) {
      state.offset = payload;
    },
  },

  extraReducers: {
    [fetchComics.fulfilled]: (state, action) => {
      const { payload } = action;
      console.log({payload});
      if (payload.code === 200) {
        state.comics = payload.data.results;
      } else {
        state.errors = payload.data.status;
      }
      state.loading = false;
    },
    [fetchComics.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    [fetchComics.pending]: (state) => {
      state.loading = true;
    },
  },
});

export const { setOffset } = marvelComicSlice.actions;
export default marvelComicSlice.reducer;

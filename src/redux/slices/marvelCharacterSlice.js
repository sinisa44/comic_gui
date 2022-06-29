import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "../actions/marvelCharacterActions";

const initialState = {
  characters: [],
  loading: false,
  offset: 100,
  error: undefined,
};

const marvelCharacterSlice = createSlice({
  name: "marvel",
  initialState,
  reducers: {
    setOffset(state, { payload }) {
      state.offset = payload;
    },
  },
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      const { payload } = action;

      if (payload.code === 200) {
        state.characters = payload.data.results;
      } else {
        state.error = payload.data.status;
      }
      state.loading = false;
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    [fetchCharacters.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { setOffset } = marvelCharacterSlice.actions;

export default marvelCharacterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "../actions/marvelActions";
const initialState = {
  characters: [],
  loading: false,
};

const marvelSlice = createSlice({
  name: "marvel",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      console.log("action success", action);
      console.log("state success", state);
      state.characters = action.payload;
    },
    [fetchCharacters.rejected]: (state, action) => {
      console.log("action", action);
      console.log("state", state);
      state.characters = action.payload;
    },

    [fetchCharacters.pending]: (state, action) => {
      console.log("action pending", action);
      console.log("state pending", state);
      state.loading = true;
    },
  },
});

export default marvelSlice.reducer;

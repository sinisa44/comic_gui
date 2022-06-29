import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import marvelCharacterReducer from "./slices/marvelCharacterSlice";

import marvelComicReducer from "./slices/marvelComicSlice";

const store = configureStore({
  reducer: {
    marvelCharacters: marvelCharacterReducer,
    marvelComics: marvelComicReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";

import marvelReducer from "./slices/marvelSlice";

const store = configureStore({
  reducer: {
    marvel: marvelReducer,
  },
});

export default store;

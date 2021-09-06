import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../reducers/modalReducer";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

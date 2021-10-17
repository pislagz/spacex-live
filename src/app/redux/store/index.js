import { configureStore } from "@reduxjs/toolkit";
import unitReducer from "app/redux/reducers/unitReducer";
import modalReducer from "../reducers/modalReducer";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    units: unitReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import dashboardSettingsReducer from "app/redux/reducers/dashboardSettingsReducer";
import dashboardDataReducer from "app/redux/reducers/dashboardDataReducer";
import modalReducer from "../reducers/modalReducer";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    dashboardSettings: dashboardSettingsReducer,
    dashboardData: dashboardDataReducer,
  },
});

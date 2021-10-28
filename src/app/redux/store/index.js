import { configureStore } from "@reduxjs/toolkit";
import dashboardSettingsReducer from "app/redux/slices/dashboardSettingsSlice";
import dashboardDataReducer from "app/redux/slices/dashboardDataSlice";
import modalReducer from "app/redux/slices/modalSlice";
import currentRouteReducer from "app/redux/slices/currentRouteSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    currentRoute: currentRouteReducer,
    dashboardSettings: dashboardSettingsReducer,
    dashboardData: dashboardDataReducer,
  },
});

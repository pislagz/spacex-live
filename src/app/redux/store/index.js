import { configureStore } from "@reduxjs/toolkit";
import dashboardSettingsReducer from "app/redux/reducers/dashboardSettingsReducer";
import dashboardDataReducer from "app/redux/reducers/dashboardDataReducer";
import modalReducer from "app/redux/reducers/modalReducer";
import currentRouteReducer from "app/redux/reducers/currentRouteReducer";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    currentRoute: currentRouteReducer,
    dashboardSettings: dashboardSettingsReducer,
    dashboardData: dashboardDataReducer,
  },
});

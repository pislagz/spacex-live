import { configureStore } from "@reduxjs/toolkit";
import dashboardSettingsReducer from "app/redux/slices/dashboardSettingsSlice";
import dashboardDataReducer from "app/redux/slices/dashboardDataSlice";
import modalReducer from "app/redux/slices/modalSlice";
import currentRouteReducer from "app/redux/slices/currentRouteSlice";
import rocketsDataReducer from "app/redux/slices/rocketsDataSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    currentRoute: currentRouteReducer,
    dashboardSettings: dashboardSettingsReducer,
    dashboardData: dashboardDataReducer,
    rocketsData: rocketsDataReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";
import { ROUTES } from "app/constants/routes";

export const currentRouteSlice = createSlice({
  name: "currentRoute",
  initialState: { selected: ROUTES[0].name },

  reducers: {
    setCurrentRoute(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setCurrentRoute } = currentRouteSlice.actions;

export default currentRouteSlice.reducer;

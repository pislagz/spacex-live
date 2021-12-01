import { createSlice } from "@reduxjs/toolkit";

export const routeSlice = createSlice({
  name: "currentRoute",
  initialState: {
    route: null,
  },

  reducers: {
    setRoute(state, action) {
      state.route = action.payload.route;
    },
  },
});

export const { setRoute } = routeSlice.actions;

export default routeSlice.reducer;

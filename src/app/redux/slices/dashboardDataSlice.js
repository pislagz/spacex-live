import { createSlice } from "@reduxjs/toolkit";
import { actions } from "app/redux/actions";

export const dashboardSlice = createSlice({
  name: "dashboardData",
  initialState: {
    launches: {},
    starlink: {},
    status: "idle",
  },
  extraReducers: {
    [actions.dashboard.fetchDashboardData.pending]: (state, action) => {
      state.status = "loading";
    },
    [actions.dashboard.fetchDashboardData.fulfilled]: (state, action) => {
      state.status = "success";
      state.launches = action.payload.launches;
    },
    [actions.dashboard.fetchDashboardData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default dashboardSlice.reducer;

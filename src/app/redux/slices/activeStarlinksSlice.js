import { createSlice } from "@reduxjs/toolkit";
import { actions } from "app/redux/actions";

export const activeStarlinks = createSlice({
  name: "activeStarlinksData",
  initialState: {
    count: null,
    status: "idle",
  },
  extraReducers: {
    [actions.activeStarlinks.fetchActiveStarlinks.pending]: (state, action) => {
      state.status = "loading";
    },
    [actions.activeStarlinks.fetchActiveStarlinks.fulfilled]: (
      state,
      action
    ) => {
      state.status = "success";
      state.count = action.payload.activeStarlinks;
    },
    [actions.activeStarlinks.fetchActiveStarlinks.rejected]: (
      state,
      action
    ) => {
      state.status = "failed";
    },
  },
});

export default activeStarlinks.reducer;

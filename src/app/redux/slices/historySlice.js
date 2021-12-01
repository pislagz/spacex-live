import { createSlice } from "@reduxjs/toolkit";
import { actions } from "app/redux/actions";

export const historySlice = createSlice({
  name: "historyData",
  initialState: {
    data: null,
    status: "idle",
  },
  extraReducers: {
    [actions.history.fetchHistoryData.pending]: (state, action) => {
      state.status = "loading";
    },
    [actions.history.fetchHistoryData.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload.historyResponse;
    },
    [actions.history.fetchHistoryData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default historySlice.reducer;

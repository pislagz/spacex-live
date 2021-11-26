import { createSlice } from "@reduxjs/toolkit";
import { actions } from "app/redux/actions";

export const companySlice = createSlice({
  name: "companyData",
  initialState: {
    data: null,
    status: "idle",
  },
  extraReducers: {
    [actions.company.fetchCompanyData.pending]: (state, action) => {
      state.status = "loading";
    },
    [actions.company.fetchCompanyData.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload.companyResponse;
    },
    [actions.company.fetchCompanyData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default companySlice.reducer;

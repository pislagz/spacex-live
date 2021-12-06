import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "app/api";

export const fetchHistoryData = createAsyncThunk(
  "history/data",
  async (dispatch, getState) => {
    const historyResponse = await api.history.getHistoryData();

    return {
      historyResponse,
    };
  }
);

export const history = {
  fetchHistoryData,
};

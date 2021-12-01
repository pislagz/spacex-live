import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "app/api";

export const fetchStarlinkData = createAsyncThunk(
  "starlink/data",
  async (dispatch, getState) => {
    const starlinkResponse = await api.starlink.getSatsPositions();

    console.log({ starlinkResponse });

    return {
      starlinks: [...starlinkResponse],
    };
  }
);

export const starlink = {
  fetchStarlinkData,
};

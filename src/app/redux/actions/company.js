import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "app/api";

export const fetchCompanyData = createAsyncThunk(
  "company/data",
  async (dispatch, getState) => {
    const companyResponse = await api.company.getCompanyData();

    console.log({ companyResponse });

    return {
      companyResponse,
    };
  }
);

export const company = {
  fetchCompanyData,
};

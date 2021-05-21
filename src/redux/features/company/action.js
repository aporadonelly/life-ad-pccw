import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyAdapter } from "@adapters";

export const getCompanyRegInfoAction = createAsyncThunk(
  "@@EMPF/COMPANY/GET_COMPANY_REG_INFO",
  async (_payload, { rejectWithValue }) => {
    try {
      const companyRegInfo = await companyAdapter.getCompanyProfile();
      return { companyRegInfo };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
)
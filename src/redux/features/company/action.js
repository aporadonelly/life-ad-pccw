import { createAsyncThunk } from "@reduxjs/toolkit";
import { companyAdapter, } from "@adapters";

export const LdRegCmpnyInfoforAdmnPrtl = createAsyncThunk(
  "@@EMPF/COMPANY/GET_COMPANY_REG_INFO",
  async (_payload, { rejectWithValue }) => {
    try {
      const companyRegInfo = await companyAdapter.LdRegCmpnyInfoforAdmnPrtl();
      return { companyRegInfo };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);


import { createAsyncThunk } from "@reduxjs/toolkit";
import { employerAdapter } from "@adapters";

export const getEmployers = createAsyncThunk(
  "@@EMPF/EMPLOYER/GET_EMPLOYERS",
  async (_payload, { rejectWithValue }) => {
    try {
      const employers = await employerAdapter.getAll();
      return {
        employers,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

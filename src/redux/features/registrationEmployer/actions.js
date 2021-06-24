import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { registrationEmployer } from "@adapters";

export const draftEnquiry = createAction("@@empf/reg/er/draftEnquiry");

export const ldSrchCmpny = createAsyncThunk(
  "@@empf/reg/er/ldSrchCmpny",
  async (payload, { rejectWithValue }) => {
    try {
      const employers = await registrationEmployer.ldSrchCmpny(payload);
      return { employers };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

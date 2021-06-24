import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { enrollmentEmployer } from "@adapters";

export const draftEnquiry = createAction("@@empf/reg/er/draftEnquiry");

export const setSelectedPnsnId = createAction(
  "@@empf/reg/er/setSelectedPnsnId"
);

export const ldSrchCmpny = createAsyncThunk(
  "@@empf/reg/er/ldSrchCmpny",
  async (payload, { rejectWithValue }) => {
    try {
      const employers = await enrollmentEmployer.ldSrchCmpny(payload);
      return { employers };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

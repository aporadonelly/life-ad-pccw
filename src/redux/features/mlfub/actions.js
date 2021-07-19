import { createAsyncThunk } from "@reduxjs/toolkit";
import { mlfub } from "@adapters";

export const ldFundPriceEnqry = createAsyncThunk(
  "@@empf/mlfub/ldFundPriceEnqry",
  async (payload, { rejectWithValue }) => {
    try {
      const { fundPriceEnqryResponse } = await mlfub.ldFundPriceEnqry(payload);
      return { fundPriceEnqryResponse };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

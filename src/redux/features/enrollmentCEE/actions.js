import { createAsyncThunk } from "@reduxjs/toolkit";
import { enrollmentCEE } from "@adapters";

export const getIndAccntLst = createAsyncThunk(
  "@@empf/enr/cee/getIndAccntLst",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await enrollmentCEE.getIndAccntLst(payload);
      return res;
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

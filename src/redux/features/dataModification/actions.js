import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataModificationAdapter } from "@adapters";

export const vldUpldDoc = createAsyncThunk(
  "@@empf/dm/vldUpldDoc",
  async (payload, { rejectWithValue }) => {
    try {
      const fileReport = await dataModificationAdapter.vldUpldDoc(payload);
      return fileReport;
    } catch (error) {
      alert(error);
      return rejectWithValue({ error });
    }
  }
);

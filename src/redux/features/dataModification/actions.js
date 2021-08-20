import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataModification } from "@adapters";

export const uploadDocuments = createAsyncThunk(
  "@@EMPF/SUPPORTING_DOCUMENTS/vldUpldDoc",
  async (payload, { rejectWithValue }) => {
    try {
      const fileReport = await dataModification.validateDocuments(payload);
      return fileReport;
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

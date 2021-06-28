import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { enrollmentEmployer } from "@adapters";

export const draftEnquiry = createAction("@@empf/enr/er/draftEnquiry");

export const setSelectedPnsnId = createAction(
  "@@empf/enr/er/setSelectedPnsnId"
);

export const ldSrchCmpny = createAsyncThunk(
  "@@empf/enr/er/ldSrchCmpny",
  async (payload, { rejectWithValue }) => {
    try {
      const employers = await enrollmentEmployer.ldSrchCmpny(payload);
      return { employers };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getSchmLst = createAsyncThunk(
  "@@empf/enr/er/getSchmLst",
  async (_payload, { rejectWithValue }) => {
    try {
      const schemes = await enrollmentEmployer.getSchmLst();
      return { schemes };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getTrstLst = createAsyncThunk(
  "@@empf/enr/er/getTrstLst",
  async (_payload, { rejectWithValue }) => {
    try {
      const trustees = await enrollmentEmployer.getTrstLst();
      return { trustees };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

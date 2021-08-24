import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { registrationEmployee } from "@adapters";

export const draftEnquiry = createAction("@@empf/reg/ee/draftEnquiry");

export const ldSrchRegInd = createAsyncThunk(
  "@@empf/reg/ee/ldSrchRegInd",
  async (payload, { rejectWithValue }) => {
    try {
      const employees = await registrationEmployee.ldSrchRegInd(payload);
      return { employees };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const ldRegIndInfo = createAsyncThunk(
  "@@empf/reg/ee/ldRegIndInfo",
  async (payload, { rejectWithValue }) => {
    try {
      const employee = await registrationEmployee.ldRegIndInfo(payload);
      return { employee };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

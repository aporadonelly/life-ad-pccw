import { createAsyncThunk } from "@reduxjs/toolkit";
import { registrationEmployer } from "@adapters";

export const ldCmpnyRltdPrsn = createAsyncThunk(
  "@@empf/reg/er/ldCmpnyRltdPrsn",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const cmpnyRltdPrsn = await registrationEmployer.ldCmpnyRltdPrsn(payload);
      return { cmpnyPrsnTypId: payload.cmpnyPrsnTypId, cmpnyRltdPrsn };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const ldRegCmpnyInfoforAdmnPrtl = createAsyncThunk(
  "@@empf/reg/er/ldRegCmpnyInfoforAdmnPrtl",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const regCmpnyInfo = await registrationEmployer.ldRegCmpnyInfoforAdmnPrtl(
        payload
      );
      return { regCmpnyInfo };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

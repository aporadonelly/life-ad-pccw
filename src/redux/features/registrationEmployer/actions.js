import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { registrationEmployer } from "@adapters";
import { selectedCompanyUUIDSelector } from "./selectors";

export const ldCmpnyRltdPrsn = createAsyncThunk(
  "@@empf/reg/er/ldCmpnyRltdPrsn",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const cmpnyUuid = selectedCompanyUUIDSelector(getState());
      console.log(cmpnyUuid, "cmpnyUuid");
      const cmpnyRltdPrsn = await registrationEmployer.ldCmpnyRltdPrsn({
        cmpnyUuid,
        ...payload,
      });
      return { cmpnyPrsnTypId: payload.cmpnyPrsnTypId, cmpnyRltdPrsn };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const setSelectedClientUUID = createAction(
  "@@empf/reg/er/setSelectedClientUUID"
);

export const ldRegCmpnyInfoforAdmnPrtl = createAsyncThunk(
  "@@empf/reg/er/ldRegCmpnyInfoforAdmnPrtl",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const cmpnyUuid = selectedCompanyUUIDSelector(getState());
      const regCmpnyInfo = await registrationEmployer.ldRegCmpnyInfoforAdmnPrtl(
        { cmpnyUuid, ...payload }
      );
      return { regCmpnyInfo };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const setSelectedCompanyUUID = createAction(
  "@@empf/reg/er/setSelectedCompanyUUID"
);

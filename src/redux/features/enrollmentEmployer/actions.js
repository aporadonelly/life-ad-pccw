import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { enrollmentEmployer } from "@adapters";
import {
  selectedSchemeUUIDSelector,
  selectedEmployerUUIDSelector,
} from "./selectors";

export const draftEnquiry = createAction("@@empf/enr/er/draftEnquiry");

export const setSelectedPnsnId = createAction(
  "@@empf/enr/er/setSelectedPnsnId"
);

export const setSelectedCompanyUUID = createAction(
  "@@empf/enr/er/setSelectedCompanyUUID"
);

export const setSelectedEmployerUUID = createAction(
  "@@empf/enr/er/setSelectedEmployerUUID"
);

export const setSelectedSchemeUUID = createAction(
  "@@empf/enr/er/setSelectedSchemeUUID"
);

export const setSelectedPayrollGroupUUID = createAction(
  "@@empf/enr/er/setSelectedPayrollGroupUUID"
);

export const ldSrchCmpny = createAsyncThunk(
  "@@empf/enr/er/ldSrchCmpny",
  async (payload, { rejectWithValue }) => {
    try {
      const employers = await enrollmentEmployer.ldSrchCmpny(payload);
      return { employers };
    } catch (error) {
      if (error === "ldSrchCmpny_ErrMsg") {
        return { employers: [] };
      }
      return rejectWithValue({ error });
    }
  }
);

export const ldEnrCmpnyInfo = createAsyncThunk(
  "@@empf/enr/er/ldEnrCmpnyInfo",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const employerUuid = selectedEmployerUUIDSelector(getState());
      const schmUuid = selectedSchemeUUIDSelector(getState());
      const enrCmpnyInfo = await enrollmentEmployer.ldEnrCmpnyInfo({
        employerUuid,
        schmUuid,
        ...payload,
      });
      return { enrCmpnyInfo };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const ldGradeInfo = createAsyncThunk(
  "@@empf/enr/er/ldGradeInfo",
  async (payload, { rejectWithValue }) => {
    try {
      const employers = await enrollmentEmployer.ldGradeInfo(payload);
      return { employers };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

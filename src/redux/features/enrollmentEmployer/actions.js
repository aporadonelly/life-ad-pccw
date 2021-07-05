import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { enrollmentEmployer } from "@adapters";
import {
  selectedSchemeUUIDSelector,
  selectedCompanyUUIDSelector,
} from "./selectors";

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
      const cmpnyUuid = selectedCompanyUUIDSelector(getState());
      const schmUuid = selectedSchemeUUIDSelector(getState());
      const enrCmpnyInfo = await enrollmentEmployer.ldEnrCmpnyInfo({
        cmpnyUuid,
        schmUuid,
        ...payload,
      });
      return { enrCmpnyInfo };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const setSelectedCompanyUUID = createAction(
  "@@empf/reg/er/setSelectedCompanyUUID"
);

export const setSelectedSchemeUUID = createAction(
  "@@empf/reg/er/setSelectedSchemeUUID"
);

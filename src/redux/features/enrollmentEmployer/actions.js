import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { compact, concat } from "lodash";
import { enrollmentEmployer } from "@adapters";
import {
  selectedCompanyUUIDSelector,
  selectedEmployerUUIDSelector,
  selectedSchemeUUIDSelector,
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
      const cmpnyUuid = selectedCompanyUUIDSelector(getState());
      const schmUuid = selectedSchemeUUIDSelector(getState());

      const primaryContactPerson = await enrollmentEmployer.ldCntctPrsnInfo({
        cntctPrsnTypId: "CT_PCP",
        cmpnyUuid,
        ...payload,
      });

      const secondaryContactPerson = await enrollmentEmployer.ldCntctPrsnInfo({
        cntctPrsnTypId: "CT_SCP",
        cmpnyUuid,
        ...payload,
      });

      const [enrCmpnyInfo] = await enrollmentEmployer.ldEnrCmpnyInfo({
        cmpnyUuid,
        schmUuid,
        ...payload,
      });

      return {
        enrCmpnyInfo: {
          ...enrCmpnyInfo,
          contactPersons: compact(
            concat(primaryContactPerson, secondaryContactPerson)
          ),
        },
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const ldGradeInfo = createAsyncThunk(
  "@@empf/enr/er/ldGradeInfo",
  async (payload, { rejectWithValue }) => {
    try {
      const gradeInfo = await enrollmentEmployer.ldGradeInfo(payload);
      return { gradeInfo };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

// payroll dispatcher
export const ldCntctPrsnInfo = createAsyncThunk(
  "@@empf/enr/er/ldCntctPrsnInfo",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const cmpnyUuid = selectedCompanyUUIDSelector(getState());
      const contactPersons = await enrollmentEmployer.ldCntctPrsnInfo({
        cmpnyUuid,
        ...payload,
      });
      return { contactPersons };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

// sa
// export const ldCntctPrsnInfo = createAsyncThunk(
//   "@@empf/enr/er/ldCntctPrsnInfo",
//   async (payload, { rejectWithValue, getState }) => {
//     try {
//       const cmpnyUuid = selectedCompanyUUIDSelector(getState());
//       const contactPersons = await enrollmentEmployer.ldCntctPrsnInfo({
//         cmpnyUuid,
//         ...payload,
//       });
//       return { contactPersons };
//     } catch (error) {
//       return rejectWithValue({ error });
//     }
//   }
// );

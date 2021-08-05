import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { compact, concat } from "lodash";
import { enrollmentEmployer } from "@adapters";

export const draftEnquiry = createAction("@@empf/enr/er/draftEnquiry");

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
      const { cmpnyUuid, schmUuid } = payload;

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

export const getPayrollGrpList = createAsyncThunk(
  "@@empf/enr/er/getPayrollGrpList",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const payrollGroupList = await enrollmentEmployer.getPayrollGrpList(
        payload
      );
      return { payrollGroupList };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getCRSFormLst = createAsyncThunk(
  "@@empf/enr/er/getCRSFormLst",
  async (payload, { rejectWithValue }) => {
    try {
      const { getCrsFormLstDtos } = await enrollmentEmployer.getCRSFormLst(
        payload
      );
      return { crsFormList: getCrsFormLstDtos };
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

export const ldCntctPrsnInfo = createAsyncThunk(
  "@@empf/enr/er/ldCntctPrsnInfo",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const contactPersons = await enrollmentEmployer.ldCntctPrsnInfo(payload);
      return { contactPersons };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getGradeLst = createAsyncThunk(
  "@@empf/enr/er/getGradeLst",
  async (payload, { rejectWithValue }) => {
    try {
      const gradeList = await enrollmentEmployer.getGradeLst(payload);
      return { gradeList };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const ldPayrollGrpInfo = createAsyncThunk(
  "@@empf/enr/er/ldPayrollGrpInfo",
  async (payload, { rejectWithValue }) => {
    try {
      const payrollGrpInfo = await enrollmentEmployer.ldPayrollGrpInfo(payload);
      return { payrollGrpInfo };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

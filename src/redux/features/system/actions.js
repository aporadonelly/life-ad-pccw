import { createAsyncThunk } from "@reduxjs/toolkit";
import { systemAdapter } from "@adapters";
import {
  systemEnvSelector,
  cycleDateSelector,
  countriesSelector,
  termReasonsSelector,
  workSteamsSelector,
  schemesSelector,
  trusteesSelector,
  customTypeByGroupIdSelector,
} from "./selectors";

export const getSystemEnv = createAsyncThunk(
  "@@empf/system/getSystemEnv",
  async (_payload, { rejectWithValue }) => {
    try {
      const { prmtrTyp, prmtrDscrptn } = await systemAdapter.getSystemEnv();
      return {
        systemEnv: {
          prmtrTyp,
          prmtrDscrptn,
        },
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
  {
    condition: (_, { getState }) => {
      const systemEnv = systemEnvSelector(getState());
      if (systemEnv) return false;
    },
  }
);

export const getCycleDate = createAsyncThunk(
  "@@empf/system/getCycleDate",
  async (_payload, { rejectWithValue }) => {
    try {
      const { cycleDt: cycleDate } = await systemAdapter.getCycleDate();
      return { cycleDate };
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
  {
    condition: (_, { getState }) => {
      const cycleDate = cycleDateSelector(getState());
      if (cycleDate) return false;
    },
  }
);

export const getCountryList = createAsyncThunk(
  "@@empf/system/getCountryLst",
  async (_payload, { rejectWithValue }) => {
    try {
      const countries = await systemAdapter.getCountryLst();
      return { countries };
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
  {
    condition: (_, { getState }) => {
      const countries = countriesSelector(getState());
      if (countries.length > 0) return false;
    },
  }
);

export const getTermReasons = createAsyncThunk(
  "@@empf/system/getTermRsnLst",
  async (_payload, { rejectWithValue }) => {
    try {
      const termReasons = await systemAdapter.getTermRsnLst();
      return { termReasons };
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
  {
    condition: (_, { getState }) => {
      const termReasons = termReasonsSelector(getState());
      if (termReasons.length > 0) return false;
    },
  }
);

export const getCustomTypeList = createAsyncThunk(
  "@@empf/system/getCustomTypList",
  async (payload, { rejectWithValue }) => {
    try {
      const customTypes = await systemAdapter.getCustomTypList(payload);
      return { customTypes };
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
  {
    condition: ({ groupId }, { getState }) => {
      const customTypes = customTypeByGroupIdSelector(getState(), groupId);
      if (customTypes.length > 0) return false;
    },
  }
);

export const getWrkStrmSttsLst = createAsyncThunk(
  "@@empf/system/getWrkStrmSttsLst",
  async (payload, { rejectWithValue }) => {
    try {
      const workStreams = await systemAdapter.getWrkStrmSttsLst(payload);
      return {
        workStreams: workStreams.map((workStream) => ({
          ...workStream,
          workStream: payload.workstream,
        })),
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
  {
    condition: (_, { getState }) => {
      const workSteams = workSteamsSelector(getState());
      if (workSteams.length > 0) return false;
    },
  }
);

export const getSchmLst = createAsyncThunk(
  "@@empf/enr/er/getSchmLst",
  async (_payload, { rejectWithValue }) => {
    try {
      const schemes = await systemAdapter.getSchmLst();
      return { schemes };
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
  {
    condition: (_, { getState }) => {
      const schemes = schemesSelector(getState());
      if (schemes.length > 0) return false;
    },
  }
);

export const getTrstLst = createAsyncThunk(
  "@@empf/enr/er/getTrstLst",
  async (_payload, { rejectWithValue }) => {
    try {
      const trustees = await systemAdapter.getTrstLst();
      return { trustees };
    } catch (error) {
      return rejectWithValue({ error });
    }
  },
  {
    condition: (_, { getState }) => {
      const trustees = trusteesSelector(getState());
      if (trustees.length > 0) return false;
    },
  }
);

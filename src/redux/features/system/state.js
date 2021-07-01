import { createEntityAdapter } from "@reduxjs/toolkit";

export const customTypesAdapter = createEntityAdapter({
  selectId: (customType) => customType.cstmTypId,
});

export const countriesAdapter = createEntityAdapter({
  selectId: (country) => country.cntryTypCd,
});

export const termReasonsAdapter = createEntityAdapter({
  selectId: (termReason) => termReason.cstmTypId,
});

export const workStreamsAdapter = createEntityAdapter({
  selectId: (workStream) => workStream.customTypId,
});

export const systemAdapter = createEntityAdapter({});

export const initialState = systemAdapter.getInitialState({
  isLoading: false,
  error: null,
  systemEnv: null,
  cycleDate: null,
  customTypes: customTypesAdapter.getInitialState(),
  workStreams: workStreamsAdapter.getInitialState(),
  countries: countriesAdapter.getInitialState(),
  termReasons: termReasonsAdapter.getInitialState(),
});

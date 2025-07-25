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

export const schemesAdapter = createEntityAdapter({
  selectId: (scheme) => scheme.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const trusteesAdapter = createEntityAdapter({
  selectId: (trustee) => trustee.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
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
  schemes: schemesAdapter.getInitialState(),
  trustees: trusteesAdapter.getInitialState(),
});

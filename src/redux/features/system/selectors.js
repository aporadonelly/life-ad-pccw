import { createSelector } from "@reduxjs/toolkit";
import { find, filter } from "lodash";
import {
  customTypesAdapter,
  countriesAdapter,
  termReasonsAdapter,
  workStreamsAdapter,
} from "./state";

export const customTypesSelectors = customTypesAdapter.getSelectors(
  (state) => state.customTypes
);

export const countriesSelectors = countriesAdapter.getSelectors(
  (state) => state.countries
);

export const termReasonsSelectors = termReasonsAdapter.getSelectors(
  (state) => state.termReasons
);

export const workStreamsSelectors = workStreamsAdapter.getSelectors(
  (state) => state.workStreams
);

export const featureStateSelector = (state) => state.system;

export const isLoadingSelector = createSelector(
  featureStateSelector,
  (state) => state.isLoading
);

export const errorSelector = createSelector(
  featureStateSelector,
  (state) => state.error
);

export const systemEnvSelector = createSelector(
  featureStateSelector,
  (state) => state.systemEnv
);

export const cycleDateSelector = createSelector(
  featureStateSelector,
  (state) => state.cycleDate
);

export const customTypesSelector = createSelector(
  featureStateSelector,
  customTypesSelectors.selectAll
);

export const customTypeByIdentitySelector = createSelector(
  customTypesSelector,
  (_state, identity) => identity,
  (state, identity) => find(state, identity)
);

export const customTypeByGroupIdSelector = createSelector(
  customTypesSelector,
  (_state, cstmGrpId) => cstmGrpId,
  (state, cstmGrpId) => filter(state, { cstmGrpId })
);

export const customTypeByIdSelector = createSelector(
  featureStateSelector,
  (_state, cstmTypId) => cstmTypId,
  customTypesSelectors.selectById
);

export const countriesSelector = createSelector(
  featureStateSelector,
  countriesSelectors.selectAll
);

export const countrySelector = createSelector(
  featureStateSelector,
  (_state, cntryTypCd) => cntryTypCd,
  countriesSelectors.selectById
);

export const termReasonsSelector = createSelector(
  featureStateSelector,
  termReasonsSelectors.selectAll
);

export const termReasonSelector = createSelector(
  featureStateSelector,
  (_state, cstmTypId) => cstmTypId,
  termReasonsSelectors.selectById
);

export const workSteamsSelector = createSelector(
  featureStateSelector,
  workStreamsSelectors.selectAll
);

export const workSteamsByWorkSteamSelector = createSelector(
  workSteamsSelector,
  (_state, workStream) => workStream,
  (state, workStream) => filter(state, { workStream })
);

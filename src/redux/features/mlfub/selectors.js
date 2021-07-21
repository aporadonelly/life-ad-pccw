import { createSelector } from "@reduxjs/toolkit";
import { fundPricesAdapter } from "./state";

export const fundPricesSelectors = fundPricesAdapter.getSelectors(
  (state) => state.fundPrices
);

export const featureStateSelector = (state) => state.registrationEmployer;

export const isLoadingSelector = createSelector(
  featureStateSelector,
  (state) => state.isLoading
);

export const errorSelector = createSelector(
  featureStateSelector,
  (state) => state.error
);

export const fundPricesSelector = createSelector(
  featureStateSelector,
  fundPricesSelectors.selectAll
);

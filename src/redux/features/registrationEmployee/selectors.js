import { createSelector } from "@reduxjs/toolkit";
import { employeesAdapter } from "./state";

export const employeesSelectors = employeesAdapter.getSelectors(
  (state) => state.employees
);

export const featureStateSelector = (state) => state.registrationEmployee;

export const isLoadingSelector = createSelector(
  featureStateSelector,
  (state) => state.isLoading
);

export const errorSelector = createSelector(
  featureStateSelector,
  (state) => state.error
);

export const draftEnquirySelector = createSelector(
  featureStateSelector,
  (state) => state.draftEnquiry
);

export const employeesSelector = createSelector(
  featureStateSelector,
  employeesSelectors.selectAll
);

export const employeeSelector = createSelector(
  featureStateSelector,
  (_, pnsnIdTxt) => pnsnIdTxt,
  employeesSelectors.selectById
);

import { createSelector } from "@reduxjs/toolkit";
import { employeesAdapter } from "./state";

export const employeesSelectors = employeesAdapter.getSelectors(
  (state) => state.employees
);

export const featureStateSelector = (state) => state.registrationEmployee;

export const employeesSelector = createSelector(
  featureStateSelector,
  employeesSelectors.selectAll
);

export const employeeSelector = createSelector(
  featureStateSelector,
  (_, idNoTxt) => idNoTxt,
  employeesSelectors.selectById
);

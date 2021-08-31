import { createSelector } from "@reduxjs/toolkit";
import { find } from "lodash";
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

export const empRegInfoSelector = createSelector(
  featureStateSelector,
  (state) => state.empRegInfo
);

export const empRegInfoPhoneByTypeIdSelector = createSelector(
  empRegInfoSelector,
  (_, phnTypId) => phnTypId,
  (empRegInfo, phnTypId) => find(empRegInfo?.regClntPhones, { phnTypId })
);

export const empRegInfoContactByCntctPrsnTypIdSelector = createSelector(
  empRegInfoSelector,
  (_, cntctPrsnTypId) => cntctPrsnTypId,
  (empRegInfo, cntctPrsnTypId) =>
    find(empRegInfo?.regCntcts, { cntctPrsnTypId })
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

import { createSelector } from "@reduxjs/toolkit";

const stateSelector = (state) => state.employeeTermination;

export const empTerminationSelector = createSelector(
  stateSelector,
  (state) => state.employeeTermination
);

export const clientSchemesSelector = createSelector(
  stateSelector,
  (state) => state.clientSchemes
);

export const termsSelector = createSelector(
  stateSelector,
  (state) => state.mbrTerm
);

export const saveSelector = createSelector(
  stateSelector,
  (state) => state.saved
);

export const validateSelector = createSelector(
  stateSelector,
  (state) => state.validation
);

export const valuesActionSelector = createSelector(
  stateSelector,
  (state) => state.valuesActions
);

export const entitleLspSpSelector = createSelector(
  stateSelector,
  (state) => state.entitleLspSp
);

export const detailsLspSpSelector = createSelector(
  stateSelector,
  (state) => state.lspSp
);

export const payMethodSelector = createSelector(
  stateSelector,
  (state) => state.paymethod
);

export const bankListSelector = createSelector(
  stateSelector,
  (state) => state.bankList
);

export const clntBnkInfoSelector = createSelector(
  stateSelector,
  (state) => state.clntBnkInfo
);

export const isLoadingSelector = createSelector(
  stateSelector,
  (state) => state.isLoading
);

export const errorSelector = createSelector(
  stateSelector,
  (state) => state.error
);

import { createSelector } from "@reduxjs/toolkit";

const stateSelector = (state) => state.employees;

//All employees
export const employeesSelector = createSelector(
  stateSelector,
  (state) => state.employees
);

//Gender
export const genderSelector = createSelector(
  stateSelector,
  (state) => state.gender
);
//ID Type
export const idTypeSelector = createSelector(
  stateSelector,
  (state) => state.idType
);
//Nationality
export const nationalitySelector = createSelector(
  stateSelector,
  (state) => state.nationality
);
//Place of Birth
export const placeOfBirthSelector = createSelector(
  stateSelector,
  (state) => state.placeOfBirth
);
//Employee Type
export const employeeTypeSelector = createSelector(
  stateSelector,
  (state) => state.employeeType
);

//Industry Type
export const industryTypeSelector = createSelector(
  stateSelector,
  (state) => state.industryType
);

//Occupation
export const occupationSelector = createSelector(
  stateSelector,
  (state) => state.occupation
);

//Scheme Type
export const schemeTypeSelector = createSelector(
  stateSelector,
  (state) => state.schemeType
);

//Status

export const statusSelector = createSelector(
  stateSelector,
  (state) => state.status
);

//Loading
export const isLoadingSelector = createSelector(
  stateSelector,
  (state) => state.isLoading
);
//Error
export const errorSelector = createSelector(
  stateSelector,
  (state) => state.error
);

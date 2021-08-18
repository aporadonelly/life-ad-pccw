import { createEntityAdapter } from "@reduxjs/toolkit";

export const employeesAdapter = createEntityAdapter({
  selectId: (employee) => employee.pnsnIdTxt,
});

export const registrationEmployee = createEntityAdapter({});

export const initialState = registrationEmployee.getInitialState({
  isLoading: false,
  error: null,
  draftEnquiry: {},
  employees: employeesAdapter.getInitialState(),
});

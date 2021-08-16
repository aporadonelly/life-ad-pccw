import { createEntityAdapter } from "@reduxjs/toolkit";

export const employeesAdapter = createEntityAdapter({
  selectId: (employee) => employee.idNoTxt,
});

export const registrationEmployee = createEntityAdapter({});

export const initialState = registrationEmployee.getInitialState({
  isLoading: false,
  error: null,
  employees: employeesAdapter.getInitialState(),
});

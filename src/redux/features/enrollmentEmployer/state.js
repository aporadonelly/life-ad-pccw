import { createEntityAdapter } from "@reduxjs/toolkit";

export const employersAdapter = createEntityAdapter({
  selectId: (employer) => employer.companyName,
});

export const schemesAdapter = createEntityAdapter({
  selectId: (scheme) => scheme.name,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const trusteesAdapter = createEntityAdapter({
  selectId: (trustee) => trustee.name,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const enrollmentEmployer = createEntityAdapter({});

export const initialState = enrollmentEmployer.getInitialState({
  isLoading: false,
  error: null,
  draftEnquiry: {},
  selectedPnsnId: null,
  employers: employersAdapter.getInitialState(),
  schemes: schemesAdapter.getInitialState(),
  trustees: trusteesAdapter.getInitialState(),
});

import { createEntityAdapter } from "@reduxjs/toolkit";

export const employersAdapter = createEntityAdapter({
  selectId: (employer) => employer.pnsnId,
});

export const enrollmentEmployer = createEntityAdapter({});

export const initialState = enrollmentEmployer.getInitialState({
  isLoading: false,
  error: null,
  draftEnquiry: {},
  selectedPnsnId: null,
  employers: employersAdapter.getInitialState(),
});

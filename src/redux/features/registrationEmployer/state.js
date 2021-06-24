import { createEntityAdapter } from "@reduxjs/toolkit";

export const employersAdapter = createEntityAdapter({
  selectId: (employer) => employer.pnsnId,
});

export const registrationEmployer = createEntityAdapter({});

export const initialState = registrationEmployer.getInitialState({
  isLoading: false,
  error: null,
  draftEnquiry: {},
  selectedPnsnId: null,
  employers: employersAdapter.getInitialState(),
});

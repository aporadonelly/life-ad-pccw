import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  getGender,
  getIdType,
  getNationality,
  getPlaceOfBirth,
  getEmployeeType,
  getIndustryType,
  getOccupation,
  getSchemeType,
  getStatus,
  getAllMembers,
  getSpecificMember,
  saveEnquiry,
} from "./actions";
import { initialState } from "./state";

const persistConfig = {
  key: "members",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

const membersReducer = createReducer(initialState, (builder) =>
  //Gender
  builder
    .addCase(getGender.pending, (state, _action) => {
      return { ...state, isLoading: true, gender: [], error: null };
    })
    .addCase(getGender.fulfilled, (state, action) => {
      const { gender } = action.payload;
      return { ...state, isLoading: false, gender };
    })
    .addCase(getGender.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })
    //ID TYPE
    .addCase(getIdType.pending, (state, _action) => {
      return { ...state, isLoading: true, idType: [], error: null };
    })
    .addCase(getIdType.fulfilled, (state, action) => {
      const { idType } = action.payload;
      return { ...state, isLoading: false, idType };
    })
    .addCase(getIdType.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })
    //Nationality
    .addCase(getNationality.pending, (state, _action) => {
      return { ...state, isLoading: true, nationality: [], error: null };
    })
    .addCase(getNationality.fulfilled, (state, action) => {
      const { nationality } = action.payload;
      return { ...state, isLoading: false, nationality };
    })
    .addCase(getNationality.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })
    //Place of Birth
    .addCase(getPlaceOfBirth.pending, (state, _action) => {
      return { ...state, isLoading: true, placeOfBirth: [], error: null };
    })
    .addCase(getPlaceOfBirth.fulfilled, (state, action) => {
      const { placeOfBirth } = action.payload;
      return { ...state, isLoading: false, placeOfBirth };
    })
    .addCase(getPlaceOfBirth.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })

    //Employee Type
    .addCase(getEmployeeType.pending, (state, _action) => {
      return { ...state, isLoading: true, employeeType: [], error: null };
    })
    .addCase(getEmployeeType.fulfilled, (state, action) => {
      const { employeeType } = action.payload;
      return { ...state, isLoading: false, employeeType };
    })
    .addCase(getEmployeeType.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })

    //Industry Type
    .addCase(getIndustryType.pending, (state, _action) => {
      return { ...state, isLoading: true, industryType: [], error: null };
    })
    .addCase(getIndustryType.fulfilled, (state, action) => {
      const { industryType } = action.payload;
      return { ...state, isLoading: false, industryType };
    })
    .addCase(getIndustryType.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })

    //Occupation
    .addCase(getOccupation.pending, (state, _action) => {
      return { ...state, isLoading: true, occupation: [], error: null };
    })
    .addCase(getOccupation.fulfilled, (state, action) => {
      const { occupation } = action.payload;
      return { ...state, isLoading: false, occupation };
    })
    .addCase(getOccupation.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })

    //Scheme Type
    .addCase(getSchemeType.pending, (state, _action) => {
      return { ...state, isLoading: true, schemeType: [], error: null };
    })
    .addCase(getSchemeType.fulfilled, (state, action) => {
      const { schemeType } = action.payload;
      return { ...state, isLoading: false, schemeType };
    })
    .addCase(getSchemeType.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })

    //Status
    .addCase(getStatus.pending, (state, _action) => {
      return { ...state, isLoading: true, status: [], error: null };
    })
    .addCase(getStatus.fulfilled, (state, action) => {
      const { status } = action.payload;
      return { ...state, isLoading: false, status };
    })
    .addCase(getStatus.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })

    //Fetching all employees by search
    .addCase(getAllMembers.pending, (state, _action) => {
      return { ...state, isLoading: true, employees: [], error: null };
    })
    .addCase(getAllMembers.fulfilled, (state, action) => {
      const { employees } = action.payload;
      return { ...state, isLoading: false, employees };
    })
    .addCase(getAllMembers.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })

    //Viewing specific employee or member
    .addCase(getSpecificMember.pending, (state, _action) => {
      return { ...state, isLoading: true, employee: {}, error: null };
    })
    .addCase(getSpecificMember.fulfilled, (state, action) => {
      const { employee } = action.payload;
      return { ...state, isLoading: false, employee };
    })
    .addCase(getSpecificMember.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })

    //Saving enquiry passed on the form
    .addCase(saveEnquiry, (state, action) => {
      const { enquiry } = action.payload;
      return { ...state, isLoading: false, enquiry, error: null };
    })
);

export default persistReducer(persistConfig, membersReducer);

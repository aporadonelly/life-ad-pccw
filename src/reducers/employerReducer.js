import {
  // eslint-disable-next-line no-unused-vars
  VIEW_EMPLOYER_AUTH_PERSON_SUCCESS,
  VIEW_EMPLOYER_AUTH_PERSON_FAIL,
  FETCH_EMPLOYERS_SUCCESS,
  FETCH_EMPLOYERS_FAIL,
} from "../actions/types";

const initialState = {
  error: {},
  employers: [],
  authPerson: {},
  isLoading: false,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SEARCH_MEMBERS_PENDING":
      return {
        ...state,
        authPerson: {},
        isLoading: true,
      };
    case FETCH_EMPLOYERS_SUCCESS:
      console.log(payload, "res");
      return {
        ...state,
        employers: payload,
        isLoading: false,
      };
    case VIEW_EMPLOYER_AUTH_PERSON_SUCCESS:
      return {
        ...state,
        authPerson: payload,
        isLoading: false,
      };

    case VIEW_EMPLOYER_AUTH_PERSON_FAIL:
    case FETCH_EMPLOYERS_FAIL:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

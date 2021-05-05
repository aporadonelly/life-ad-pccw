import { UserAuthActionsTypes } from "./userAuth.types";

const INI_STATE = {
  userToken: null,
  userAuthDetails: null,
  error: null,
};

const userAuthReducer = (state = INI_STATE, action) => {
  switch (action.type) {
    case UserAuthActionsTypes.SET_TOKEN_DECODE:
      console.log(action.payload);
      return {
        ...state,
        userToken: action.payload,
      };
    case UserAuthActionsTypes.SET_USER_AUTH_DETAILS:
      console.log(action.payload);
      return {
        ...state,
        userAuthDetails: action.payload,
      };
    default:
      return state;
  }
};

export default userAuthReducer;

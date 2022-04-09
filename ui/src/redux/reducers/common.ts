/* eslint-disable */
import { REHYDRATE } from "redux-persist/es/constants";
import {
  SET_USER_DATA,
  SET_USER_TOKEN,
  LOGOUT_USER
} from "../actions";

const initialState = {
  userTokens: {
    AccessToken: "",
    IdToken: "",
    RefreshToken: "",
    TokenExpiresAt: ""
  },
  userData: {},
};

const CommonReducer = (state = { ...initialState }, action: any) => {
  switch (action.type) {
    case SET_USER_TOKEN: {
      return { ...state, userTokens: action.tokens };
    }
    case SET_USER_DATA: {
      return { ...state, userData: action.data };
    }
    case LOGOUT_USER: {
      return initialState;
    }
    case REHYDRATE:
      let common = ((action || {}).payload || {}).common || initialState;
      return {
        ...initialState,
        userTokens: common.userTokens,
        userData: common.userData,
        dataToValidateExtraction: common.dataToValidateExtraction,
      };
    default:
      return state;
  }
};

export default CommonReducer;

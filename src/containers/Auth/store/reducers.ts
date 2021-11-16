import { authActionTypes } from "./constants";
import { IAuthState } from "./interfaces";
import { Reducer as IReducer } from "redux";
import { IUsersState, usersActionTypes } from "@containers/";
import { EOrder } from "@shared/";

const initialstate: IAuthState = {
  error: null,
  loading: false,
  isAuth: false,
  token: null,
  authUser: null,
};

export const authReducer: IReducer<IAuthState> = (state: IAuthState = initialstate, action) => {
  switch (action.type) {
    case authActionTypes.SIGN_IN.REQUEST:
    case authActionTypes.SIGN_UP.REQUEST:
    case authActionTypes.SIGN_OUT.REQUEST:
    case authActionTypes.RESET_PASSWORD.REQUEST:
    case authActionTypes.FORGOT_PASSWORD.REQUEST:
    case authActionTypes.ACCOUNT_ACTIVATION.REQUEST:
      return { ...state, loading: true };

    case authActionTypes.SIGN_IN.FAILURE:
    case authActionTypes.SIGN_UP.FAILURE:
    case authActionTypes.SIGN_OUT.FAILURE:
    case authActionTypes.RESET_PASSWORD.FAILURE:
    case authActionTypes.FORGOT_PASSWORD.FAILURE:
    case authActionTypes.ACCOUNT_ACTIVATION.FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

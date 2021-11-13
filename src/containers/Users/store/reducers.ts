import { Reducer as IReducer } from "redux";
import { IUsersState, usersActionTypes } from "@containers/";
import { EOrder } from "@shared/";

const initialstate: IUsersState = {
  error: null,
  loading: false,
  users: [],
  user: null,
  filterSettings: {
    search: "",
    order: EOrder.ASC,
    sortBy: "createAt",
    limit: 20,
    skip: 0,
  },
};

export const usersReducer: IReducer<IUsersState> = (state: IUsersState = initialstate, action) => {
  switch (action.type) {
    case usersActionTypes.FETCH_USERS.REQUEST:
    case usersActionTypes.FETCH_USER.REQUEST:
    case usersActionTypes.ADD_USER.REQUEST:
    case usersActionTypes.EDIT_USER.REQUEST:
    case usersActionTypes.REMOVE_USER.REQUEST:
      return { ...state, loading: true };

    case usersActionTypes.FETCH_USERS.SUCCESS:
      return { ...state, loading: false, users: action.payload };

    case usersActionTypes.FETCH_USER.SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case usersActionTypes.ADD_USER.SUCCESS:
      return { ...state, loading: false, users: [...state.users].concat(action.payload) };

    case usersActionTypes.EDIT_USER.SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users].map((user) => (user.id === action.payload.id ? action.payload : user)),
      };

    case usersActionTypes.REMOVE_USER.SUCCESS:
      return { ...state, loading: false, users: [...state.users].filter((user) => user.id !== action.payload) };

    case usersActionTypes.USER_FILTERS.REQUEST:
      return { ...state, filterSettings: action.payload };

    case usersActionTypes.FETCH_USERS.FAILURE:
    case usersActionTypes.FETCH_USER.FAILURE:
    case usersActionTypes.ADD_USER.FAILURE:
    case usersActionTypes.EDIT_USER.FAILURE:
    case usersActionTypes.REMOVE_USER.FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

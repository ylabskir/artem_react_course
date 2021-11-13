import { createActionTypes } from "@utils/";

export const USERS_ACTION_TYPES = ["FETCH_USERS", "FETCH_USER", "ADD_USER", "EDIT_USER", "REMOVE_USER", "USER_FILTERS"];
export const usersActionTypes = createActionTypes(USERS_ACTION_TYPES);

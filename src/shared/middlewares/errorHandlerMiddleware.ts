import { Dispatch, AnyAction } from "redux";
import { todosActionTypes } from "@containers/";
import { ACTION_FAILURE_REQUEST, IAppState } from "@shared/";

export const errorHandlerMiddleware = (data: { getState: () => IAppState; dispatch: Dispatch }) => {
  const { getState, dispatch } = data;
  return (next: (action: AnyAction) => void) => (action: AnyAction) => {
    const { payload, type } = action;

    const commonActionTypes = { ...todosActionTypes };
    const onlyFailureActionTypes = Object.values(commonActionTypes).map((type) => type.FAILURE);

    if (onlyFailureActionTypes.includes(type)) {
      const state = getState();
      dispatch({ type: ACTION_FAILURE_REQUEST, payload: { ...state, loading: false, error: payload.error } });
    }

    return next(action);
  };
};

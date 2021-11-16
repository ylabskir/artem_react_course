import { fetchTodosRequestService } from "./services";
import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import { TODOS_ACTION_TYPES } from "./constants";
import { createActions } from "@utils/";
import { error } from "console";
import { createThunkActions } from "../../../utils/actionThunkCreator";

//export const todosActions = createActions(TODOS_ACTION_TYPES);
export const todosActions = createThunkActions(TODOS_ACTION_TYPES);
// const fetchTodosRequest = () => ({ type: todosActions.FETCH_TODOS.REQUEST });
// const fetchTodosSuccess = (payload: any) => ({ type: todosActions.FETCH_TODOS.SUCCESS, payload });
// const fetchTodosFailure = (payload: any) => ({ type: todosActions.FETCH_TODOS.FAILURE, payload });

//my old WAY

const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

// const getAllTodosR = () =>  (dispatch: Dispatch) => {
//    return {type: FETCH_TODOS_REQUEST}
// }

// const getAllTodosG = (payload: any) => (dispatch: Dispatch) => {
//     dispatch({type: FETCH_TODOS_FAILURE, payload})
// }

// export const getAllTodos = () => async (dispatch: Dispatch) => {
//   dispatch({ type: FETCH_TODOS_REQUEST });
//   //dispatch(getAllTodosR())
//   try {
//     const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");

//     dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: FETCH_TODOS_FAILURE, payload: error });
//    // dispatch(getAllTodosG(error))
//   }
// };

export const fetchTodosSuccess = (payload: any) => ({ type: FETCH_TODOS_SUCCESS, payload });

export const fetchTodosFailure = (payload: any) => ({ type: FETCH_TODOS_FAILURE, payload });

export const fetchTodosRequest = (payload?: any, cb?: () => void) => (dispatch: Dispatch) => {
  fetchTodosRequestService(payload)
    .then((response: any) => dispatch(fetchTodosSuccess(response.data)))
    .catch((error: any) => dispatch(fetchTodosFailure(error)))
    .finally(() => cb?.());
};

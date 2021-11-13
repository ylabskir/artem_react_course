import { TODOS_ACTION_TYPES } from "./constants";
import { createActions } from "@utils/";

export const todosActions = createActions(TODOS_ACTION_TYPES);
// const fetchTodosRequest = () => ({ type: todosActions.FETCH_TODOS.REQUEST });
// const fetchTodosSuccess = (payload: any) => ({ type: todosActions.FETCH_TODOS.SUCCESS, payload });
// const fetchTodosFailure = (payload: any) => ({ type: todosActions.FETCH_TODOS.FAILURE, payload });

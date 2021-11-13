import { createSelector } from "reselect";
import { ITodosState } from "@containers/";

interface IAppState {
  todosReducer: ITodosState;
}

const selectTodos = (state: IAppState) => state.todosReducer;

export const getTodos = () => createSelector(selectTodos, (state) => state.todos);
export const getTodo = () => createSelector(selectTodos, (state) => state.todo);

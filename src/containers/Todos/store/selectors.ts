import { createSelector } from "reselect";
import { ITodosState } from "@containers/";

interface IAppSstate {
  todosReducer: ITodosState;
}

const selectTodos = (state: IAppSstate) => state.todosReducer;

export const getTodos = () => createSelector(selectTodos, (state) => state.todos);
export const getTodo = () => createSelector(selectTodos, (state) => state.todo);

import { createSelector } from "reselect";
import { ITodosState } from "@containers/";

interface IAppState {
  todosReducer: ITodosState;
}

const selectTodos = (state: IAppState) => state.todosReducer;
const selectFilters = (state: IAppState) => state.todosReducer.filterSettings;

export const getTodos = () => createSelector(selectTodos, (state) => state.todos);
export const getTodo = () => createSelector(selectTodos, (state) => state.todo);

export const getFilterSettings = () => createSelector(selectTodos, (state) => state.filterSettings);

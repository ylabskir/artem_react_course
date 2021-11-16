import { Reducer as IReducer } from "redux";
import { todosActionTypes, ITodosState } from "@containers/";
import { ACTION_FAILURE_REQUEST } from "../../../shared/constants/index";
import { EOrder } from "@shared/";

const initialstate: ITodosState = {
  error: null,
  loading: false,
  todos: [],
  todo: null,
  filterSettings: {
    search: "",
    order: EOrder.ASC,
    //  sortBy: "createAt",
  },
};

// const ACTION_FAILURE_REQUEST = "ACTION_FAILURE_REQUEST";

export const todosReducer: IReducer<ITodosState> = (state: ITodosState = initialstate, action) => {
  switch (action.type) {
    case todosActionTypes.FETCH_TODOS.REQUEST:
    case todosActionTypes.FETCH_TODO.REQUEST:
    case todosActionTypes.ADD_TODO.REQUEST:
    case todosActionTypes.EDIT_TODO.REQUEST:
    case todosActionTypes.REMOVE_TODO.REQUEST:
      return { ...state, loading: true };

    case todosActionTypes.FETCH_TODOS.SUCCESS:
      return { ...state, loading: false, todos: action.payload };

    case todosActionTypes.FETCH_TODO.SUCCESS:
      return { ...state, loading: false, todo: action.payload };

    case todosActionTypes.ADD_TODO.SUCCESS:
      return { ...state, loading: false, todos: [...state.todos].concat(action.payload) };

    case todosActionTypes.EDIT_TODO.SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos].map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
      };

    case todosActionTypes.REMOVE_TODO.SUCCESS:
      return { ...state, loading: false, todos: [...state.todos].filter((todo) => todo.id !== action.payload) };

    case todosActionTypes.TODOS_FILTER.REQUEST:
      return { ...state, filterSettings: action.payload };
    // case todosActionTypes.FETCH_TODOS.FAILURE:
    // case todosActionTypes.FETCH_TODO.FAILURE:
    // case todosActionTypes.ADD_TODO.FAILURE:
    // case todosActionTypes.EDIT_TODO.FAILURE:
    // case todosActionTypes.REMOVE_TODO.FAILURE:
    case ACTION_FAILURE_REQUEST:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

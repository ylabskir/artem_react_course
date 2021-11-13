import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers, CombinedState, AnyAction } from "redux";
import { History } from "history";
import { todosReducer, ITodosState, usersReducer, IUsersState } from "@containers/";
import { IAppState } from "@shared/";

type TReducer = CombinedState<IAppState>;

type TRootReducer =
  | CombinedState<{ todosReducer: ITodosState; usersReducer: IUsersState; router: RouterState<unknown> }>
  | undefined;

export default (history: History) => {
  const rootReducer = combineReducers({
    todosReducer,
    usersReducer,
    router: connectRouter(history),
  });

  return (state: TReducer | undefined, action: AnyAction) => {
    return rootReducer(state as TRootReducer, action);
  };
};

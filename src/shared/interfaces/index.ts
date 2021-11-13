import { ITodosState, IUsersState } from "@containers/";

export interface IAppState {
  todosReducer: ITodosState;
  usersReducer: IUsersState;
}

export enum EOrder {
  ASC = "ASC",
  DESC = "DESC",
}

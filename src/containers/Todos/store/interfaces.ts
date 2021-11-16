import { EOrder } from "@shared/";

export interface ITodo {
  id?: number;
  title: string;
  userId: number;
  completed: boolean;
}

export interface IFilterSettings {
  search: string;
  order: EOrder;
  //  sortBy: keyof ITodo;
}

export interface ITodosState {
  todos: ITodo[];
  error: null | string;
  loading: boolean;
  todo: ITodo | null;
  filterSettings: IFilterSettings;
}

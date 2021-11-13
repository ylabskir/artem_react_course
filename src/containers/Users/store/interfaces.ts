import { EOrder } from "@shared/";

export interface IUser {
  id?: number;
  firtsName: string;
  lastName: string;
  email: string;
  createAt: Date;
  isActive: boolean;
  avatar: string | null;
}

export interface IUserFilterSettings {
  search: string;
  order: EOrder;
  sortBy: keyof IUser;
  limit: number;
  skip: number;
}

export interface IUsersState {
  users: IUser[];
  error: null | string;
  loading: boolean;
  user: IUser | null;
  filterSettings: IUserFilterSettings;
}

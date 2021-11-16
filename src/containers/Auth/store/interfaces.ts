export interface IAuthState {
  error: string | null;
  isAuth: boolean;
  authUser: null | number;
  token: string | null;
  loading: boolean;
}

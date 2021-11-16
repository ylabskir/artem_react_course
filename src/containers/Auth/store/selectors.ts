import { createSelector } from "reselect";
import { IAppState } from "@shared/";

const selectUsers = (state: IAppState) => state.usersReducer;

export const getUsers = () => createSelector(selectUsers, (state) => state.users);
export const getUser = () => createSelector(selectUsers, (state) => state.user);

export const getUserFilterSettings = createSelector(selectUsers, (state) => state.filterSettings);
export const getFilteredUsers = createSelector(selectUsers, (state) => {
  const {
    users,
    filterSettings: { search },
  } = state;
  return users.filter((user) =>
    Object.values(user)
      .filter((value) => !!value)
      .some((value) => value.toLowerCase().trim().includes(search.toLowerCase().trim())),
  );
});

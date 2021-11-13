import { takeLatest, call, put, select } from "redux-saga/effects";
import { usersActionTypes, usersActions, getUserFilterSettings } from "@containers/";
import * as axios from "axios";

function* fetchUsersSaga({ _, cb }: ReturnType<typeof usersActions.FETCH_USERS.REQUEST>) {
  try {
    // const data = yield call(axios.get('/todos?order=ASC&sortBy=CreatedAt'))
    const { search, order, sortBy } = yield select(getUserFilterSettings);
    const users = [
      {
        id: 1,
        firstName: "FN",
        lastName: "LN",
        email: "email@gmail.com",
        cratedAt: new Date(),
        isActive: true,
        avatar: null,
      },
      {
        id: 86,
        firstName: "FN",
        lastName: "LN",
        email: "gagaga@gmail.com",
        cratedAt: new Date(),
        isActive: true,
        avatar: null,
      },
    ];

    yield put(usersActions.FETCH_USERS.SUCCESS(users));
  } catch (err) {
    yield put(usersActions.FETCH_USERS.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* fetchUserSaga({ payload, cb }: ReturnType<typeof usersActions.FETCH_USER.REQUEST>) {
  try {
    // http://localhost:300/api/todos/124234
    // const data = yield call(axios.get(`/todos/${payload.id}`))
    const user = {
      id: 1,
      firstName: "FN",
      lastName: "LN",
      email: "email@gmail.com",
      cratedAt: new Date(),
      isActive: true,
      avatar: null,
    };
    yield put(usersActions.FETCH_USER.SUCCESS(user));
  } catch (err) {
    yield put(usersActions.FETCH_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* addUserSaga({ payload, cb }: ReturnType<typeof usersActions.ADD_USER.REQUEST>) {
  try {
    // const data = yield call(axios.post(`/todos`, payload))
    const newUser = {
      id: 2,
      firstName: "FN",
      lastName: "LN",
      email: "email@gmail.com",
      cratedAt: new Date(),
      isActive: true,
      avatar: null,
    };
    yield put(usersActions.ADD_USER.SUCCESS(newUser));
  } catch (err) {
    yield put(usersActions.ADD_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* editUserSaga({ payload, cb }: ReturnType<typeof usersActions.EDIT_USER.REQUEST>) {
  try {
    // const { id, ...rest } = payload
    // const data = yield call(axios.put(`/todos/${id}`, rest))
    const editedUser = {
      id: 2,
      firstName: "FN",
      lastName: "LN",
      email: "email@gmail.com",
      cratedAt: new Date(),
      isActive: true,
      avatar: null,
    };
    yield put(usersActions.EDIT_USER.SUCCESS(editedUser));
  } catch (err) {
    yield put(usersActions.EDIT_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

function* removeUserSaga({ payload, cb }: ReturnType<typeof usersActions.REMOVE_USER.REQUEST>) {
  try {
    // const data = yield call(axios.delete(`/todos/${payload.id}`))
    const removeUserId = 2;
    yield put(usersActions.REMOVE_USER.SUCCESS(removeUserId));
  } catch (err) {
    yield put(usersActions.REMOVE_USER.FAILURE(err as Object));
  } finally {
    cb?.();
  }
}

export const usersWatcherSaga = function* () {
  yield takeLatest(usersActionTypes.FETCH_USERS.REQUEST, fetchUsersSaga);
  yield takeLatest(usersActionTypes.FETCH_USER.REQUEST, fetchUserSaga);
  yield takeLatest(usersActionTypes.ADD_USER.REQUEST, addUserSaga);
  yield takeLatest(usersActionTypes.EDIT_USER.REQUEST, editUserSaga);
  yield takeLatest(usersActionTypes.REMOVE_USER.REQUEST, removeUserSaga);
};

import { takeLatest, call, put } from "redux-saga/effects";
import { todosActionTypes, todosActions } from "@containers/";
//import * as axios from "axios";

function* fetchTodosSaga({ _, cb }: ReturnType<any>) {
  try {
    // const data = yield call(axios.get('/todos'))

    const todos = [
      {
        id: 1,
        text: "Text 001",
        createAt: new Date(),
        completed: false,
      },
      {
        id: 2,
        text: "Text 002",
        createAt: new Date(),
        completed: false,
      },
    ];

    yield put(todosActions.FETCH_TODOS.SUCCESS(todos));
  } catch (error) {
    yield put(todosActions.FETCH_TODOS.FAILURE(error as Object));
  } finally {
  }
}

function* fetchTodoSaga({ payload, cb }: ReturnType<any>) {
  try {
    //const data = yield call(axios.get(`/todos/${payload.id}`), payload)

    const todo = {
      id: 1,
      text: "Text 001",
      createAt: new Date(),
      completed: false,
    };

    yield put(todosActions.FETCH_TODO.SUCCESS(todo));
  } catch (error) {
    yield put(todosActions.FETCH_TODO.FAILURE(error as Object));
  } finally {
    cb?.();
  }
}

function* addTodoSaga({ payload, cb }: ReturnType<any>) {
  try {
    //const data = yield call(axios.post(`/todos), payload)

    const todo = {
      id: 3,
      text: "Text 003",
      createAt: new Date(),
      completed: false,
    };
    yield put(todosActions.ADD_TODO.SUCCESS(todo));
  } catch (error) {
    yield put(todosActions.ADD_TODO.FAILURE(error as Object));
  } finally {
    cb?.();
  }
}

function* editTodoSaga({ payload, cb }: ReturnType<any>) {
  try {
    // const {id, ...rest } = payload;
    //const data = yield call(axios.put(`/todos/${id}`), rest)

    const todo = {
      id: 3,
      text: "Text 333",
      createAt: new Date(),
      completed: false,
    };
    yield put(todosActions.EDIT_TODO.SUCCESS(todo));
  } catch (error) {
    yield put(todosActions.EDIT_TODO.FAILURE(error as Object));
  } finally {
    cb?.();
  }
}

function* removeTodoSaga({ payload, cb }: ReturnType<any>) {
  try {
    //const data = yield call(axios.delete(`/todos/${payload.id}`), rest)

    const removeTodoId = 2;
    yield put(todosActions.REMOVE_TODO.SUCCESS(removeTodoId));
  } catch (error) {
    yield put(todosActions.REMOVE_TODO.FAILURE(error as Object));
  } finally {
    cb?.();
  }
}

export const todosWatcherSaga = function* () {
  yield takeLatest(todosActionTypes.FETCH_TODOS.REQUEST, fetchTodosSaga);
  yield takeLatest(todosActionTypes.FETCH_TODO.REQUEST, fetchTodoSaga);
  yield takeLatest(todosActionTypes.ADD_TODO.REQUEST, addTodoSaga);
  yield takeLatest(todosActionTypes.EDIT_TODO.REQUEST, editTodoSaga);
  yield takeLatest(todosActionTypes.REMOVE_TODO.REQUEST, removeTodoSaga);
};

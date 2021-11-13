import { usersWatcherSaga } from "../../containers/Users/store/sagas";
import { all, fork } from "redux-saga/effects";
import { todosWatcherSaga } from "../../containers/Todos/store/sagas";

const allSagas = [todosWatcherSaga, usersWatcherSaga];

export default function* rootSagas() {
  yield all(allSagas.map(fork));
}

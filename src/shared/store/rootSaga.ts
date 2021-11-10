import { all, fork } from "redux-saga/effects";
import { todosWatcherSaga } from "../../containers/Todos/store/sagas";

const allSagas = [todosWatcherSaga];

export default function* rootSagas() {
  yield all(allSagas.map(fork));
}

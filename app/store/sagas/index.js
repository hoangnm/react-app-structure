import { all } from 'redux-saga/effects';
import todo from './todo.saga';

export default function* rootSaga() {
  yield all([
    ...todo,
  ]);
}

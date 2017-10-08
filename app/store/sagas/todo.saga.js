import { takeEvery, spawn, call, put } from 'redux-saga/effects';
import { types, actions } from '../reducers/todo.reducer';
import api from '../../services/api';

// ------------------------------------
// Workers
// ------------------------------------

export function* getTodos() {
  try {
    const result = yield call(api.getTodos);
    yield put(actions.getTodosSuccess({todos: result.data}));
  } catch (error) {
    // TODO: handle error
  }
}

// ------------------------------------
// Watchers
// ------------------------------------


export function* watchGetTodos() {
  yield takeEvery(types.GET_TODOS, getTodos);
}

export default [
  spawn(watchGetTodos)
];

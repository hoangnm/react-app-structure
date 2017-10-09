import { createAction } from 'redux-actions';
import typeToReducer from 'type-to-reducer';

// ------------------------------------
// Actions
// ------------------------------------
const GET_TODOS = 'TODO/GET_TODOS';
const GET_TODOS_SUCCESS = 'TODO/GET_TODOS_SUCCESS';
const GET_TODOS_PENDING = 'TODO/GET_TODOS_PENDING';

export const types = {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_PENDING,
};

const getTodos = createAction(GET_TODOS);
const getTodosSuccess = createAction(GET_TODOS_SUCCESS);
const getTodosPending = createAction(GET_TODOS_PENDING);

export const actions = {
  getTodos,
  getTodosSuccess,
  getTodosPending,
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  todos: [],
  loading: false,
};

const getTodosPendingState = state => ({
  ...state,
  loading: true,
});

const getTodosSuccessState = (state, action) => ({
  ...state,
  loading: false,
  todos: action.payload.todos,
});

export default typeToReducer({
  [GET_TODOS]: {
    PENDING: getTodosPendingState,
    SUCCESS: getTodosSuccessState,
  },
}, initialState);

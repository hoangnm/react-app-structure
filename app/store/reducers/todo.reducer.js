import { createAction } from 'redux-actions';
import typeToReducer from 'type-to-reducer';

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

const initialState = {
  todos: [],
  loading: false,
};

const todo = typeToReducer({
  [GET_TODOS]: {
    PENDING: state => ({
      ...state,
      loading: true,
    }),
    SUCCESS: (state, action) => ({
      ...state,
      loading: false,
      todos: action.payload.todos,
    }),
  },
}, initialState);

export default todo;

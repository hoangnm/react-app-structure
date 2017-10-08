import { createAction, handleActions } from 'redux-actions';

const GET_TODOS = 'TODO/GET_TODOS';
const GET_TODOS_SUCCESS = 'TODO/GET_TODOS_SUCCESS';

export const types = {
  GET_TODOS,
  GET_TODOS_SUCCESS
};

const getTodos = createAction(GET_TODOS);
const getTodosSuccess = createAction(GET_TODOS_SUCCESS);

export const actions = {
  getTodos,
  getTodosSuccess
};

const initialState = {
  todos: [],
  loading: false
};

const todo = handleActions({
  [GET_TODOS]: (state, action) => {
    return {
      ...state,
      loading: true
    };
  },
  [GET_TODOS_SUCCESS]: (state, action) => {
    return {
      ...state,
      loading: false,
      todos: action.payload.todos
    };
  }
}, initialState);

export default todo;

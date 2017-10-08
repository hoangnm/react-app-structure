import { createAction, handleActions } from 'redux-actions';

const GET_TODOS = 'TODO/GET_TODOS';

export const types = {
  GET_TODOS
};

const getTodos = createAction(GET_TODOS);

export const actions = {
  getTodos
};

const initialState = {
  todos: []
};

const todo = handleActions({
  [GET_TODOS]: (state, action) => {
    return {
      todos: [{ id: 1, text: 'Setup' }]
    };
  }
}, initialState);

export default todo;

import { createAction } from 'redux-actions';
import typeToReducer from 'type-to-reducer';

// ------------------------------------
// Actions
// ------------------------------------

const addAction = createAction('ADD');

export const actions = {
  addAction,
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  value: 0,
};

const addActionHandler = (state) => {
  const value = state.value + 1;

  return {
    ...state,
    value,
  };
};

export default typeToReducer({
  [addAction]: addActionHandler,
}, initialState);

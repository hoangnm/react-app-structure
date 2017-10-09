import reducer, {
  actions,
} from './Todo.reducer';

describe('Todo Redux Reducer', () => {
  describe('Reducer', () => {
    test('Should be a function.', () => {
      expect(reducer).toBeDefined();
    });

    test('Shoud initialize with a state', () => {
      expect(reducer(undefined, {})).toEqual({
        value: 0,
      });
    });

    test('Should return the previous state if an action was not matched.', () => {
      let state = reducer(undefined, {});
      expect(state).toEqual({
        value: 0,
      });
      state = reducer(state, { type: '@@@@@@@' });
      expect(state).toEqual({
        value: 0,
      });
    });
  });

  describe('New Redux Action', () => {
    test('Should be exported as a function.', () => {
      expect(actions.addAction).toBeDefined();
    });

    test('Should return an action with the type "ADD".', () => {
      expect(actions.addAction().type).toBe('ADD');
    });
  });
});

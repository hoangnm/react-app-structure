import { createSelector } from 'reselect';

const getTodos = state => state.todo.todos;

export const getVisibleTodos = createSelector(
  [getTodos],
  todos => todos.filter(t => !t.completed),
);

const api = {
  getVisibleTodos,
};

export default api;

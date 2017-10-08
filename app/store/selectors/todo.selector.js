import { createSelector } from 'reselect';

const getTodos = (state) => state.todo.todos;

export const getVisibleTodos = createSelector(
  [ getTodos ],
  (todos) => {
    return todos.filter(t => !t.completed)
  }
);

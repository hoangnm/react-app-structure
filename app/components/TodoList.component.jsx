import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.component';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default TodoList;

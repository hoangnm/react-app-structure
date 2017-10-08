import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store/reducers/todo';
import TodoList from '../components/TodoList.component';

class TodoListContainer extends Component {

  componentWillMount() {
    this.props.getTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <TodoList todos={todos} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  };
};

const mapDispatchToProps = {
  getTodos: actions.getTodos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);

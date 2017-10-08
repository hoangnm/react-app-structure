import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../store/reducers/todo.reducer';
import { getVisibleTodos } from '../store/selectors/todo.selector';
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
    todos: getVisibleTodos(state)
  };
};

const mapDispatchToProps = {
  getTodos: actions.getTodos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);

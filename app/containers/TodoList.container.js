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
    const { todos, loading } = this.props;
    return (
      <div>
        {loading && <div>Fetching data</div>}
        <TodoList todos={todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state),
    loading: state.todo.loading
  };
};

const mapDispatchToProps = {
  getTodos: actions.getTodos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);

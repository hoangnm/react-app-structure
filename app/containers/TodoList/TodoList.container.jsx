import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import { actions } from '../../store/reducers/todo/todo.reducer';
import { getVisibleTodos } from '../../store/selectors/todo.selector';
import TodoList from '../../components/TodoList.component';
import styles from './TodoList.container.styles';

class TodoListContainer extends Component {
  componentWillMount() {
    this.props.getTodos();
  }

  render() {
    const { todos, loading } = this.props;
    return (
      <div className={css(styles.container)}>
        {loading && <div>Fetching data</div>}
        <TodoList todos={todos} />
      </div>
    );
  }
}

TodoListContainer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  getTodos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state),
  loading: state.todo.loading,
});

const mapDispatchToProps = {
  getTodos: actions.getTodos,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListContainer);

import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions/todos';

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state, ownProps) => ({
  todos: filterTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  }
});

const VisibleTodos = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodos;

import React from 'react';

const TodoList = ({ todos = [], onTodoClick }) => (
  <ul>
    { todos.map(todo => (
      <Todo
        key={ todo.id }
        text={ todo.text }
        onClick={ e => onTodoClick(todo.id) }
        completed={ todo.completed }
      />
    ))}
  </ul>
);

const Todo = ({onClick, completed, text}) => (
  <li
    onClick={ onClick }
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    { text }
  </li>
);

export default TodoList;

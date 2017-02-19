import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

const TodoInput = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input
        type="text"
        placeholder="todo"
        ref={ node => input = node }
      />
      <button onClick={ e => {
        dispatch(addTodo(input.value));
        input.value = "";
      }}>
        Add todo
      </button>
    </div>
  );
};

const TodoInputContainer = connect()(TodoInput);

export default TodoInputContainer;

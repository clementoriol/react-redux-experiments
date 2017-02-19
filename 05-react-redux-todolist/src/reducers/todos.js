export const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action),
      ];

    case 'TOGGLE_TODO':
      return state.map(currentTodo => {
        if (currentTodo.id !== action.id) {
          return currentTodo;
        } else {
          return todo(currentTodo, action);
        }
      });
    default:
      return state;
  }
};

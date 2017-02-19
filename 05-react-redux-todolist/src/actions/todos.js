let id = 0;

export const addTodo = (value) => {

  return {
    type: 'ADD_TODO',
    id: id++,
    text: value,
  }
};

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});

import { todos, visibilityFilter } from './reducers';

describe('todos reducer', () => {
  it('should allow us to add todos', () => {
    const beforeState = [];
    const afterState = [{
      id: 1,
      text: 'Test todo',
      completed: false,
    }];

    expect(todos(beforeState, {
      type: 'ADD_TODO',
      id: 1,
      text: 'Test todo',
    })).toEqual(afterState);
  });

  it('should allow us to toggle a todo', () => {
    const beforeState = [{
      id: 1,
      text: 'Test todo',
      completed: false,
    }];

    const afterState = [{
      id: 1,
      text: 'Test todo',
      completed: true,
    }];

    expect(todos(beforeState, {
      type: 'TOGGLE_TODO',
      id: 1,
    })).toEqual(afterState);
  });
});

describe('visibilityFilter reducer', () => {
  it('should set the current visibilityFilter', () => {
    const beforeState = 'SHOW_ALL';
    const afterState = 'SHOW_COMPLETED';

    expect(visibilityFilter(beforeState, {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED',
    })).toEqual(afterState);
  });
});

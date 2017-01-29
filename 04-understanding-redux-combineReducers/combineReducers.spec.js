import combineReducers from './combineReducers';
import { todos, visibilityFilter } from './reducers';

describe('combineReducers', () => {
  const reducer = combineReducers({
    todos,
    visibilityFilter,
  });

  it('should still work like separated reducers', () => {
    const beforeState = {
      todos: [],
      visibilityFilter: 'SHOW_ALL',
    };

    const afterState = {
      todos: [{
        id: 1,
        text: 'Test todo',
        completed: false,
      }],
      visibilityFilter: 'SHOW_COMPLETED',
    };

    let state = reducer(beforeState, {
      type: 'ADD_TODO',
      id: 1,
      text: 'Test todo',
    });

    state = reducer(state, {
      type: 'SET_VISIBILITY_FILTER',
      id: 1,
      filter: 'SHOW_COMPLETED',
    });

    expect(state).toEqual(afterState);
  });
});

import './index.css';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};


const createStore = ( reducer) => {
  let state;
  const listeners = [];

  const getState = () => {
    return state;
  };

  const subscribe = (callback) => {
    listeners.push(callback);
    return () => {
      listeners.filter(listener => listener !== callback);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listenerCb => listenerCb());
  };

  dispatch({});

  return { getState, subscribe, dispatch };
};

const store = createStore(counterReducer);

const renderCounter = () => {
  document.body.innerText = store.getState();
};

store.subscribe(renderCounter);
renderCounter();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  store.dispatch({ type: 'DECREMENT' });
});

import { createStore } from 'redux';
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

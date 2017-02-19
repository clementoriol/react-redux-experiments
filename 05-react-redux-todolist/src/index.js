import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import todoApp from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React, { Component } from 'react';
import TodoInputContainer from '../containers/TodoInput';
import VisibleTodos from '../containers/VisibileTodos';
import FilterLinks from './FilterLinks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInputContainer />
        <VisibleTodos />
        <FilterLinks />
      </div>
    );
  }
}

export default App;

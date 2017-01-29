const combineReducers = (reducersObj) => {
  return (state = {}, action) => {
    return Object.keys(reducersObj).reduce((newState, key) => {
      newState[key] = reducersObj[key](
        state[key],
        action
      );
      return newState;
    },
    {});
  }
};

export default combineReducers;

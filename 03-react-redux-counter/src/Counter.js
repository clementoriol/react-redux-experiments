import React, { PropTypes } from 'react';
import './Counter.css';

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div className="Counter">
    <button
      className="Counter-button"
      onClick={ onIncrement }
    >+</button>
    <span className="Counter-value">{ value }</span>
    <button
      className="Counter-button"
      onClick={ onDecrement }
    >-</button>
  </div>
);
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;

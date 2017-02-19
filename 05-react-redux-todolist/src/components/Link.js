import React from 'react';

const Link = ({ onClick, children, active }) => {
  if (active) {
    return <span>{ children }</span>
  }
  return (
    <a
      href="#"
      onClick={ e => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      { children }
    </a>
  );
};

export default Link;

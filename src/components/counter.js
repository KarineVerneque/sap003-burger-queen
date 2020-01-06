import React from 'react';

export default function Counter (props) {
  return(
    <>
      <p contenteditable="true">
        {props.amount}
      </p>
      <button
        onClick={() => props.onClick(props)}>
        Contator
      </button>
    </>
  )
};
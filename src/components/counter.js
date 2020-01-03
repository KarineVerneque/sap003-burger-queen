import React from 'react';

function Counter (props) {
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
}

export default Counter;
import React from 'react';

export default function Buttons (props) {
  return(
    <>
      <button
        onClick={props.onClick}
        class={props.className}>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </button>
    </>
  )
};


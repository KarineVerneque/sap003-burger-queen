import React from 'react';

export default function Buttons (props) {
  return(
    <>
      <button
        value={props.name}
        onClick={props.onClick}
        class={props.className}>
        {props.name} <br />
        {props.price}
      </button>
    </>
  )
};


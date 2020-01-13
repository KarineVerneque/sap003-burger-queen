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
        <p>
        {props.extra ? 
        <>       
        <select onChange={props.handleChange}>
          {props.extra.map(i => 
          <>
            <option value={i}>{i}</option>
            </>
          )}
        </select> <br />
        <button onClick={props.handleClick}>vai</button>
        </>
        : ''
        }
        </p>
      </button>
    </>
  )
};


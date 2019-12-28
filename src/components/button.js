import React from 'react';

function Button (props) {
  return(
    <>
      <section onClick={props.handleClick}>
        <button
          onClick={() => props.onClick(props)}
          class={props.className}
        >
          <p>{props.name}</p>
          <p>{props.price}</p>
        </button>
      </section>
    </>
  )
}

export default Button;
import React from 'react';

function Button (props) {
  return(
    <>
    <section onClick={props.handleClick}>
      <button
      onClick={() => props.onClick(props)}
      class={props.className}
      ><p>{props.name}</p>
      <p>R$ {props.price},00</p></button>
      {/* <button><p>{props.price}</p></button> */}
    </section>
    </>
  )
}

export default Button;


/*
const Button = (props) => {
  return (
    <>
      <button><h2>{props.title}</h2></button><br />
      {
        props.products.map((item) =>
          <button onClick={() => props.onClick(item)}>
            {item.name}
            <p>R$ {item.price},00</p>
          </button>
        )}
    </>
  )
}

export default Button;
*/

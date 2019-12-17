import React from 'react';

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


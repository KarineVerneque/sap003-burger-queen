import React from 'react';

function OrderingSection (props) {
  return(
    <>
      <p class={props.className}>
          {props.name}
      </p>
      {/* <button><p>{props.price}</p></button> */}
    </>
  )
}

export default OrderingSection;
//{                
//    orders.map(item => <p>{item.name}</p>)
//  }
import React from 'react';

export default function OrderSection (props) {
  
  return(
    <div class={props.className}>
      {props.name}
      {props.quantity}
      {props.price}
      {props.table}   
      {props.status}   
      {props.order}  
      {props.timestamp}    
      <button onClick={() => props.onClick(props)}>
        {props.btnName}       
      </button> 
    </div>
  )
};

// const styles = StyleSheet.create({
//   xuxu: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
// });
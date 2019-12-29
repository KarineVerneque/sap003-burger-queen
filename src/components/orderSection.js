import React, {useState} from 'react';
//import Button from './button'

export default function OrderSection (props) {
  //const [counter, setCounter] = useState(1);

  return(
    <div class={props.className}>
      <span>
        {props.name}
          <button onClick={() => props.onClick(props)}>
            X
          </button>
      </span>      
      <p>{props.price}</p>
    </div>
  )
}

//OrderSection;
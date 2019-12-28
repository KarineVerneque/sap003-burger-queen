import React, {useState} from 'react';

function OrderSection (props) {

  const [counter, setCounter] = useState(1);
  return(
    <div class={props.className}>
      <span>
        {props.name}
          <button onClick={() => props.onClick(props)}>
            X
          </button>
      </span>      
      <p>{props.price}</p>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <span contenteditable="true">{counter}</span>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        
        
      {/*<Counter amount={counter} />*/}
    </div>
  )
}

export default OrderSection;
//{                
//    orders.map(item => <p>{item.name}</p>)
//  }
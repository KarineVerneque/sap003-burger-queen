import React, {useState} from 'react';
//import Counter from '../components/counter'
//import Button from './button';

function OrderingSection (props) {

  const [counter, setCounter] = useState(1);
  return(
    <>
    <p class={props.className}>
      {props.name}
      <button onClick={() => props.onClick(props)}>
        {props.price}
        X
      </button> <br />
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <span contenteditable="true">{counter}</span>
      <button onClick={() => setCounter(counter - 1)}>-</button>
          {/*<Counter amount={counter} />*/}
      </p>
      
    </>
  )
}

export default OrderingSection;
//{                
//    orders.map(item => <p>{item.name}</p>)
//  }
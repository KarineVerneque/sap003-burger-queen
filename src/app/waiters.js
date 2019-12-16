import React, { useState } from 'react';
import ClientData from '../components/clientsdata'
import Cafe from '../components/breakfast'
import Jantar from '../components/lunchDinner'
// import db from '../../firebase/firebase'
//useRef, useEffect

function Waiters() {
  const [counter, setCounter] = useState(0)

  return (
    <>
    <ClientData /><br />    

    <Cafe /><br /><br />
    
    <Jantar />
    <p contenteditable="true">{counter}</p>
    <button onClick={() => setCounter(counter + 1)}>Contador</button>
    </>
  )
}

export default Waiters;
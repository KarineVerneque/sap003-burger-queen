import React, { useState, useEffect } from 'react';
import ClientData from '../components/clientsdata'
import Button from '../components/breakfast'
// import Jantar from '../components/lunchDinner'
import firebaseInitialize from '../firebase/firebase'
//useRef, useEffect

function Waiters() {
  const [data, setDatas] = useState([]);
  const [pedidos, setPedidos] = useState([])
  
  useEffect(() => {
      firebaseInitialize
      .firestore()
      .collection('menu')
      // .onSnapshot((snapshot) => {
      .get()
      .then((snapshot) => { console.log('snapshot',snapshot.docs)
          const newDatas = snapshot.docs.map((doc) => ({
              // id: doc.id,
              ...doc.data()
          }))            
          setDatas(newDatas)            
      })
  }, [])

  const order = (banana) => {
    // console.log(banana)
    setPedidos([...pedidos, banana])
  }

  const breakfast = data.filter(product => product.breakfast === "true")
  const dinner = data.filter(product => product.breakfast !== "true")
  // console.log(breakfast)

  return (
    <>
    <ClientData pedidos={pedidos}/><br />


    <Button 
      products={breakfast} 
      title="Café da manhã" 
      onClick={order}
    />

    <br /><br />

    <Button 
      products={dinner} 
      title="Jantar" 
      onClick={order}
    />
    
    {/* <br /><br /> */}
    {/* <Button products={data.filter(product => product.breakfast !== "true")} title="Jantar"/><br /><br /> */}
    </>
  )
}

export default Waiters;




/*
function xuxu() {
const [counter, setCounter] = useState(0);

{ <p contenteditable="true">{counter}</p> }
{ <button onClick={() => setCounter(counter + 1)}>Contador</button> }

}
*/

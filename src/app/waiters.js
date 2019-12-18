import React, { useState, useEffect } from 'react';
import ClientData from '../components/clientsdata'
import ButtonNew from '../components/button'
import firebaseInitialize from '../utils/firebase'
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

  const clienteOrder = (order) => {
    // console.log(order)
    setPedidos([...pedidos, order])
  }

  const breakfast = data.filter(product => product.breakfast === "true")
  const dinner = data.filter(product => product.breakfast !== "true")

  return (
    <>
    <ClientData pedidos={pedidos}/><br />
    <h1>Coffe</h1>
    {
      breakfast.map(product =>
        <ButtonNew name={product.name} price={product.price} />
      )
    }
    <h1>Dinner</h1>
    {
      
      dinner.map(product =>
        <ButtonNew name={product.name} price={product.price} />
      )
    }
    
    


    {/* <Button 
      products={breakfast} 
      title="Café da manhã" 
      onClick={clienteOrder}
    />

    <br /><br />

    <Button 
      products={dinner} 
      title="Jantar" 
      onClick={clienteOrder}
    /> */}
    
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

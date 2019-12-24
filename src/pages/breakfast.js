import React, { useState, useEffect } from 'react';
import Button from '../components/button'
import OrderingSection from '../components/orderingSection';
import firebaseInitialize from '../utils/firebase'
//import { css } from 'aphrodite';
import { StyleSheet, css } from 'aphrodite';
//useRef, useEffect

function BreakFast() {
  const [data, setDatas] = useState([]);
  const [orders, setOrders] = useState([])
  
  
  useEffect(() => {
      firebaseInitialize
      .firestore()
      .collection('menu')
      // .onSnapshot((snapshot) => {
      .get()
      .then((snapshot) => { //console.log('snapshot',snapshot.docs)
          const newDatas = snapshot.docs.map((doc) => ({
              // id: doc.id,
              ...doc.data()
          }))            
          setDatas(newDatas)            
      })
  }, [])

  const addOrder = (item) => {
    setOrders([...orders, item])
    orders.map(product =>
      <Button name={product.orders} />
    )  
  }  

  const deleteOrder = (item) => {
    const deleteFilter = orders.filter(i => i.name !== item.name)
    setOrders(deleteFilter)
  }

  const breakfast = data.filter(product => product.breakfast === "true")

  return (
    <>
    

    <section className={css(styles.sectionOrders)}>
      {
        orders.map(item => 
          <OrderingSection className={css(styles.orders)} name={item.name} onClick={deleteOrder}/>
        )
      }      
    </section>
    
    <section className={css(styles.menuSection)}>
    <h1>Coffe</h1>
      {
        breakfast.map(product =>
          <Button className={css(styles.button)} name={product.name} price={product.price} onClick={addOrder} />
        )
      }
    </section>
    </>
  )  
}
const styles = StyleSheet.create({
  red: {
    background: 'red'
  },
  menuSection: {
    margin: '10px',
    //padding: '30px',
    border: '2px solid red',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItens: 'center'
  },
  button: {
    ///marginTop: '10px',
    margin: '10px',
    padding: '5px',
    //display: 'flex',
    //justifyContent: 'flex-start',
    //alignItems: 'center', 
    border: 'none',  
    borderRadius: '15px',
    cursor: 'pointer',
    background: 'green',
    color: '#EEECE6',
    fontSize: '16px',
    fontWeight: 'bold', 
  },
  sectionOrders: {
    border: '2px solid green',
    display: 'flex'
  },
  orders: {
    background: 'pink',
    border: '2px solid yellow'
  }
});

export default BreakFast;
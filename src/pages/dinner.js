import React, { useState, useEffect } from 'react';
import Button from '../components/button'
import Data from '../components/data'
import OrderingSection from '../components/orderingSection';
//import { css } from 'aphrodite';
import { StyleSheet, css } from 'aphrodite';
//useRef, useEffect

function Dinner() {
  const data = Data()
  
  const [orders, setOrders] = useState([])
  

  const clienteOrder = (item) => {
    setOrders([...orders, item])
    orders.map(product =>
      <Button name={product.orders} />
    )  
  }  

  const deleteOrder = (item) => {
    const deleteFilter = orders.filter(i => i.name !== item.name)
    setOrders(deleteFilter)
  }

  const dinner = data.filter(product => product.breakfast !== "true")




  








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
    <h1 className={css(styles.red)}>Dinner</h1>
      {      
        dinner.map(product =>
          <Button className={css(styles.button)} name={product.name} price={product.price} onClick={clienteOrder} />
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

export default Dinner;



















/*
<Button 
  products={breakfast} 
  title="Café da manhã" 
  onClick={clienteOrder}
/>
<br /><br />
<Button 
  products={dinner} 
  title="Jantar" 
  onClick={clienteOrder}
/>
<br /><br />
<Button products={data.filter(product => product.breakfast !== "true")} title="Jantar"/><br /><br />
*/


/*
function xuxu() {
const [counter, setCounter] = useState(0);

{ <p contenteditable="true">{counter}</p> }
{ <button onClick={() => setCounter(counter + 1)}>Contador</button> }

}
*/

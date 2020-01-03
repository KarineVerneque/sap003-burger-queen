import React, { useState } from 'react';
import Button from './button';
import Data from './data';
import OrderSection from './orderSection';
import { StyleSheet, css } from 'aphrodite';

function Dinner() {
  const data = Data();
  const [orders, setOrders] = useState([]);
  const [billPrice, setbillPrice] = useState(0);

  const addOrder = (item) => {
    console.log(item)   
    if(!orders.includes(item)){
      setOrders([...orders, item])      
    } else {
      item++ 
      setOrders([...orders])
    }
    setbillPrice(billPrice + (item.price));
  }

  const addingHamburguerTypes = (item) => {
    //alert('OIIII')
    console.log('Jesus', mapTypes[0])
  }
   
  //console.log('total', billPrice)
  /*
  const addOrder = (item) => {
    setOrders([...orders, item])
  }
  */

  const deleteOrder = (item) => {
    const deleteFilter = orders.filter(i => i.name !== item.name)
    setOrders(deleteFilter)
  }

  const dinner = data.filter(product => product.breakfast !== "true")
  
  const types = data.filter(product => product.hb === true && product.breakfast !== "true")
  const mapTypes = types.map(item => item.types)


  return (
    <>
      <section>
        {
          mapTypes.map(i =>
            <>
            <h2>{i}</h2>
            </>
          )
        }
      </section>
      <section className={css(styles.sectionOrders)}>
        {
          orders.map(item =>
            <div>
              <OrderSection
                className={css(styles.orders)}
                name={item.name} price={item.price}
                onClick={deleteOrder}
              />
            </div>
          )
        }      
        <h2>Total R${billPrice}</h2>
      </section>
      
      <section className={css(styles.menuSection)}>
      <h1 className={css(styles.red)}>Dinner</h1>
        {      
          dinner.map(product =>
            <div>
            {/*product.hb === true ? <button>tipo</button> : console.log('sem tipo')*/}
            <Button
              className={css(styles.button)}
              name={product.name}
              price={product.price}
              onClick={addOrder}
            />
            {product.hb === true ?
            <Button
            name={'tipo'}
            onClick={addingHamburguerTypes}
            /> :
            console.log('sem tipo')}
            </div>
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
  const onlyTypes = data.map(i => i.types)
  //const mapOnlyTypes = onlyTypes.map(i => i.types)

  console.log('onlyTypes',onlyTypes)
  console.log('types',types)
  console.log('mapTypes',mapTypes)
 */ 
  //types.map(i => console.log('iiii',i.types))
  
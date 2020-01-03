import React, { useState } from 'react';
import Buttons from './button';
import Data from './data';
import OrderSection from './orderSection';
import ClientData from '../components/clientsData'
import NavBar from '../components/navBar'
import { StyleSheet, css } from 'aphrodite';

function Dinner() {
  const data = Data();
  const [orders, setOrders] = useState([]);
  const [billPrice, setbillPrice] = useState(0);

  const addOrder = (item) => {
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

    <div className={css(styles.mainDiv)}>
      

      <section className={css(styles.menuSection)}>
        <NavBar />
        <h1 className={css(styles.red)}>Dinner</h1>
          {      
            dinner.map(product =>
              <div>
              <Buttons
                className={css(styles.button)}
                name={product.name}
                price={product.price}
                onClick={addOrder}
              />
              {product.hb === true ?
              <Buttons
              name={'tipo'}
              onClick={addingHamburguerTypes}
              /> :
              console.log('sem tipo')}
              </div>
            )
          }
      </section>   

      <section className={css(styles.orderSection)}>
      <ClientData /><br />
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
      
       
    </div>
    </>
  )  
}


const styles = StyleSheet.create({
  mainDiv: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  menuSection: {
    width: '45%',
    textAlign: 'center',
    border: '1.5px solid gray',
    alignItens: 'center',
    margin: '10px',
  },
  orderSection: {
    width: '45%',
    margin: '10px',
    padding: '20px',
    border: '1.5px solid gray',
  },
  button: {
    ///marginTop: '10px',
    margin: '10px',
    padding: '20px',
    border: 'none',  
    borderRadius: '5px',
    cursor: 'pointer',
    background: '#FFC300',
    color: 'black',
    fontSize: '16px',
    fontWeight: 'bold', 
  },
  teste: {
    //borderBottom: '2px solid gray'
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
  
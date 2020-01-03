import React, { useState } from 'react';
import Buttons from './button';
import Data from './data';
import OrderSection from './orderSection';
import ClientData from '../components/clientsData'
import NavBar from '../components/navBar'
import { StyleSheet, css } from 'aphrodite';

function BreakFast() {
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

  /*
  const addOrder = (item) => {
    setOrders([...orders, item])
  }
  */ 
  
  const deleteOrder = (item) => {
    const deleteFilter = orders.filter(i => i.name !== item.name)
    setOrders(deleteFilter)
  }

  const breakfast = data.filter(product => product.breakfast === "true")

  return (
    <div className={css(styles.mainDiv)}>         
      <section className={css(styles.menuSection)}>
        <NavBar />
        <h3>Coffe</h3>
          {
            breakfast.map(product =>
              <div className={css(styles.teste)}>
                <Buttons
                  className={css(styles.button)}
                  name={product.name}
                  price={product.price}
                  onClick={addOrder}
                />   
              </div>
            )          
          }      
      </section>
      <section className={css(styles.orderSection)}>
        <ClientData /><br />
        {
          orders.map(item => 
            <>
            <OrderSection
              className={css(styles.orders)}
              name={item.name}
              price={'R$ ' + item.price}
              onClick={deleteOrder}
            />
            </>
          )
        }
        <h2>Total R$ {billPrice}</h2>
      </section>
    </div>
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

export default BreakFast;
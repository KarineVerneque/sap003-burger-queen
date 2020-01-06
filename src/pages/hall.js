import React, { useState } from 'react';
import Buttons from '../components/button';
import Data from '../components/data';
import OrderSection from '../components/orderSection';
import ClientData from '../components/clientsData'
import { StyleSheet, css } from 'aphrodite';

export default function Hall() {
  const data = Data();
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([])

  const addOrder = (item) => { 
    setOrders([...orders, item])
  }

  const addingHamburguerTypes = (item) => {
    const types = data.filter(product => product.hb === true && product.breakfast !== "true")
    const mapTypes = types.map(item => item.types)
    console.log('Jesus', mapTypes)
  }

  const types = data.filter(product => product.hb === true && product.breakfast !== "true")
  const mapTypes = types.map(item => item.types)
  
  const total = orders.reduce((acc, item) => acc + item.price, 0)

  const deleteOrder = product => {
    const indexItem = (orders.indexOf(product));
    orders.splice(indexItem,1);
    setOrders([...orders]);
  };


  const breakfast = data.filter(product => product.breakfast === "true")
  const dinner = data.filter(product => product.breakfast !== "true")


  return (
    <div className={css(styles.mainDiv)}> 
      <section className={css(styles.menuSection)}>
        <div className={css(styles.menuButtonsSection)}>
          <Buttons className={css(styles.menuButton)} name={'Café'} onClick={() => setMenu([...breakfast])}/>
          <Buttons className={css(styles.menuButton)} name={'Jantar'} onClick={() => setMenu([...dinner])}/>
        </div>
          {
            menu.map(product =>
              <div className={css(styles.teste)}>
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
        <h2>Total: R$ {total}</h2>
      </section>
    </div>
  )  
};

const styles = StyleSheet.create({
  mainDiv: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  menuButtonsSection: {
    //background: 'pink',
    display: 'flex',
    justifyContent: 'space-around'
  },
  menuButton: {
    ':focus': {
      borderBottom: '2px solid #EA0000',
      color: '#EA0000'
    },
    border: 'none',
    borderBottom: '2px solid white',
    background: 'white',
    fontSize: '1em',     
  },
  menuSection: {
    width: '45%',
    flexDirection: 'column',
    //textAlign: 'center',
    border: '1.5px solid gray',
    alignItens: 'center',
    margin: '10px',
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
  orderSection: {
    width: '45%',
    margin: '10px',
    padding: '20px',
    border: '1.5px solid gray',
  },
  teste: {
    //borderBottom: '2px solid gray'
  }
});
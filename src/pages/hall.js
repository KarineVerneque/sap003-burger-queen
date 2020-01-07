import React, { useState } from 'react';
// import firebaseInitialize from '../utils/firebase'
import firebase from '../utils/firebase'
import Buttons from '../components/button';
import Data from '../components/data';
import OrderSection from '../components/orderSection';
import ClientData from '../components/clientsData'
import Input from '../components/input'
import { StyleSheet, css } from 'aphrodite';

export default function Hall() {
  const data = Data();
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);
  const [name, setName] = useState('');
  const [table, setTable] = useState('');

  const addOrder = (item) => {
    const index = orders.findIndex(orderItem => orderItem.name === item.name);
    if (index === -1) {
      setOrders([...orders, {...item, quantity: 1}])
    } else {
      orders[index].quantity += 1;
      setOrders([...orders]);
    }
    // setOrders([...orders, item])
  }

  const deleteOrder = product => {    
    const index = orders.findIndex(orderItem => orderItem.name === product.name);
    const filterDelete = orders.filter(orderItem => orderItem.name !== product.name);
    if (product.quantity === 1) {
      setOrders([...filterDelete]);
    } else {
      orders[index].quantity -= 1;
      setOrders([...orders]);
    }
  };

  const addingHamburguerTypes = (item) => {
    const types = data.filter(product => product.hb === true && product.breakfast !== "true")
    const mapTypes = types.map(item => item.types[0])
    console.log('Jesus', mapTypes)
  }

  function sendOrder(e) {
    // e.preventDefault()
    console.log('orders',orders)
    const clientOrder = {
      name: name,
      table: table,
      order: orders,
      total: total,
      status: 'pendente',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }

    firebase
    .firestore()
    .collection('clients')
    .add(clientOrder)

    setName('');
    setTable('');
    setOrders([]);    

    // then(
        // console.log('acabouuuuu')
        // setName(''),
        // setTable('')
    // )
    
  }
  
  const total = orders.reduce((acc, item) => acc + (item.price * item.quantity), 0)

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
                  onClick={() => addOrder(product)}
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
        {/* <ClientData /><br /> */}
        <form>
          <Input type={'text'} value={name} placeholder={'Nome do cliente'} onChange={(e) => setName(e.target.value)}/>
          <Input type={'text'} value={table} placeholder={'Mesa'} onChange={(e) => setTable(e.target.value)}/>
        </form>
        {
          orders.map(item => 
            <>
            <OrderSection
              className={css(styles.orders)}
              name={item.name}
              price={'R$ ' + item.price}
              onClick={deleteOrder}
              quantity={item.quantity}
            />
            {/* {console.log('orders', orders)} */}
            </>
          )          
        }
        <h2>Total: R$ {total}</h2>
        <Buttons name={'enviar'} onClick={sendOrder}/>
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
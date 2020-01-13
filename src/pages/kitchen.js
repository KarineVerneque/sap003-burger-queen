import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebase';
import OrderKitchen from '../components/kitchenOrders'
import { StyleSheet, css } from 'aphrodite';
import Buttons from '../components/button';

export default function Kitchen() {
  const [data, setDatas] = useState([]);
  const [orders, setOrders] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('orders')
      .onSnapshot((snapshot) => {
          const newDatas = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
          }))            
          setDatas(newDatas)            
      })
  }, [])

  const readyOrder = (item) => {
    firebase
    .firestore()
    .collection('orders')
    .doc(item.id)
    .update(
      {
        status: "pronto"
      }
    )
  }

  const deliveredOrder = (item) => {
    firebase
    .firestore()
    .collection('orders')
    .doc(item.id)
    .update(
      {
        status: "entregue",
        timeFinal: new Date().getTime(),
      }
    )
  }

  const calculateTimestamp = (final, inicial) => {
    const timestamp  = (final - inicial) /1000;    
    const hours = Math.floor(timestamp/60/60);
    const minutes = Math.floor((timestamp - hours * 60 * 60) /60);
    const seconds = Math.floor(timestamp - hours * 60 * 60 - minutes * 60);    

    return hours + ':' + minutes + ':' + seconds;
  }

  const statusPending = data.filter(i => i.status === 'pendente')
  const statusReady = data.filter(i => i.status === 'pronto')
  const statusDelivered = data.filter(i => i.status === 'entregue')

  return (
    <>
      <div className={css(styles.menuButtonsSection)}>
        <Buttons className={css(styles.button)} name={'Pendente'} onClick={() => setOrders([...statusPending])}/>
        <Buttons className={css(styles.button)} name={'Prontos'} onClick={() => setOrders([...statusReady])}/>
        <Buttons className={css(styles.button)} name={'Entregues'} onClick={() => setOrders([...statusDelivered])}/>
      </div>
      <section>
      {
        orders.map(i =>
        i.status === 'pendente' ?
        <OrderKitchen 
          {...i}
          className={css(styles.pendingStatus)}
          btnName={'Pronto'}
          onClick={() => readyOrder(i)}
          quantity={i.order.map(i => i.quantity)}
          order={i.order.map(i => 
            <div>
              <span>
                <p>{i.name}</p>
                {i.quantity}
              </span>                  
            </div>
          )}
          />: i.status === 'pronto' ?
          <OrderKitchen 
          {...i}
          className={css(styles.readyStatus)}
          btnName={'Entregue'}
          onClick={() => deliveredOrder(i)}
          timestamp={calculateTimestamp(i.timeFinal, i.time)}
          quantity={i.order.map(i => i.quantity)}
          order={i.order.map(i => 
            <div>
              <span>
                <p>{i.name}</p>
                {i.quantity}
              </span>                  
            </div>
          )}
          />: i.status === 'entregue' ?
          <OrderKitchen 
          {...i}  
          className={css(styles.deliveredStatus)}
          timestamp={calculateTimestamp(i.timeFinal, i.time)}
          quantity={i.order.map(i => i.quantity)}
          order={i.order.map(i => 
            <div>
              <span>
                <p>{i.name}</p>
                {i.quantity}
              </span>                  
            </div>
          )}
          />: ''
        )
      }
      </section>
    </>
  )  
};

const styles = StyleSheet.create({
  button: {
    ':focus': {
      border: '2px solid #000',
      borderRadius: '5px',
      color: '#000'
    },
    margin: '9px',
    padding: '1.5px',
    border: '2px solid rgba(255,195,0,0.9)',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: '1.2em',
    fontWeight: 'bold', 
    // width: '6em',
    height: '5em',
    width:'50%',
  },
  menuButtonsSection: {
    display: 'flex',
    justifyContent: 'space-around',
    
    backgroundColor: 'rgba(255,195,0,0.9)',
  },
  pendingStatus: {
    background: 'rgba(255,0,0,0.6)'
  },
  readyStatus: {
    background: 'rgba(0,128,0,0.6)'
  },
  deliveredStatus: {
    background: {
      background: 'rgba(255,195,0,0.9)'
    }
  }
})
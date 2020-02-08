import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebase';
import KitchenOrder from '../components/KitchenOrders'
import { StyleSheet, css } from 'aphrodite';
import SelectButton from '../components/SelectButton';

export default function Kitchen() {
  const [data, setDatas] = useState([]);
  const [orders, setOrders] = useState([]);

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

  const updateStatus = (item, currentStatus ) => {
    firebase
      .firestore()
      .collection('orders')
      .doc(item.id)
      .update(
        {
          status: currentStatus,
          timeFinal: item.status === "pronto" ? new Date().getTime() : false
        }
      )
    const index = orders.findIndex((i) => i.id === item.id)
    orders.splice(index, 1);
    
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
        <SelectButton className={css(styles.button)} name={'Pendentes'} onClick={() => setOrders([...statusPending])}/>
        <SelectButton className={css(styles.button)} name={'Prontos'} onClick={() => setOrders([...statusReady])}/>
        <SelectButton className={css(styles.button)} name={'Entregues'} onClick={() => setOrders([...statusDelivered])}/>
      </div>
      <section>
      {
        orders.map(item =>
          item.status === 'pendente' ?
        <KitchenOrder 
          {...item}
          className={css(styles.pendingStatus)}
          btnName={'Pronto'}
          onClick={() => updateStatus(item, "pronto")}
          quantity={item.orders.map(item =>
            <>
            <p className={css(styles.marginItens)}>
              {item.quantity}
            </p>
            </>
          )}
          order={item.orders.map(item => 
            <div>
              <span>
                <p className={css(styles.marginItens)}>
                  {item.name}
                </p>      
              </span>                  
            </div>
          )}
          />: item.status === 'pronto' ?
          <KitchenOrder 
          {...item}
          className={css(styles.readyStatus)}
          btnName={'Entregue'}
          onClick={() => updateStatus(item, "entregue")}
          timestamp={calculateTimestamp(item.timeFinal, item.time)}
          quantity={item.orders.map(item => 
            <>
              <p className={css(styles.marginItens)}>{item.quantity}</p>
            </>
          )}
          order={item.orders.map(item => 
            <div>
              <span>
                <p className={css(styles.marginItens)}>{item.name}</p>
              </span>                  
            </div>
          )}
          />: item.status === 'entregue' ?
          <KitchenOrder 
          {...item}  
          className={css(styles.deliveredStatus)}
          timestamp={calculateTimestamp(item.timeFinal, item.time)}
          quantity={item.orders.map(item => 
            <>
              <p className={css(styles.marginItens)}>
                {item.quantity}
              </p>
            </>  
          )}            
          order={item.orders.map(item => 
            <div>
              <p className={css(styles.marginItens)}>{item.name}</p>
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
      background: 'rgba(255,195,0)',
      color: '#000'
    },
    margin: '9px',
    padding: '1.5px',
    border: '2px solid rgba(255,195,0)',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: 'rgba(255,195,0)',
    fontSize: '1.2em',
    fontWeight: 'bold',
    height: '5em',
    width:'50%',
  },
  menuButtonsSection: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  pendingStatus: {
    background: 'rgba(255,0,0,0.6)',
  },
  readyStatus: {
    background: 'rgba(0,128,0,0.6)'
  },
  deliveredStatus: {
    background: {
      background: 'rgba(255,195,0,0.9)'
    }
  },
  marginItens: {
    margin: '14px'
  }
})
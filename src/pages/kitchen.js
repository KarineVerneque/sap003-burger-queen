import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebase';
import OrderSection from '../components/orderSection';
import { StyleSheet, css } from 'aphrodite';
import Buttons from '../components/button';

export default function Kitchen() {
  const [data, setDatas] = useState([]);
  // const [timeStamp, setTimeStamp] = ('');

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
        status: "pronto",
        timeFinal: new Date().getTime(),
      }
    )
  }

  const deliveredOrder = (item) => {
    firebase
    .firestore()
    .collection('orders')
    .doc(item.id)
    .update({status: "entregue"})
  }

  const calculateTimestamp = (final, inicial) => {
    const timestamp  = (final - inicial) /1000;
    
    const hours = Math.floor(timestamp/60/60);
    const minutes = Math.floor((timestamp - hours * 60 * 60) /60);
    const seconds = Math.floor(timestamp - hours * 60 * 60 - minutes * 60);    

    return hours + ':' + minutes + ':' + seconds;
    // return timestamp
  }

  const statusPending = data.filter(i => i.status === 'pendente')
  const statusReady = data.filter(i => i.status === 'pronto')
  const statusDelivered = data.filter(i => i.status === 'entregue')

  return (
    <>    
      <section>
      <h2>pendentes</h2>
        {
          statusPending.map(clientOrder => 
          <div>
            <OrderSection
              className={css(styles.orders)}
              name={clientOrder.clientName}
              // table={item.table}
              // status={item.status}
              {...clientOrder}
              order={clientOrder.order.map(i => 
                <div>
                  <span>
                    {i.name}
                    {i.quantity}
                  </span>                  
                </div>
              )}
            />
            <Buttons name={'Pronto'} onClick={() => readyOrder(clientOrder)}/>  
          </div>
        )}
      </section>

      <section>
        <h2>Prontos</h2>
        {
          statusReady.map(clientOrder => 
          <div>
            <OrderSection
              className={css(styles.orders)}
              {...clientOrder}
              name={clientOrder.clientName}
              // table={item.table}
              // status={item.status}
              timestamp={calculateTimestamp(clientOrder.timeFinal, clientOrder.time)}
              order={clientOrder.order.map(i => 
                <div>
                  <span>
                    {i.name}
                    {i.quantity}
                  </span>    
                </div>
              )}
            />
            <Buttons name={'Entregue'} onClick={() => deliveredOrder(clientOrder)}/>  
          </div>
        )}
      </section>

      <section>
        <h2>Entregues</h2>
        {
          statusDelivered.map(clientOrder => 
          <div>
            <OrderSection
            {...clientOrder}
              className={css(styles.orders)}
              name={clientOrder.clientName}
              // table={item.table}
              // status={item.status}
              order={clientOrder.order.map(product => 
                <div>
                  <span>
                    {product.name}
                    {product.quantity}
                  </span>  
                  
                </div>
              )}
            />
            {/* <Buttons name={'Pronto'} onClick={() => deliveredOrder(item)}/>   */}
          </div>
        )}
      </section>
    </>
  )  
};

const styles = StyleSheet.create({
  orders: {
    border: '2px solid red',
    margin: '10px'
    //display: 'flex',
    //justifyContent: 'center',
    //flexDirection: 'row'
  }
})
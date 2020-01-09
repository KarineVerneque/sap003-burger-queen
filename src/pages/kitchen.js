import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebase';
import OrderSection from '../components/orderSection';
import { StyleSheet, css } from 'aphrodite';
import Buttons from '../components/button';

export default function Kitchen() {
  const [data, setDatas] = useState([]);

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
    .update({status: "pronto"})
    .then(
      console.log('FOIIIIIIIIIIIII')
    )
  }

  const deliveredOrder = (item) => {
    firebase
    .firestore()
    .collection('orders')
    .doc(item.id)
    .update({status: "entregue"})
    .then(
      // console.log('FOIIIIIIIIIIIII')
    )
  }

  const statusPending = data.filter(i => i.status === 'pendente')
  const statusReady = data.filter(i => i.status === 'pronto')
  const statusDelivered = data.filter(i => i.status === 'entregue')

  return (
    <>    
      <section>
      <h2>pendentes</h2>
        {
          statusPending.map(item => 
          <div>
            <OrderSection
              className={css(styles.orders)}
              name={item.clientName}
              table={item.table}
              status={item.status}
              order={item.order.map(i => 
                <div>
                  <span>
                    {i.name}
                    {i.quantity}
                  </span>  
                  
                </div>
              )}
            />
            <Buttons name={'Pronto'} onClick={() => readyOrder(item)}/>  
          </div>
        )}
      </section>

      <section>
        <h2>Prontos</h2>
        {
          statusReady.map(item => 
          <div>
            <OrderSection
              className={css(styles.orders)}
              name={item.clientName}
              table={item.table}
              status={item.status}
              order={item.order.map(i => 
                <div>
                  <span>
                    {i.name}
                    {i.quantity}
                  </span>  
                  
                </div>
              )}
            />
            <Buttons name={'Entregue'} onClick={() => deliveredOrder(item)}/>  
          </div>
        )}
      </section>

      <section>
        <h2>Entregues</h2>
        {
          statusDelivered.map(item => 
          <div>
            <OrderSection
              className={css(styles.orders)}
              name={item.clientName}
              table={item.table}
              status={item.status}
              order={item.order.map(i => 
                <div>
                  <span>
                    {i.name}
                    {i.quantity}
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
import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebase';
import OrderSection from '../components/orderSection';
import OrderKitchen from '../components/orderKitchen'
import { StyleSheet, css } from 'aphrodite';
import Buttons from '../components/button';

export default function Kitchen() {
  const [data, setDatas] = useState([]);
  // const [timeStamp, setTimeStamp] = ('');
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
      {status: "entregue",
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
    // return timestamp
  }

  const statusPending = data.filter(i => i.status === 'pendente')
  const statusReady = data.filter(i => i.status === 'pronto')
  const statusDelivered = data.filter(i => i.status === 'entregue')

  return (
    <>
      <div>
        <Buttons name={'Pendente'} onClick={() => setOrders([...statusPending])}/>
        <Buttons name={'Prontos'} onClick={() => setOrders([...statusReady])}/>
        <Buttons name={'Entregues'} onClick={() => setOrders([...statusDelivered])}/>
      </div>
      <section>
      {
        orders.map(i =>
        i.status === 'pendente' ?
        <OrderKitchen 
          {...i}
          btnName={'Prontoooooooo'}
          onClick={() => readyOrder(i)}
          order={i.order.map(i => 
            <div>
              <span>
                <p>{i.name}</p>
                {i.quantity}
              </span>                  
            </div>
          )}
          />:
          <OrderKitchen 
          {...i}
          btnName={'Entregue'}
          onClick={() => deliveredOrder(i)}
          timestamp={calculateTimestamp(i.timeFinal, i.time)}
          order={i.order.map(i => 
            <div>
              <span>
                <p>{i.name}</p>
                {i.quantity}
              </span>                  
            </div>
          )}
          />)
      }
      </section>
    </>
    /*<>    
      <section>
      <h2>pendentes</h2>
        {
          statusPending.map(clientOrder => 
          <div>
            <OrderKitchen 
            {...clientOrder}
            btnName={'Pronto'}
            onClick={() => readyOrder(clientOrder)}
            order={clientOrder.order.map(i => 
              <div>
                <span>
                  <p>{i.name}</p>
                  {i.quantity}
                </span>                  
              </div>
            )}
            />
            {/* <OrderSection
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
            /> *//*}
            <Buttons name={'Pronto'} onClick={() => readyOrder(clientOrder)}/>  
          </div>
        )}
      </section>
      <section>
        <h2>Prontos</h2>
        {
          statusReady.map(clientOrder => 
          <div>
            <OrderKitchen
              {...clientOrder}
              btnName={'Entregue'}
              onClick={() => deliveredOrder(clientOrder)}
              name={clientOrder.clientName}
              order={clientOrder.order.map(i => 
                <div>
                  <span>
                    {i.name}
                    {i.quantity}
                  </span>    
                </div>
              )}
            />
            
          </div>
        )}
      </section>
      <section>
        <h2>Entregues</h2>
        {
          statusDelivered.map(clientOrder => 
          <div>
            <OrderKitchen
            {...clientOrder}
              name={clientOrder.clientName}
              timestamp={calculateTimestamp(clientOrder.timeFinal, clientOrder.time)}
              order={clientOrder.order.map(product => 
                <div>
                  <span>
                    {product.name}
                    {product.quantity}
                  </span>  
                  
                </div>
              )}
            />
            
          </div>
        )}
      </section>
    </>*/
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
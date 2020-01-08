import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebase';
import OrderSection from '../components/orderSection';
import { StyleSheet, css } from 'aphrodite';

export default function Kitchen() {
  const [data, setDatas] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('orders')
      .onSnapshot((snapshot) => {
          const newDatas = snapshot.docs.map((doc) => ({
              ...doc.data()
          }))            
          setDatas(newDatas)            
      })
  }, [])

  const filterStatus = data.filter(i => i.status === 'pendente')

  return (
    <>    
      <section>
      <h2>pendentes</h2>
        {
        filterStatus.map(item => 
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
        </div>
      )}
      </section>

      <section>
        <h2>Prontos</h2>
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
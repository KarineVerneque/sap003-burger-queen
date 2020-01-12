import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebase'
import Buttons from '../components/button';
import OrderSection from '../components/orderSection';
import Input from '../components/input'
import { StyleSheet, css } from 'aphrodite';

export default function Hall() {
  const [data, setDatas] = useState([]);
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  // const [options, setOptions] = useState('');
  
  useEffect(() => {
    firebase
      .firestore()
      .collection('menu')
      .onSnapshot((snapshot) => {
          const newDatas = snapshot.docs.map((doc) => ({
              ...doc.data()
          }))            
          setDatas(newDatas)            
      })
  }, [])

  const addOrder = (item) => {
    const index = orders.findIndex(orderItem => orderItem.name === item.name);
    if (index === -1) {
      setOrders([...orders, {...item, quantity: 1}])
    } else {
      orders[index].quantity += 1;
      setOrders([...orders]);
    }
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

  const addOptions = (e, product) => {
    console.log('oi', product)
    // alert('extras')  
    // console.log('target ai', e.target.value)
    // setOptions(e.target.value)
    const option = {...product, name: product.name + ' de ' + e.target.value}
    addOrder(option)
  }

  const addExtras = (e, product) => {
    // console.log('target ai', product)
    // setOptions(e.target.value)
    const option = {...product, name: product.name + ' com ' + e.target.value}
    addOrder(option)
  }
  

  function sendOrder() {
    const clientOrder = {
      clientName: name,
      table: table,
      order: orders,
      total: total,
      status: 'pendente',
      // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      time: new Date().getTime(),
    }

    firebase
    .firestore()
    .collection('orders')
    .add(clientOrder)
    .then(
      setName(''),
      setTable(''),
      setOrders([]),    
    )    
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
        <div className={css(styles.allProductsDiv)}>
          {
            menu.map(product =>
              <div className={css(styles.teste)}>
                
                {
                  product.hb === true ?
                  (
                    <div>
                      <fieldset>
                      <legend>{product.name}</legend>                      
                      {product.options.map(option =>
                        <Buttons
                        className={css(styles.button)}
                        name={option}
                        price={product.price}
                        extra={product.extras}
                        onClick={(e) => addOptions(e, product)}
                        />
                      )}
                      {
                        product.extras.map(i => //console.log('olha',i)
                        <Buttons
                        name={i}
                        onClick={(e) => addExtras(e, product)}
                        />
                      )}
                      
                      </fieldset> 
                    </div>
                  )
                  :
                  <Buttons
                  className={css(styles.button)}
                  /*name={product.name}
                  price={product.price}*/
                  {...product}
                  onClick={() => addOrder(product)}
                />
                }
              </div>
            )
          } 
        </div>               
      </section>
      <section className={css(styles.orderSection)}>
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
              onClick={() => deleteOrder(item)}
              price={'R$ ' + item.price}
              quantity={item.quantity}
            />
            <Buttons name={'X'} onClick={() => deleteOrder(item)}/>
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
    display: 'flex',
    justifyContent: 'space-around',
    
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
    width:'50%',
    display:'flex', 
    justifyContent:'center'

  },
  menuSection: {
    width: '45%',
    flexDirection: 'column',
    border: '1.5px solid gray',
    alignItens: 'center',
    margin: '10px',
  },
  allProductsDiv: {
    display:"flex",
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    margin: '8px',
    padding: '8px',
    border: 'none',  
    borderRadius: '5px',
    cursor: 'pointer',
    background: '#FFC300',
    color: 'black',
    fontSize: '15px',
    fontWeight: 'bold', 
    width: '8rem',
    height: '7rem'
  },
  orderSection: {
    width: '45%',
    margin: '10px',
    padding: '20px',
    border: '1.5px solid gray',
  }
});
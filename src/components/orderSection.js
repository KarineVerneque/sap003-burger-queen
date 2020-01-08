import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function OrderSection (props) {
  
  return(
    <div className={css(styles.xuxu)}>
      <span>{props.name}</span>
      <span>{props.quantity}</span>
      <span>{props.price}</span>
      <span>{props.table}</span>   
      <span>{props.status}</span>   
      <span>{props.order}</span>     
      <button className={css(styles.image)} onClick={() => props.onClick(props)}>       
      </button> 
    </div>
  )
};

const styles = StyleSheet.create({
  xuxu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  // image: {
  //   background: 'white',
  //   border: 'none',
  //   backgroundImage: "url(" + "http://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/512/trash-icon.png" + ")",
  //   backgroundPosition: 'center',
  //   backgroundSize: '20px',
  //   backgroundRepeat: 'no-repeat',
  //   padding: '10px',
  // }
});
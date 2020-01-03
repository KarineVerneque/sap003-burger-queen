import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function OrderSection (props) {
  return(
    <div class={props.className}>
      <span className={css(styles.priceAndName)}>
        <span>{props.name} </span>
        <span> {props.price} </span>
          <button className={css(styles.image)} onClick={() => props.onClick(props)}>
          
          </button>
      </span>    
    </div>
  )
}

const styles = StyleSheet.create({
  priceAndName: {
    textAlign: 'start',
    lineHeight: '2',
    display: 'flex',
    justifyContent: 'space-around',
  },
  image: {
    background: 'white',
    border: 'none',
    backgroundImage: "url(" + "http://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/512/trash-icon.png" + ")",
    backgroundPosition: 'center',
    backgroundSize: '20px',
    backgroundRepeat: 'no-repeat',
    padding: '10px',
  }
})

//OrderSection;
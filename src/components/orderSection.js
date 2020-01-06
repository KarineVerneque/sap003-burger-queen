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
};

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
    //backgroundImage: "url(" + "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjpveLuqO_mAhWHGrkGHf-qBgQQjRx6BAgBEAQ&url=https%3A%2F%2Fpt.pngtree.com%2Ffree-png-vectors%2Flixeira&psig=AOvVaw2jdQWng6Thrjat9wgM1XJG&ust=1578411863315783" + ")",
    backgroundImage: "url(" + "http://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/512/trash-icon.png" + ")",
    backgroundPosition: 'center',
    backgroundSize: '20px',
    backgroundRepeat: 'no-repeat',
    padding: '10px',
  }
});
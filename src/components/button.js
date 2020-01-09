import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Buttons (props) {
  return(
    <>
      {/* <section onClick={props.handleClick} className={css(styles.buttonSection11)}> */}
        <button
          onClick={props.onClick}
          class={props.className}>
          <p>{props.name}</p>
          <p>{props.price}</p>
        </button>
      {/* </section> */}
    </>
  )
};

const styles = StyleSheet.create({
  // button: {
  //   justifyContent: 'center',
  //   display: 'flex',
  //   width:'50%'
  // }
});


import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Buttons (props) {
  return(
    <>
      <section onClick={props.handleClick} className={css(styles.buttonSection)}>
        <button
          onClick={() => props.onClick(props)}
          class={props.className}>
          <p>{props.name}</p>
          <p>{props.price}</p>
        </button>
      </section>
    </>
  )
};

const styles = StyleSheet.create({
  buttonSection: {
    textAlign: 'start',
    lineHeight: '2',
    display: 'flex',
    justifyContent: 'space-around',
  }
});


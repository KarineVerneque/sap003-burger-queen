import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function SelectButton (props) {
  const [extra, setExtra] = useState('Nenhum');

  return(
    <>
      <button
        value={props.name}
        onClick={props.onClick}
        class={props.className}
      >
        <p>{props.name}</p>
        {props.price}
        <p>
          {props.extra ? 
          <>       
            <select className={css(styles.select)} onChange={ (e) => setExtra(e.target.value)}>
              {props.extra.map(i => 
                <option className={css(styles.option)} value={i}>{i}</option>
              )}
            </select>
            <button className={css(styles.btnselect)} onClick={() => {
            props.handleClick(props.name, props.product, extra);
            // setExtra('Nenhum')
            }}
            >
              Adicionar
            </button>
          </> : ''
          }
        </p>
      </button>
    </>
  )
};


const styles = StyleSheet.create({
  select: {
    width: '95px',
    height: '50px',
    fontSize: '0.8em',
    background: '#f2f2f3',
    borderRadius: '5px'
  },
  option: {
    height: '40px',
    background: '#f2f2f3',
    paddingLeft: '17px',
    paddingTop: '12px',
    borderRadius: '5px'
  },
  btnselect: {
    background: 'rgba(0,0,0,0.9)',
    color: 'white',
    width: '95px',
    height: '50px',
    borderRadius: '5px',
    fontSize: '0.9em',
    margin: '10px'
  }

})
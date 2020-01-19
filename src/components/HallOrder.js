import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function HallOrder (props) {
  
  return(
    <div class={props.className}>
        <table className={css(props.class || styles.table)}>
            <tbody>
                <tr className={css(styles.tr)}>
                    <td>{props.quantity}</td>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <button className={css(styles.btnDelete)} onClick={() => props.onClick(props)}>
                      X
                    </button> 
                    {props.table}   
                    {props.status}   
                    {props.order}  
                    {props.timestamp} 
                </tr>
            </tbody>
        </table>         
    </div>
  )
};

const styles = StyleSheet.create({
  table: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: '#fff',
    borderSpacing:'5px',
    width: '100%',
    fontSize: '1.1em',
    tableLayout: 'fixed'
  },
  tr: {
    width: '10px',
    padding: '8px',
    textAlign: 'center',
  },
  btnDelete: {
    padding: '15px',
    border: 'none',
    borderRadius: '3px',
    background: 'rgba(255,0,0,0.7)',
    color: '#fff',
    fontSize: '1.1em',
    fontWeight: 'bold'
  }
});
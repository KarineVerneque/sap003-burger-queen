import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function OrderSection (props) {
  
  return(
    <div class={props.className}>
        <table className={css(styles.table)}>
            <tbody>
                <tr className={css(styles.tr)}>
                    <td>{props.quantity}</td>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <button onClick={() => props.onClick(props)}>
                      {props.btnName}       
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
    fontSize: '1em',
    tableLayout: 'fixed'
  },
  tr: {
    width: '10px',
    padding: '8px',
    textAlign: 'center',
  }
});
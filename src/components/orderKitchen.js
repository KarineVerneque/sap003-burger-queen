import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function OrderKitchen (props) {
  
  return(
    <div>
        <table className={css(styles.table)}>
            <thead>
                <tr className={css(styles.th)}>
                    <th className={css(styles.border)}>Mesa</th>
                    <th className={css(styles.border)}>Nome</th>                    
                    <th className={css(styles.border)}>status</th>
                    <th className={css(styles.border)}>Pedido</th>
                    <th className={css(styles.border)}>Selecionar</th>
                    <th>tempo</th>
                </tr>
            </thead>
            <tbody>
                <tr className={css(styles.td)}>
                    <td className={css(styles.border)}>{props.table}</td>
                    <td className={css(styles.border)}>{props.clientName}</td>
                    <td className={css(styles.border)}>{props.status}</td>
                    <td className={css(styles.border)}>{props.order}</td>
                    <td className={css(styles.border)}><button onClick={() => props.onClick(props)}>{props.btnName}</button></td>
                    {/* <td>{props.timestamp}</td> */}
                    {props.status ==='entregue' ?        
                      <td>{props.timestamp}</td>
                      : ''
                      }
                </tr>
            </tbody>
        </table>         
    </div>
  )
};

const styles = StyleSheet.create({
  table: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: '#fff',
    borderSpacing:'2px',
    width: '100%',
    fontSize: '1em',
  },
  th: {
    padding: '8px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '8px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  },
  border: {
    border: '1px solid #ddd',
    // borderRight: '2px solid green',
    borderCollapse: 'collapse',
  },
});
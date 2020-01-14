import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function OrderKitchen (props) {
  
  return(
    <div>
      <table className={css(styles.table)}>
        <thead>
          <tr className={css(styles.tr)}>
            <th className={css(styles.border)}>Mesa</th>
            <th className={css(styles.border)}>Nome</th>                    
            <th className={css(styles.border)}>status</th>
            <th className={css(styles.border)}>Pedido</th>
            <th className={css(styles.border)}>Quantidade</th>
            {
              props.status !== 'entregue' ?
                <th className={css(styles.border)}>Selecionar</th>
              : false
            }
            {
              props.status === 'entregue' ?
                <th className={css(styles.border)}>tempo</th>
              : false
            }
          </tr>
        </thead>
        <tbody>
          <tr className={css(styles.tr)}>
            <td className={css(styles.border)}>{props.table}</td>
            <td className={css(styles.border)}>{props.clientName}</td>
            <td className={css(styles.border)} className={props.className}>{props.status}</td>
            <td className={css(styles.border)}>{props.order}</td>
            <td className={css(styles.border)}>{props.quantity}</td>
            {
              props.status !== 'entregue' ?
                <td className={css(styles.border)}>
                  <button className={css(styles.btnStatus)} onClick={() => props.onClick(props)}>
                    {props.btnName}
                  </button>
                </td>
              : false
            }
            {
              props.status ==='entregue' ?        
                <td className={css(styles.border)}>{props.timestamp}</td>
              : false
            }
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
    borderSpacing:'2px',
    width: '100%',
    fontSize: '1em',
    tableLayout: 'fixed'
  },
  tr: {
    width: '10px',
    padding: '8px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  },
  border: {
    border: '1px solid #ddd',
    borderCollapse: 'collapse',
  },
  btnStatus: {
    borderRadius: '5px',
    border: 'none',
    padding: '15px',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255,195,0,0.9)',
  }
});
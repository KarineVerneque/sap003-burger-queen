import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function OrderKitchen (props) {
  
  return(
    <div>
       <table className={css(styles.table)}>
            <thead>
                <tr>
                    <th>Mesa</th>
                    <th>Nome</th>                    
                    <th>status</th>
                    <th>Pedido</th>
                    <th>{props.quantity}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.table}</td>
                    <td>{props.clientName}</td>
                    <td>{props.status}</td>
                    <td>{props.order}</td>
                </tr>
            </tbody>
        </table>       
    </div>
  )
};

const styles = StyleSheet.create({
  table: {
    background: 'pink'
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
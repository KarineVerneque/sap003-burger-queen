import React from 'react';
import { Link } from "react-router-dom";
import { StyleSheet, css } from 'aphrodite';

export default function NavBar(props) {
  return(
    <nav>
      <ul className={css(styles.ul)}>
          <li className={css(styles.li)}>
            <Link className={css(styles.a)} to="/hall">Hall</Link>
          </li>
          <li className={css(styles.li)}>
            <Link className={css(styles.a)} to="/kitchen">Kitchen</Link>
          </li>
      </ul>
    </nav>
  )
};

const styles = StyleSheet.create({
  ul: {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    backgroundColor: '#EA0000',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: '1.2em'
  },
  li: {
    //flexDirection: 'column'
  },
  a: {
    ':focus': {
      background: '#fff',
      color: '#000'
    },
    display: 'block',
    color: '#FFF',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
  }
});
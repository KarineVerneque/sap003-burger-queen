import React from 'react';
import { Link } from "react-router-dom";
import { StyleSheet, css } from 'aphrodite';
import Burgerqueen from '../img/Burgerqueen.png'

export default function NavBar(props) {
  return(
    <nav>
      <ul className={css(styles.ul)}>
          <li className={css(styles.li)}>
            <Link className={css(styles.a)} to="/hall">Hall</Link>
          </li>
          <li>
            {/* <p className={css(styles.foto)}></p> */}
            <img className={css(styles.img)} src={Burgerqueen} alt="Burgerqueen" />
          </li>
          <li className={css(styles.li)}>
            <Link className={css(styles.a)} to="/kitchen">Kitchen</Link>
          </li>
      </ul>
    </nav>
  )
};

const styles = StyleSheet.create({
  img:{
    margin: '0',
    width: '110px',
  },
  ul: {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    fontSize: '1.3em',
    color: '#fff',
    height: '62px',
  },
  li: {
    textAlign:'center'
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
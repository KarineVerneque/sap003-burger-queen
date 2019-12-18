import React from 'react';
import { Link } from "react-router-dom";

function NavBar(props) {
  return(
    <nav>
        <ul>
            <li>
                <Link to="/garcon">Garçon</Link>
            </li>
            <li>
                <Link to="/cozinha">Cozinha</Link>
            </li>
        </ul>
  </nav>
  )
}

export default NavBar
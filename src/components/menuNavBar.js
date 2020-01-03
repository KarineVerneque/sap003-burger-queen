import React from 'react';
import { Link } from "react-router-dom";

function NavBar(props) {
  return(
    <nav>
      <ul>
          <li>
            <Link to="/hall">Hall</Link>
          </li>
          <li>
            <Link to="/kitchen">Kitchen</Link>
          </li>
      </ul>
    </nav>
  )
}

export default NavBar
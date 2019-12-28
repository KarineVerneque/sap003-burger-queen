import React from 'react';
import { Link } from "react-router-dom";

function NavBar(props) {
  return(
    <nav>
        <ul>
            <li>
                <Link to="/BreakFast">BreakFast</Link>
            </li>
            <li>
                <Link to="/dinner">Dinner</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar
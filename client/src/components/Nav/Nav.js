import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Landing page</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul> 
    </div>
  )
};
 
export default Nav;
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <Link className="title" to="/">
          Home
        </Link>
        <ul>
          <li>
            <NavLink to="/quote">Quote</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/saved">Saved</NavLink>
          </li>
          <li>
            <NavLink to="/viewed">Viewed</NavLink>
          </li>
          <li>
            <NavLink to="/change-user">Change User</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar
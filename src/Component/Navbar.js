import React from 'react';
import { NavLink , Link } from 'react-router-dom';

const Navbar = () => {
      return (
            <ul>
                  <li><NavLink exact to="/">Home</NavLink></li>
                  <li><NavLink to="/About">About</NavLink></li>
            </ul>
      )
}

export default Navbar

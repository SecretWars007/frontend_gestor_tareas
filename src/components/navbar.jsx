import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
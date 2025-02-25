// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/">Movie Database</Link>
      </h1>
    </header>
  );
};

export default Header;

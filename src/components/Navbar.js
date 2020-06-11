import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-primary mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              Movie Info
            </Link>
          </div>
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/movie">
              Search Movie
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

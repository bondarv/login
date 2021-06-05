import React from 'react';
import { Link } from 'react-router-dom';

const Switcher = ({ isAuthenticated }) => (
  <div className="switcher-div">
    <Link to="/">
      <button>main</button>
    </Link>
    <Link to="/login">
      <button>login</button>
    </Link>
    <Link to={isAuthenticated ? '/profile' : '/login'}>
      <button>profile</button>
    </Link>
  </div>
);

export default Switcher;

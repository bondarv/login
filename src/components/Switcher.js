import React from "react";
import { Link } from "react-router-dom";

const Switcher = ({ isAuthenticated }) => {
  const direction = isAuthenticated ? "/profile" : "/login";

  return (
    <div className="switcher-div">
      <Link to="/">
        <button className="switcher">main</button>
      </Link>
      <Link to="/login">
        <button className="switcher">login</button>
      </Link>
      <Link to={direction}>
        <button className="switcher">profile</button>
      </Link>
    </div>
  );
};

export default Switcher;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = ({ setLoginState }) => {
  const { loginWithRedirect } = useAuth0();

  const handleClick = (event) => {
    event.preventDefault();
    loginWithRedirect();
    setLoginState(true);
  };

  return <button onClick={handleClick}>Log In</button>;
};

export default Login;

import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main, Login, Profile, Switcher } from "./components";
import "./App.css";

const App = () => {
  const { isAuthenticated } = useAuth0();
  const [loginState, setLoginState] = useState(isAuthenticated);

  return (
    <Router>
      <>
        <Switcher loginState={loginState} />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route
            path="/login"
            component={() => <Login setLoginState={setLoginState} />}
            exact
          />
          {loginState && <Route path="/profile" component={Profile} exact />}
        </Switch>
      </>
    </Router>
  );
};

export default App;

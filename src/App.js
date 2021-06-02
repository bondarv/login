import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main, Login, Profile, Switcher } from "./components";
import "./App.css";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <>
        <Switcher isAuthenticated={isAuthenticated} />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} />
          {isAuthenticated && <Route path="/profile" component={Profile} />}
        </Switch>
      </>
    </Router>
  );
};

export default App;

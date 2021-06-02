import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main, Login, Profile, Switcher } from "./components";
import "./App.css";

const App = () => {
  const [login, setLogin] = useState(true);

  return (
    <Router>
      <>
        <Switcher login={login} />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route
            path="/login"
            component={() => <Login setLogin={setLogin} />}
            exact
          />
          {login && <Route path="/profile" component={Profile} exact />}
        </Switch>
      </>
    </Router>
  );
};

export default App;

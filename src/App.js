import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main, Login, Profile, Switcher } from './components';
import './App.css';

function App() {
  const [user, setUser] = useState({});
  const isAuthenticated = user.googleId;

  return (
    <Router>
      <Switcher isAuthenticated={isAuthenticated} />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        {isAuthenticated && (
          <Route path="/profile">
            <Profile user={user} />
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;

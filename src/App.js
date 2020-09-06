import React from 'react';
import './App.css';
import SignUp from './Components/SignUpPage';
import WelcomePage from './Components/WelcomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <SignUp />
            </Route>
            <Route path="/user">
              <WelcomePage />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;


import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Histoire from './components/Histoire';
import AlphabetLSF from './components/AlphabetLSF';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Histoire">
          <Histoire />
        </Route>
        <Route path="/AlphabetLSF">
          <AlphabetLSF />
        </Route>
      </Switch>
    </Router>


  );
}

export default App;

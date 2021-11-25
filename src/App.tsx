import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/dashboard" />
            <Route exact path="/hamburger" />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

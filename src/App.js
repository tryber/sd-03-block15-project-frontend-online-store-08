import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

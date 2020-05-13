import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import Carrinho from './components/Carrinho';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/carrinho" component={Carrinho} />
      </Switch>
    </Router>
  );
}

export default App;

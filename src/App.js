import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainScreen } from './components/MainScreen';
import { Carrinho } from './components/Carrinho';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/carrinho" component={Carrinho} />
        <Route path="/product/:id" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

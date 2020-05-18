import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import Carrinho from './components/Carrinho';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/carrinho" component={Carrinho} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

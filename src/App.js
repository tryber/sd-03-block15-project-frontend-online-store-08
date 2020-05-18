import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './components/Redux/store';

import MainScreen from './components/MainScreen';
import Carrinho from './components/Carrinho';
import ProductDetail from './components/ProductDetail';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/carrinho" component={Carrinho} />
          <Route path="/product/:id" component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

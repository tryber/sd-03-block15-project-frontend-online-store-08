import React from 'react';
import { Link } from 'react-router-dom';

const Botao = () => (
  <Link to="/carrinho" data-testid="shopping-cart-button">
    Carrinho
  </Link>
);
export default Botao;

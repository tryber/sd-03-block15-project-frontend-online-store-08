import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';

class Carrinho extends Component {
  render() {
    const { location: { state } } = this.props;

    return (
      <div>
        <Link
          to={{
            pathname: '/',
            state,
          }}
        >
          Voltar
        </Link>
        {state.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : state.map((product) => <CartCard key={product.id} product={product} />)}
      </div>
    );
  }
}

export default Carrinho;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';

class Carrinho extends Component {
  constructor(props) {
    super(props);

    this.state = { empty: true, products: [] };
  }

  componentDidMount() {
    const { location: { state } } = this.props;
    if (state) {
      this.atualizarCarrinho(state);
    }
  }

  atualizarCarrinho(component) {
    this.setState((currentState) => ({
      empty: false,
      products: [...currentState.products, component],
    }));
  }

  render() {
    const { empty, products } = this.state;
    return (
      <div>
        <Link
          to={{
            pathname: '/',
            state: products,
          }}
        >
          Voltar
        </Link>
        {empty
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : products.map((product) => <CartCard key={product.id} product={product} />)}
      </div>
    );
  }
}

export default Carrinho;

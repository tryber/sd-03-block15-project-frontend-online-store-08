import React, { Component } from 'react';

class Carrinho extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
  }
  render() {
    const { location: { state } } = this.props;
    if (!state) return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    return (
      <div>
        <div>
          <h3 data-testid="shopping-cart-product-name">
            {state.title}
          </h3>
        </div>
        <div>
          <img src={state.thumbnail} alt={state.title} />
        </div>
        <div>
          {`R$ ${state.price}`}
        </div>
        <div data-testid="shopping-cart-product-quantity">
          Quantidade: {this.state.quantity}
        </div>
        <button data-testid="shopping-cart-button"> Comprar mais</button>
      </div>
    );
  }
}

export default Carrinho;

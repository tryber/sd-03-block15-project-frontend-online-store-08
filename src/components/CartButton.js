import React, { Component } from 'react';

class CartButton extends Component {
  constructor(props) {
    super(props);

    this.state = { cart: [] };
  }

  addToCart(elem) {
    const { cart } = this.state;
    if (cart.findIndex((e) => e.id === elem.id) === -1) {
      this.setState({ cart: [...cart, elem] });
    }
  }

  render() {
    const { cart, product } = this.props;

    return (
      <div>
        <button
          data-testid="product-add-to-cart"
          onClick={() => this.addToCart(cart)}
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default CartButton;

import React, { Component } from 'react';

class CartButton extends Component {
  constructor(props) {
    super(props);

    this.state = { cart: [] };
  }

  addToCart(carrinho, elem) {
    const { cart } = this.state;
    const index = carrinho.findIndex((e) => e.id === elem.id);

    if (index === -1) {
      this.setState({ cart: [...cart, elem] });
      cart[cart.length - 1].quantity = 1;
    } else {
      cart[index].quantity += 1;
    }
  }

  render() {
    const { cart, item } = this.props;

    return (
      <div>
        <button
          data-testid="product-add-to-cart"
          onClick={() => this.addToCart(cart, item)}
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default CartButton;

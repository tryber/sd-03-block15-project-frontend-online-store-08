import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartCard from './CartCard';

class Carrinho extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
  }
  render() {
    const { cart, quantity } = this.props;

    return (
      <div>
        <Link to="/">
          Voltar
        </Link>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {`Voce tem ${quantity} itens no carrinho!`}
        </p>
        {quantity !== 0 &&
          cart.map((product) => <CartCard key={product.id} product={product} />)}
        {quantity === 0 &&
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state.products, quantity: state.quantity });
export default connect(mapStateToProps)(Carrinho);

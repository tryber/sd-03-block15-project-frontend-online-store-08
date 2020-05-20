import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartCard from './CartCard';

class Carrinho extends Component {
  cartTotal() {
    const { cart } = this.props;
    let price = 0;
    cart.forEach((e) => {
      if (e.quantity !== 1) price += e.price * e.quantity;
      if (e.quantity === 1) price += e.price;
    });
    return (
      <div>{Number(price).toFixed(2)}</div>
    );
  }

  render() {
    const { cart, quantity } = this.props;
    console.log(cart);

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
        {quantity !== 0 && cart.map((product) => <CartCard key={product.id} product={product} />)}
        {quantity === 0 && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        {quantity !== 0 && (
          <Link data-testid="checkout-products" to="/checkout">Finalizar compra</Link>
        )}
        {this.cartTotal()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state.products, quantity: state.quantity });
export default connect(mapStateToProps)(Carrinho);

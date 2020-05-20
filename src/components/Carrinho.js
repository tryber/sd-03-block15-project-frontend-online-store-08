import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './Redux/actions';
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
      <div>{`R$${Number(price).toFixed(2)}`}</div>
    );
  }

  renderProducts() {
    const { cart } = this.props;
    return (
      cart.map((product) => <CartCard key={product.id} product={product} />)
    );
  }

  render() {
    const { quantity } = this.props;

    return (
      <div>
        <Link to="/">
          Voltar
        </Link>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {quantity}
        </p>
        {quantity === 0 && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        {this.renderProducts()}
        {quantity !== 0 && (
          <Link data-testid="checkout-products" to="/checkout">Finalizar compra</Link>
        )}
        {this.cartTotal()}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);
const mapStateToProps = (state) => ({ cart: state.products, quantity: state.quantity });
export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);

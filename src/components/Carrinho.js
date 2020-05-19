import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartCard from './CartCard';

class Carrinho extends Component {
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
          cart.map((product) => <CartCard key={product.id} product={product} />)
        }
        {quantity === 0 &&
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        {quantity !== 0 &&
          <Link to={{ pathname: '/checkout', cart, quantity }}>
            <button data-testid="checkout-products"> Finalizar Compra</button>
          </Link>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state.products, quantity: state.quantity });
export default connect(mapStateToProps)(Carrinho);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartCard from './CartCard';

class Carrinho extends Component {
  render() {
    const { cart } = this.props;
    console.log(this.props)

    return (
      <div>
        <Link to="/">
          Voltar
        </Link>
        {(cart && cart.length !== 0) &&
          cart.map((product) => (<CartCard key={product.id} product={product} />))}
        {(cart && cart.length === 0) &&
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state.product });
export default connect(mapStateToProps)(Carrinho);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
        {state.length !== 0 &&
          state.map((product) => (<CartCard key={product.id} product={product} />))}
        {state.length === 0 &&
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state.product });
export default connect(mapStateToProps)(Carrinho);

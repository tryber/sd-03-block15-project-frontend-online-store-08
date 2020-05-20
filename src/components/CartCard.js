import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './Redux/actions';

class ProductCard extends Component {
  cartButtons() {
    const { decrementItem, incrementItem, product } = this.props;
    return (
      <div>
        <button
          data-testid="product-increase-quantity"
          onClick={() => incrementItem(product)}
          type="button"
        >
          Add
        </button>
        <p>{product.quantity}</p>
        <button
          data-testid="product-decrease-quantity"
          onClick={() => decrementItem(product)}
          type="button"
        >
          Sub
        </button>
      </div>
    );
  }

  render() {
    const { product } = this.props;
    if (product.quantity !== 1) {
      return (
        <div data-testid="product">
          <h3
            data-testid="shopping-cart-product-name"
          >
            {product.title}
          </h3>
          <img src={product.thumbnail} alt="thumbnail" />
          <p>{`R$${Number(product.price * product.quantity).toFixed(2)}`}</p>
          {this.cartButtons()}
        </div>
      );
    }
    return (
      <div data-testid="product">
        <h3
          data-testid="shopping-cart-product-name"
        >
          {product.title}
        </h3>
        <img src={product.thumbnail} alt="thumbnail" />
        <p>{`R$${Number(product.price).toFixed(2)}`}</p>
        {this.cartButtons()}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);
const mapStateToProps = (state) => ({ cart: state.products, quantity: state.quantity });
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);

import React, { Component } from 'react';

class ProductCard extends Component {
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
      </div>
    );
  }
}

export default ProductCard;

import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { product } = this.props;

    return (
      <div data-testid="product">
        <h3
          data-testid="shopping-cart-product-name"
        >
          {product.title}
        </h3>
        <img src={product.thumbnail} alt="thumbnail" />
        <p>{product.price}</p>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {product.quantity}
        </p>
      </div>
    );
  }
}

export default ProductCard;

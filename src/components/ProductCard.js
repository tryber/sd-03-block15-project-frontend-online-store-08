import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <h3>{product.title}</h3>
        <img src={product.thumbnail} alt="thumbnail" />
      </div>
    );
  }
}

export default ProductCard;

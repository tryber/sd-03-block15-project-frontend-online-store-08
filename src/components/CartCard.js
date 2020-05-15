import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product } = this.props;

    return (
      <div data-testid="product">
        <h3>{product.title}</h3>
        <img src={product.thumbnail} alt="thumbnail" />
        <p>{product.price}</p>
      </div>
    );
  }
}

export default ProductCard;

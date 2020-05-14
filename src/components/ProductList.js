import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      products.map((a) => <ProductCard key={a.id} product={a} />)
    );
  }
}

export default ProductList;

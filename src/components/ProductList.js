import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        {products.map((a) => <ProductCard product={a} key={a.id} />)}
      </div>
    );
  }
}

export default ProductList;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, cart } = this.props;

    return (
      <div data-testid="product">
        <h3>{product.title}</h3>
        <img src={product.thumbnail} alt="thumbnail" />
        <p>{product.price}</p>
        <Link
          data-testid="product-detail-link"
          to={{
            pathname: `/product/${product.id}`,
            state: [...cart, product],
          }}
        >
          Mais detalhes
        </Link>
        <br />
        <Link
          data-testid="product-add-to-cart"
          to={{
            pathname: '/carrinho',
            state: [...cart, product],
          }}
        >
          Adicionar ao carrinho
        </Link>
      </div>
    );
  }
}

export default ProductCard;

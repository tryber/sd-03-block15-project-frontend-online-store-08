import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetail extends Component {
  render() {
    const { location: { state } } = this.props;
    const product = state[state.length - 1];

    if (!product) return <p>Loading...</p>;

    return (
      <div>
        <Link to="/">Voltar</Link>
        <div>
          <h3 data-testid="product-detail-name">
            {product.title}
            <br />
            {product.price}
          </h3>
        </div>
        <div>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div>
          <h5>Especificações técnicas</h5>
          <p>
            {product.condition}
          </p>
        </div>
        <div>
          <input type="textArea" />
        </div>
      </div>
    );
  }
}

export default ProductDetail;

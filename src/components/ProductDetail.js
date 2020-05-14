import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetail extends Component {
  render() {
    const { location: { state } } = this.props;

    if (!state) return <p>Loading...</p>;

    return (
      <div>
        <Link to="/">Voltar</Link>
        <div>
          <h3 data-testid="product-detail-name">
            {state.title}
            <br />
            {`R$ ${state.price}`}
          </h3>
        </div>
        <div>
          <img src={state.thumbnail} alt={state.title} />
        </div>
        <div>
          <h5>Especificações técnicas</h5>
          <p>
            {state.condition}
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

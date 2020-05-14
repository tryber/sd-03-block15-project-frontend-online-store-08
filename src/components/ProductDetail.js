import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    const { location: { state } } = this.props;

    if (!state) return <p>Loading...</p>;

    return (
      <div>
        <div>
          <h3>
            {state.title}
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
      </div>
    );
  }
}

export default ProductDetail;

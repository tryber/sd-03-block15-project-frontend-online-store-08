import React, { Component } from 'react';
import StarRating from './StarRating';
class ProductDetail extends Component {
  render() {
    const { location: { state } } = this.props;

    if (!state) return <p>Loading...</p>;

    return (
      <div>
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
          <StarRating id={this.props.location.pathname}/>
        </div>
      </div>
    );
  }
}

export default ProductDetail;

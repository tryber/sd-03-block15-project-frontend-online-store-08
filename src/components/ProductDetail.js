import React, { Component } from 'react';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { product: {}, loaded: false };
  }

  componentDidMount() {
    const { location: { state } } = this.props;

    this.setState({ product: state, loaded: true });
  }

  render() {
    const { product, loaded } = this.state;
    console.log(product);

    if (!loaded) return <p>Loading...</p>;

    return (
      <div>
        <div>
          <h3>
            {product.title}
            <span> </span>
            {`R$ ${product.price}`}
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
      </div>
    );
  }
}

export default ProductDetail;

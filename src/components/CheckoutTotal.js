import React from 'react';

class CheckoutTotal extends React.Component {
  render() {
    const { products } = this.props;
    let price = 0;
    products.forEach((e) => {
      price += e.price;
    });
    return (
      <div>{Number(price).toFixed(2)}</div>
    );
  }
}

export default CheckoutTotal;

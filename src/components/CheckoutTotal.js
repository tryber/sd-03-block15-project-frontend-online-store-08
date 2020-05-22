import React from 'react';

class CheckoutTotal extends React.Component {
  render() {
    const { products } = this.props;
    let price = 0;
    products.forEach((e) => {
      if (e.quantity !== 1) price += e.price * e.quantity;
      if (e.quantity === 1) price += e.price;
    });
    return (
      <div>{Number(price).toFixed(2)}</div>
    );
  }
}

export default CheckoutTotal;

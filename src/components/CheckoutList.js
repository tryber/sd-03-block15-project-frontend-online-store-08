import React from 'react';

class CheckoutList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      products.map((e) => <p key={e.id}>{e.title}</p>)
    );
  }
}

export default CheckoutList;

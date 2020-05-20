import React from 'react';
import { connect } from 'react-redux';
import CheckoutList from './CheckoutList';
import CheckoutTotal from './CheckoutTotal';
import CheckoutForm from './CheckoutForm';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fullfill: false };
    this.complete = this.complete.bind(this);
  }

  complete() {
    this.setState({ fullfill: true });
  }

  render() {
    const { cart, quantity } = this.props;
    return (
      <div>
        {quantity && (
        <div>
          <div>
            <CheckoutList products={cart} />
            <p>
              {`Quantidade: ${quantity}`}
            </p>
            <p>Valor Total:</p>
            <CheckoutTotal products={cart} />
          </div>
          <CheckoutForm onClick={() => this.complete} />
        </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state.products, quantity: state.quantity });
export default connect(mapStateToProps)(Checkout);

import React from 'react';
import { Link } from 'react-router-dom';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }
  handleClick() {
    const { onClick } = this.props;
    onClick();
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="fullName">Nome Completo:</label><br />
          <input type="text" name="fullName" data-testid="checkout-fullname" required /><br />
          <label htmlFor="e-mail">E-mail:</label><br />
          <input type="email" name="e-mail" data-testid="checkout-email" required /><br />
          <label htmlFor="cpf">CPF:</label><br />
          <input type="text" name="cpf" data-testid="checkout-cpf" maxLength="11" required /><br />
          <label htmlFor="phone">Telefone:</label><br />
          <input
            type="text" name="phone" data-testid="checkout-phone"
            maxLength="11" required
          /><br />
          <label htmlFor="cep">CEP:</label><br />
          <input type="text" name="cep" data-testid="checkout-cep" maxLength="8" required /><br />
          <label htmlFor="address">Endereço:</label><br />
          <input type="textArea" name="address" data-testid="checkout-address" required /><br />
          <Link to="/"><button type="button" onClick={() => this.handleClick()}>Pagar</button></Link>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;

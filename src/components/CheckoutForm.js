import React from 'react';
import { Link } from 'react-router-dom';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Address: '',
      Cep: '',
      Cpf: '',
      Email: '',
      fullName: '',
      Phone: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(field, value) {
    this.setState((state) => ({
      ...state,
      [field]: value,
    }));
  }

  handleClick() {
    const { onClick } = this.props;
    onClick();
  }

  renderFullName() {
    const { fullName } = this.state;
    return (
      <label htmlFor="fullName">
        Nome Completo:
        <input
          data-testid="checkout-fullname"
          name="fullName"
          onChange={(e) => this.handleChange('fullName', e.target.value)}
          required
          type="text"
          value={fullName}
        />
      </label>
    );
  }

  renderEmail() {
    const { Email } = this.state;
    return (
      <label htmlFor="email">
        E-mail:
        <input
          data-testid="checkout-email"
          name="cpf"
          onChange={(e) => this.handleChange('Email', e.target.value)}
          required
          type="email"
          value={Email}
        />
      </label>
    );
  }

  renderCpf() {
    const { Cpf } = this.state;
    return (
      <label htmlFor="cpf">
        Cpf:
        <input
          data-testid="checkout-cpf"
          maxLength="11"
          name="email"
          onChange={(e) => this.handleChange('Cpf', e.target.value)}
          required
          type="text"
          value={Cpf}
        />
      </label>
    );
  }

  renderPhone() {
    const { Phone } = this.state;
    return (
      <label htmlFor="Phone">
        Telefone:
        <input
          data-testid="checkout-phone"
          maxLength="11"
          name="Phone"
          onChange={(e) => this.handleChange('Phone', e.target.value)}
          required
          type="text"
          value={Phone}
        />
      </label>
    );
  }

  renderCep() {
    const { Cep } = this.state;
    return (
      <label htmlFor="Cep">
        Cep:
        <input
          data-testid="checkout-cep"
          maxLength="8"
          name="Cep"
          onChange={(e) => this.handleChange('Cep', e.target.value)}
          required
          type="text"
          value={Cep}
        />
      </label>
    );
  }

  renderAddress() {
    const { Address } = this.state;
    return (
      <label htmlFor="Address">
        Endereço:
        <input
          data-testid="checkout-address"
          name="Address"
          onChange={(e) => this.handleChange('Address', e.target.value)}
          required
          type="text"
          value={Address}
        />
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.renderFullName()}
          <br />
          {this.renderEmail()}
          <br />
          {this.renderCpf()}
          <br />
          {this.renderPhone()}
          <br />
          {this.renderCep()}
          <br />
          {this.renderAddress()}
        </form>
        <Link to="/">
          <button type="button" onClick={() => this.handleClick()}>Pagar</button>
        </Link>
      </div>
    );
  }
}

export default CheckoutForm;

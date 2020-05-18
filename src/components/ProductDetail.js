import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './Redux/actions';

class ProductDetail extends Component {
  addItemToCart(product) {
    const { addItem } = this.props;

    addItem(product);
  }

  addTitleAndPrice() {
    const { location: { state } } = this.props;
    return (
      <div>
        <h3
          data-testid="product-detail-name"
        >
          {state.title}
          <br />
          {`R$${state.price.toFixed(2)}`}
        </h3>
      </div>
    );
  }

  addCartImg() {
    const { location: { state } } = this.props;

    return (
      <div>
        <img
          src={state.thumbnail}
          alt={state.title}
        />
      </div>
    );
  }

  addCartTech() {
    const { location: { state } } = this.props;

    return (
      <div>
        <h5>Especificações técnicas</h5>
        <p>
          {state.condition}
        </p>
      </div>
    );
  }

  addCartBtn() {
    const { location: { state } } = this.props;

    return (
      <button
        data-testid="product-add-to-cart"
        onClick={() => this.addItemToCart(state)}
        type="button"
      >
        Adicionar ao carrinho
      </button>
    );
  }

  render() {
    const { location: { state } } = this.props;

    return (
      <div>
        <Link to="/">Voltar</Link>
        {this.addTitleAndPrice()}
        {this.addCartImg()}
        {this.addCartTech()}
        <div>
          <input type="textArea" />
        </div>
        {this.addCartBtn()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);
export default connect(null, mapDispatchToProps)(ProductDetail);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './Redux/actions';
import StarRating from './StarRating';

class ProductDetail extends Component {
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
    const { addItem } = this.props;

    return (
      <button
        data-testid="product-detail-add-to-cart"
        onClick={() => addItem(state)}
        type="button"
      >
        Adicionar ao carrinho
      </button>
    );
  }

  render() {
    const { location: { pathname } } = this.props;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <span>&nbsp;</span>
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho"
        >
          Carrinho
        </Link>
        {this.addTitleAndPrice()}
        {this.addCartImg()}
        {this.addCartTech()}
        <div>
          <StarRating id={pathname} />
        </div>
        {this.addCartBtn()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);
export default connect(null, mapDispatchToProps)(ProductDetail);

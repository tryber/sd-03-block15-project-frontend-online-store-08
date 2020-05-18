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

  render() {
    const { location: { state } } = this.props;

    return (
      <div>
        <Link to="/">Voltar</Link>
        <div>
          <h3 data-testid="product-detail-name">
            {state.title}
            <br />
            {state.price}
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
          <input type="textArea" />
        </div>
        <button
          data-testid="product-add-to-cart"
          onClick={() => this.addItemToCart(state)}
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);
export default connect(null, mapDispatchToProps)(ProductDetail);

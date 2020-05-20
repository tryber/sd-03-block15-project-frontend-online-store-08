import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './Redux/actions';

class ProductCard extends Component {
  render() {
    const { addItem, product } = this.props;

    return (
      <div data-testid="product">
        {product.shipping.free_shipping && <p data-testid="free-shipping">Free shipping</p>}
        <h3>{product.title}</h3>
        <img src={product.thumbnail} alt="thumbnail" />
        <p>{`R$${Number(product.price).toFixed(2)}`}</p>
        <Link
          data-testid="product-detail-link"
          to={{
            pathname: `/product/${product.id}`,
            state: product,
          }}
        >
          Mais detalhes
        </Link>
        <br />
        <button
          data-testid="product-add-to-cart"
          onClick={() => addItem(product)}
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);
export default connect(null, mapDispatchToProps)(ProductCard);

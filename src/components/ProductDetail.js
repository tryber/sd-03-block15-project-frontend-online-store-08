import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BotaoQtdECarrinho from './BotaoQtdECarrinho';
import DescricaoeQuant from './DescricaoeQuant';
import SetaVoltarProduct from '../images/seta-voltar.png';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { product: {}, loaded: false, itensNoCarrinho: 0, };
    this.salvaQtdItem = this.salvaQtdItem.bind(this);
  }

  componentDidMount() {
    const { location: { state } } = this.props;
    this.funcaoProCCMount();
    this.setState({ product: state, loaded: true });
  }

  funcaoProCCMount() {
    const { match } = this.props;
    const guardar = JSON.parse(localStorage.getItem('Produtos') || '[]');
    const produtoAtual = guardar.find((item) => item.id === match.params.id);
    this.setState({
      produtoAtual,
    });
  }

  salvaQtdItem() {
    const guardar = JSON.parse(localStorage.getItem('Produtos') || '[]');
    this.setState({
      itensNoCarrinho: guardar
        .reduce((acum, curr) => parseInt(acum, 10) + parseInt(curr.quant, 10), 0),
    });
  }

  render() {
    const { product, loaded, itensNoCarrinho } = this.state;

    if (!state) return <p>Loading...</p>;

    return (
      <div>
        <Link to="/">Voltar</Link>
        <div>
          <h3 data-testid="product-detail-name">
            {state.title}
            <br />
            {`R$ ${state.price}`}
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
          <div className="flexProduct">
            <Link to="/">
              <img className="setaVoltarProduct" src={SetaVoltarProduct} alt="" />
            </Link>
            <BotaoQtdECarrinho itensNoCarrinho={itensNoCarrinho} />
          </div>
          <DescricaoeQuant
            produtoAtual={this.props.location.state}
            callbackItem={this.salvaQtdItem}
          />
          <input type="textArea" />
        </div>
      </div>

    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;

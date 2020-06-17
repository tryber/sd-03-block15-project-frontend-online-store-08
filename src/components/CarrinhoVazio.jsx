import React, { Component } from 'react';
import HeaderCarrinho from './HeaderCarrinho';
import Caixa from '../images/caixa-vazia.png';

import './CarrinhoVazio.css';

class CarrinhoVazio extends Component {
  render() {
    return (
      <div>
        <HeaderCarrinho />
        <div className="centralizaFigura">
          <img
            className="caixaVazia"
            src={Caixa}
            alt="Caixa Vazia"
          />
          <h2>Seu carrinho está vazio</h2>
        </div>
      </div>
    );
  }
}

export default CarrinhoVazio;

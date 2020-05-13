import React, { Component } from 'react';
import HeaderCarrinho from './HeaderCarrinho';
import CarrinhoVazio from './CarrinhoVazio';
import './Carrinho.css';

class Carrinho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrinhoVazio: true,
      itensCarrinho: [],
      qtdeItensCarrinho: 0,
      atualizaSoma: '',
    };
    this.testaCarrinhoVazio = this.testaCarrinhoVazio.bind(this);
    this.carregaCarrinhoVazio = this.carregaCarrinhoVazio.bind(this);
  }

  carregaCarrinhoVazio() {
    this.setState({ carrinhoVazio: true });
  }

  testaCarrinhoVazio() {
    const { qtdeItensCarrinho } = this.state;
    this.setState(() => ({ qtdeItensCarrinho: qtdeItensCarrinho - 1 }));
  }

  render() {
    const { carrinhoVazio } = this.state;

    if (carrinhoVazio) return <CarrinhoVazio />;

    return (
      <div className="Carrinho">
        <HeaderCarrinho />
      </div>
    );
  }
}

export default Carrinho;

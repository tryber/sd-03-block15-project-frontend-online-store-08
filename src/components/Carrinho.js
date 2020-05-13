import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  componentDidMount() {
    this.carrinhoMount();
  }

  componentDidUpdate(prevProps, prevState) {
    const { qtdeItensCarrinho, atualizaSoma } = this.state;
    if ((qtdeItensCarrinho === 0) && qtdeItensCarrinho !== prevState.qtdeItensCarrinho) {
      this.carregaCarrinhoVazio();
    }
  }

  carregaCarrinhoVazio() {
    this.setState({
      carrinhoVazio: true,
    });
  }

  testaCarrinhoVazio() {
    const { qtdeItensCarrinho } = this.state;
    this.setState(() => ({
      qtdeItensCarrinho: qtdeItensCarrinho - 1,
    }));
  }

  render() {
    const { itensCarrinho, carrinhoVazio, valorTotal } = this.state;

    if (carrinhoVazio) return <CarrinhoVazio />;

    return (
      <div className="Carrinho">
        <HeaderCarrinho />
      </div>
    );
  }
}

export default Carrinho;

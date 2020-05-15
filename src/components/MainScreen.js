import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Categories from './Categories';
import ProductList from './ProductList';
import * as Api from '../services/api';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstTime: true,
      products: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  searchApi(categoryId, Query) {
    Api.getProductsFromCategoryAndQuery(categoryId, Query)
      .then((result) => this.setState({ products: result.results }));
  }

  handleSearch(id, text) {
    this.searchApi(id, text);
  }

  render() {
    const { firstTime, products } = this.state;

    return (
      <div className="App">
        <Link to="/carrinho" data-testid="shopping-cart-button">
          Carrinho
        </Link>
        <SearchBar callback={this.handleSearch} />
        <Categories callback={this.handleSearch} />
        {firstTime && (
          <span
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
        )}
        <ProductList products={products} />
      </div>
    );
  }
}

export default MainScreen;

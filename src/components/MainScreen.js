import React from 'react';
import SearchBar from './SearchBar';
import Botao from './Botao';
import Categories from './Categories';
import ProductList from './ProductList';
import * as Api from '../services/api';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryId: '',
      firstTime: true,
      products: [],
      searchText: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  searchApi(categoryId, Query) {
    Api.getProductsFromCategoryAndQuery(categoryId, Query)
      .then((result) => this.setState({ products: result.results }));
  }

  handleSearch(id, text) {
    const { categoryId, searchText } = this.state;

    if (text) {
      this.setState({
        searchText: text,
      });
    }

    if (id) {
      this.setState({
        categoryId: id,
      });
    }
    
    this.searchApi(categoryId, searchText);
  }

  render() {
    const { firstTime, products } = this.state;

    return (
      <div className="App">
        <Botao />
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

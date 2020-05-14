import React from 'react';
import SearchBar from './SearchBar';
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

  handleSearch(text) {
    const { categoryId, searchText } = this.state;

    this.setState({ searchText: text });
    this.searchApi(categoryId, searchText);
  }

  render() {
    const { firstTime, products } = this.state;

    return (
      <div>
        <div>
          <Categories />
        </div>
        <div className="App">
          <SearchBar callback={this.handleSearch} />
          {firstTime && (
            <span
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>
          )}
          <ProductList products={products} />
        </div>
      </div>
    );
  }
}

export default MainScreen;

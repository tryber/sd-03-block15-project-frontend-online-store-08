import React from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import query from '../__mocks__/query';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstTime: true,
      products: [],
      searchText: '',
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.setState({ products: query.results });
  }

  handleSearch(searchText) {
    this.setState({ searchText });
  }

  render() {
    const { firstTime, products } = this.state;

    return (
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
    );
  }
}

export default MainScreen;

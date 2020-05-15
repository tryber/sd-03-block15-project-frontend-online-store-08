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
      cart: [],
      firstTime: true,
      products: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const { location: { state } } = this.props;

    if (state) {
      this.setState({ cart: state });
    }
  }

  searchApi(categoryId, Query) {
    Api.getProductsFromCategoryAndQuery(categoryId, Query)
      .then((result) => this.setState({ products: result.results }));
  }

  handleSearch(id, text) {
    this.searchApi(id, text);
  }

  render() {
    const { cart, firstTime, products } = this.state;

    return (
      <div className="App">
        <Link
          data-testid="shopping-cart-button"
          to={{
            pathname: '/carrinho',
            state: cart,
          }}
        >
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

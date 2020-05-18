import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import Categories from './Categories';
import ProductCard from './ProductCard';
import * as Api from '../services/api';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: props.cart,
      categoryId: '',
      firstTime: true,
      products: [],
      query: '',
    };

    this.handleCategory = this.handleCategory.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  searchApi() {
    const { categoryId, query } = this.state;

    Api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((result) => this.setState({ products: result.results }));
  }

  handleCategory(categoryId) {
    this.setState({ firstTime: false, categoryId });
    this.searchApi();
  }

  handleSearch(query) {
    this.setState({ firstTime: false, query });
    this.searchApi();
  }

  render() {
    const { cart, firstTime, products } = this.state;

    return (
      <div className="App">
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho"
        >
          Carrinho
        </Link>
        <SearchBar callback={this.handleSearch} />
        <Categories callback={this.handleCategory} />
        {firstTime && (
          <span
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
        )}
        {products.map((a) => <ProductCard key={a.id} product={a} cart={cart} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state });
export default connect(mapStateToProps)(MainScreen);

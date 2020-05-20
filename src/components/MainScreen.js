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
      categId: '',
      firstTime: true,
      isMounted: false,
      products: [],
      query: '',
    };

    this.handleCategory = this.handleCategory.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  handleCategory(categId) {
    const { isMounted, query } = this.state;
    Api.getProductsFromCategoryAndQuery(categId, query)
      .then((result) => { if (isMounted) this.setState({ categId, products: result.results }); });
  }

  handleSearch(query) {
    const { categId, isMounted } = this.state;
    Api.getProductsFromCategoryAndQuery(categId, query)
      .then((result) => { if (isMounted) this.setState({ products: result.results, query }); });
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

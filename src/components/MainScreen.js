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
    this.mountComponent();
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  mountComponent() {
    this.setState({ isMounted: true });
  }

  handleCategory(categId) {
    const { isMounted, query } = this.state;
    Api.getProductsFromCategoryAndQuery(categId, query)
      .then((result) => {
        if (isMounted) this.setState({ categId, firstTime: false, products: result.results });
      });
  }

  handleSearch(query) {
    const { categId, isMounted } = this.state;
    Api.getProductsFromCategoryAndQuery(categId, query)
      .then((result) => {
        if (isMounted) this.setState({ firstTime: false, products: result.results, query });
      });
  }

  render() {
    const { firstTime, products } = this.state;
    const { cart, quantity } = this.props;

    return (
      <div className="App">
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho"
        >
          Carrinho
        </Link>
        <p data-testid="shopping-cart-size">{quantity}</p>
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

const mapStateToProps = (state) => ({ cart: state, quantity: state.quantity });
export default connect(mapStateToProps)(MainScreen);

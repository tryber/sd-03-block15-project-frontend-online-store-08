import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      done: false,
    };
    // this.listCategories = this.listCategories.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then(
        (data) => this.setState({
          categories: [...data],
          done: true,
        }),
      );
  }

  render() {
    const { categories, done } = this.state;
    return (
      <div>
        <p>Categorias:</p>
        {done && categories.map((cat) => <p data-testid="category" key={cat.id}>{cat.name}</p>)}
      </div>
    );
  }
}

export default Categories;

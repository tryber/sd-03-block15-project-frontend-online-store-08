import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      done: false,
    };

    this.handleCheck = this.handleCheck.bind(this);
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

  handleCheck(e) {
    const { callback } = this.props;
    callback(e.target.id);
  }

  render() {
    const { categories, done } = this.state;
    return (
      <div className="category-list">
        <div>Categorias:</div>
        {done && categories.map((cat) => (
          <label
            htmlFor={cat.name}
            key={cat.id}
          >
            <input
              data-testid="category"
              id={cat.id}
              key={cat.id}
              name="category"
              onClick={(e) => this.handleCheck(e)}
              type="radio"
            />
            {cat.name}
          </label>
        ))}
      </div>
    );
  }
}

export default Categories;

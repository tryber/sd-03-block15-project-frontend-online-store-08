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

  handleCheck(e) {
    const { callback } = this.props;
    callback(e.target.id, '');
  }

  render() {
    const { categories, done } = this.state;
    return (
      <div className="category-list">
        <div>Categorias:</div>
        {
        done && categories.map((cat) =>
          <label
            htmlFor={cat.name} key={cat.id}
          >
            <input
              type="radio" name={cat.name}
              data-testid="category" key={cat.id} id={cat.id}
              onClick={this.handleCheck}
            />{cat.name}
          </label>)
        }
      </div>
    );
  }
}

export default Categories;

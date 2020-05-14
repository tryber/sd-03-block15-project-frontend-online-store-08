import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchText: '' };
  }

  handleChange(newValue) {
    this.setState({ searchText: newValue });
  }

  render() {
    const { callback } = this.props;
    const { searchText } = this.state;

    return (
      <div className="App">
        <input
          data-testid="query-input"
          type="text"
          placeholde="Digite algum termo de pesquisa ou escolha uma categoria."
          value={searchText}
          onChange={(event) => this.handleChange(event.target.value)}
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={() => callback('',searchText)}
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default SearchBar;

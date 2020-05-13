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
    const { searchText } = this.state;

    return (
      <div className="App">
        <input
          type="text"
          placeholde="Digite algum termo de pesquisa ou escolha uma categoria."
          value={searchText}
          onChange={(event) => this.handleChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;

import React from 'react';
import SearchBar from './SearchBar';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstTime: true,
      searchText: '',
    }

    this.searchText = this.searchText.bind(this);
  }

  searchText(searchText) {
    this.setState({ searchText });
  }

  render() {
    const { firstTime, searchText } = this.state;
    return (
      <div className="App">
        <SearchBar
          onClick={this.searchText}
        />
        {firstTime && (
          <span
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
        )}
        <p>{searchText}</p>
      </div>
    );
  }
}

export default MainScreen;

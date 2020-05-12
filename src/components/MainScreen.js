import React from 'react';
import SearchBar from './SearchBar';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { firstTime: true };
  }

  render() {
    const { firstTime } = this.state;
    return (
      <div className="App">
        <SearchBar />
        {firstTime && (
          <span
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
        )}
      </div>
    );
  }
}

export default MainScreen;

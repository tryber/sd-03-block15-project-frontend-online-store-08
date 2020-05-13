import React from 'react';
import SearchBar from './SearchBar';
import Categories from './Categories';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { firstTime: true };
  }

  render() {
    const { firstTime } = this.state;
    return (
      <div className="App">
        <div>
          <Categories />
        </div>
        <div>
          <SearchBar />
          {firstTime && (
            <span
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default MainScreen;

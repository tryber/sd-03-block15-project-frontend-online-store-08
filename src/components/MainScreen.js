import React from 'react';
import SearchBar from './SearchBar';
import Botao from './Botao';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { firstTime: true };
  }

  render() {
    const { firstTime } = this.state;
    return (
      <div className="App">
        <Botao />
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

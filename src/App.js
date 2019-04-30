import React, { Component } from 'react';

import Title from './containers/title';
import SearchBar from './containers/search_bar';
import Detail from './containers/detail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <SearchBar />
        <Detail />
      </div>
    );
  }
}

export default App;

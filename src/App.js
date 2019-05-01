import React, { Component } from 'react';

import Title from './containers/title';
import SearchBar from './containers/search_bar';
import Log from './containers/log';
import Status from './containers/status';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <SearchBar />
        <Status />
        <Log />
      </div>
    );
  }
}

export default App;

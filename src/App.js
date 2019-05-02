import React, { Component } from 'react';

import Title from './containers/title';
import SearchBar from './containers/search_bar';
import Log from './containers/log';
import Visual from './containers/visual';
import ControlledCarousel from './components/carousel'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <SearchBar />
        <ControlledCarousel />
        <Visual />
        <Log />
      </div>
    );
  }
}

export default App;

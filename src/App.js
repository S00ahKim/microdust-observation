import React, { Component } from 'react';
import './App.css';

import SearchBar from './containers/search_bar';
import StationList from './containers/station_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <StationList />
      </div>
    );
  }
}

export default App;

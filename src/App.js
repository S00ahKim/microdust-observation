import React, { Component } from 'react';

import Title from './containers/title';
import CityList from './containers/city_list';
import Detail from './containers/detail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <CityList />
        <Detail />
      </div>
    );
  }
}

export default App;

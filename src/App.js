import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './containers/main';
import Detail from './containers/detail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = '/' component = {Main}/>
          <Route path = '/:id' component = {Detail}/>
        </Switch>
      </div>
    );
  }
}

export default App;

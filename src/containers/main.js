import React, { Component } from 'react';
import Title from '../components/title';
import SearchBar from '../components/search_bar';
import StationList from '../components/station_list';

class Main extends Component {
  
  render() {
    document.title = "microdust observation";
    return(
        <div className = 'main'>
            <div className = 'title'>
                <Title />
            </div>
            <div className = 'body'>
                <SearchBar />
                <StationList />
            </div>
        </div>
    )
  }
}

export default Main;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStationList } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: false, 
        error: '',
        term: ''
      };
    }
    render() {
      return (
        <p> 테스트 </p>
      )
    }
}

export default SearchBar;
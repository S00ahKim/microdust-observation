import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCity } from '../actions/index';

//- 여기에서 state를 props로 받아온다    terms는 검색어임.

class SearchBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: false, 
          error: '',
          term: ''
        };
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.fetchCity(this.state.term);
        this.setState({term: ''});
      }

    onClick(event) {
        event.preventDefault();
        this.props.fetchCity(this.state.term);
        this.setState({term: ''});
    }

    render() {
        const clsName = (this.props.loading) ? 'btn btn-primary loading' : 'btn btn-primary';
        return (
            <form className='search-bar' onSubmit={event => this.onSubmit(event)}>
                <div className='input-group mb-3'>
                    <input 
                        onChange={event => this.setState({term: event.target.value})}
                        type='text' className='form-control' placeholder='영문으로 입력하세요' 
                        value={this.state.term}
                    />
                    <div className='input-group-append'  onClick={event => this.onClick(event)}>
                        <button className={clsName} type='button'>
                            <i className='fa fa-spinner fa-spin' />
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
};

function mapStateToProps(state) {
    return { loading: state.mdust.loading, error: state.mdust.error };
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCity }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
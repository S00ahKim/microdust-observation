import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCity } from '../actions/index';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';

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
            <Navbar bg="light" expand="md">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={event => this.setState({term: 'seoul'})}> 서울 </Nav.Link>
                        <Nav.Link onClick={event => this.setState({term: 'busan'})}> 부산 </Nav.Link>
                        <Nav.Link onClick={event => this.setState({term: 'daegu'})}> 대구 </Nav.Link>
                        <Nav.Link onClick={event => this.setState({term: 'incheon'})}> 인천 </Nav.Link>
                        <Nav.Link onClick={event => this.setState({term: 'gwangju'})}> 광주 </Nav.Link>
                        &nbsp;&nbsp;
                        <NavDropdown title="국내주요도시" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={event => this.setState({term: 'daejeon'})}> 대전 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.setState({term: 'suwon'})}> 수원 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.setState({term: 'ulsan'})}> 울산 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.setState({term: 'changwon'})}> 창원 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.setState({term: 'goyang'})}> 고양 </NavDropdown.Item>
                        </NavDropdown>
                        &nbsp;
                        <NavDropdown title="해외주요도시" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={event => this.setState({term: 'beijing'})}> 베이징 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.setState({term: 'tokyo'})}> 도쿄 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.setState({term: 'london'})}> 런던 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.setState({term: 'paris'})}> 파리 </NavDropdown.Item>
                        </NavDropdown>
                        &nbsp;&nbsp;
                    </Nav>

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
                </Navbar.Collapse>
            </Navbar>
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
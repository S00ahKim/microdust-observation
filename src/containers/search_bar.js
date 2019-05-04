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

    navClick(event, city){
        event.preventDefault();
        this.props.fetchCity(city);
        this.setState({term: ''});
    }

    render() {
        const clsName = (this.props.loading) ? 'btn btn-danger loading' : 'btn btn-danger';
        return (
            <Navbar bg='default' expand="md">
                <Navbar.Brand>미세린가이드</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={event => this.navClick(event, 'seoul')}> 서울 </Nav.Link>
                        <Nav.Link onClick={event => this.navClick(event, 'busan')}> 부산 </Nav.Link>
                        <Nav.Link onClick={event => this.navClick(event, 'daegu')}> 대구 </Nav.Link>
                        <Nav.Link onClick={event => this.navClick(event, 'incheon')}> 인천 </Nav.Link>
                        <Nav.Link onClick={event => this.navClick(event, 'gwangju')}> 광주 </Nav.Link>
                        &nbsp;&nbsp;
                        <NavDropdown title="국내주요도시" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={event => this.navClick(event, 'daejeon')}> 대전 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.navClick(event, 'suwon')}> 수원 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.navClick(event, 'ulsan')}> 울산 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.navClick(event, 'changwon')}> 창원 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.navClick(event, 'goyang')}> 고양 </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="해외주요도시" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={event => this.navClick(event, 'beijing')}> 베이징 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.navClick(event, 'tokyo')}> 도쿄 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.navClick(event, 'london')}> 런던 </NavDropdown.Item>
                            <NavDropdown.Item onClick={event => this.navClick(event, 'paris')}> 파리 </NavDropdown.Item>
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
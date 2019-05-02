import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map';
import Status from '../components/status';

class Visual extends Component {
    renderVisual(data){

        const lat = data.data.city.geo[0];
        const lng = data.data.city.geo[1];

        console.log(data, lat, lng)

        return ( 
            <div className='row' id='visual-box'>
                <div className='col'> <GoogleMap lat={lat} lng={lng} /> </div>
                <div className='col'> <Status /></div>
            </div>
        )
    }
    handleError() {
        if (this.props.error) {
          return (
            <div className="alert alert-danger" role="alert">
              {this.props.error}
            </div>
          );
        }
    }

    render() {
        return (
            <div className='visual'>
                { this.handleError() }
                {this.props.mdust.map(this.renderVisual)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
      mdust: state.mdust.ldata,
      error: state.mdust.error
    };
  }
  
export default connect(mapStateToProps)(Visual);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ControlledCarousel from '../components/carousel'

class Visual extends Component {
    renderVisual(data){
        const cityname = data.data.city.name;
        const pm10 = data.data.iaqi.pm10.v;
        return ( 
            <tr> 
                <td> {cityname} </td>
                <td> {pm10} </td>
            </tr>
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
                <ControlledCarousel />
                <table className='table'>
                    <thead>
                        <tr>
                            <th> 측정소 위치 </th>
                            <th> 미세먼지 </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.mdust.map(this.renderVisual)}
                    </tbody>
                </table>
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
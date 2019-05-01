import React, { Component } from 'react';
import { connect } from 'react-redux';

class Log extends Component {
    renderLog(data){
        const cityname = data.data.city.name;
        const pm10 = data.data.iaqi.pm10.v;
        const pm25 = data.data.iaqi.pm25.v;
        const co = data.data.iaqi.co.v;
        const o3 = data.data.iaqi.o3.v;
        const obs_time = data.data.time.s;
        return ( 
            <tr> 
                <td> {cityname} </td>
                <td> {pm10} </td>
                <td> {pm25} </td>
                <td> {co} </td>
                <td> {o3} </td>
                <td> {obs_time} </td>
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
            <div className='log'>
                { this.handleError() }
                <table className='table'>
                    <thead>
                        <tr>
                            <th> 도시 </th>
                            <th> 미세먼지 </th>
                            <th> 초미세먼지 </th>
                            <th> 일산화탄소 </th>
                            <th> 오존 </th>
                            <th> 측정 시각 </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.mdust.map(this.renderLog)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.mdust.data)
    return { 
      mdust: state.mdust.data,  
      error: state.mdust.error
    };
  }
  
export default connect(mapStateToProps)(Log);
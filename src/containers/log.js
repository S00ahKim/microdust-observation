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
            <tr key={cityname.id}> 
                <td> {cityname} </td>
                <td> {pm10} </td>
                <td> {pm25} </td>
                <td> {co} </td>
                <td> {o3} </td>
                <td> {obs_time} </td>
            </tr>
        )
    }
    render() {
        return (
            <div className='log'>
                <table className='table'>
                    <tr>
                        <td> 도시 </td>
                        <td> 미세먼지 </td>
                        <td> 초미세먼지 </td>
                        <td> 일산화탄소 </td>
                        <td> 오존 </td>
                        <td> 측정 시각 </td>
                    </tr>
                    {this.props.mdust.map(this.renderLog)}
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
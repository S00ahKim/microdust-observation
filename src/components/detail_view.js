import React, { Component } from 'react';
import Chart from './chart';

class DetailView extends Component {
    render() {
        return(
            <div className = "detail-view-body">
                측정 날짜: {this.state.date.toLocaleTimeString()}
                <table className='table-table-hover'>
                    <thead>
                        <tr>
                            <th>미세먼지 PM10 농도</th>
                            <th>미세먼지 PM2.5 농도</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <Chart data = {this.state.microdust.pm10Value} color='orange' units='㎍/㎥' /> </td>
                            <td> <Chart data= {this.state.microdust.pm25Value} color = 'red' units = '㎍/㎥' /></td>
                        </tr>
                        <tr>
                            <td> {this.state.microdust.pm10Value} </td>
                            <td> {this.state.microdust.pm25Value} </td>
                        </tr>
                        <tr>
                            <td> 24시간 등급: {this.state.microdust.pm10Grade} <br/>
                                1시간 등급: {this.state.microdust.pm10Grade1h} </td>
                            <td> 24시간 등급: {this.state.microdust.pm25Grade} <br/>
                                1시간 등급: {this.state.microdust.pm25Grade1h} </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DetailView;
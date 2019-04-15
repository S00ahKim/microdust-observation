//- 수정 필요! 검색창에서 준 검색어로 여기다가 이름 검색해서 이름이랑 측정소 정보 띄움.

import React, { Component } from 'react';

class StationList extends Component {
    renderStation(station){
        return (
            <tr key={station.id}>
                <td> 측정소 이름 들어오게 함 {this.props.station.stationName} </td>
                <td> 측정소 위치 들어오게 함 {this.props.station.addr} </td>
                <td> 측정소 설치년도 들어오게 함 {this.props.station.year} </td>
            </tr>
        )
    }

    handleError() {
        if (this.props.error) {
        return (
            <div className="alert alert-danger" role="alert">
            {this.props.error.message}
            </div>
            );
        }
    }
    render (){
        <div className ='station-list'>
            { this.handleError() }
            <table className ='table table-hover'>
                <thead>
                    <tr>
                        <th> 측정소 </th>
                        <th> 위치 </th>
                        <th> 설치년도 </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.station.map(this.renderStation)}
                </tbody>
            </table>
        </div>
    }
};

function mapStateToProps(state) {
    return { 
      station: state.station.data,  
      error: state.station.error
    };
  }
  
export default connect(mapStateToProps)(StationList);
import React, { Component } from 'react';
import { connect } from 'react-redux';

//import Widget from '../components/widget';

//- 이거 수정 필요 저기 타이틀 example이게 props 근데 이걸 싹 바꾸고 싶다 = state
//- 디테일뷰를 렌더디테일로
//- 키.........

class Detail extends Component {
    renderDetail(data){
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
            <div className='detail'>
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
                        {this.props.mdust.map(this.renderDetail)}
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
  
export default connect(mapStateToProps)(Detail);
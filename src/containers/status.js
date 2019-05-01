import React, { Component } from 'react';
import { connect } from 'react-redux';

class Status extends Component {
    renderStatus(data){
        const pm25 = data.data.iaqi.pm25.v;

        if (pm25 < 51) {
            var statString = '좋음';
            var meaning = '대기오염 관련 환자에게도 영향이 거의 미치지 않습니다.'
            var statColor = {backgroundColor:'green', color:'white'};
        }
        else if (pm25 >=51 && pm25 <101){
            var statString = '보통';
            var meaning = '환자에게 만성 노출시 경미한 영향이 있습니다.'
            var statColor = {backgroundColor:'yellow', color:'black'};
        }
        else if (pm25 >=101 && pm25 <151){
            var statString = '민감군영향';
            var meaning = '환자 및 어린이와 노약자에게 유해할 수 있습니다.'
            var statColor = {backgroundColor:'orange', color:'white'};
        }
        else if (pm25 >=151 && pm25 <201){
            var statString = '나쁨';
            var meaning = '환자, 어린이, 노약자에게 유해하며, 일반인도 불쾌감을 경험합니다.'
            var statColor = {backgroundColor:'red', color:'white'};
        }
        else if (pm25 >=201 && pm25 <300){
            var statString = '매우 나쁨';
            var meaning = '환자, 어린이, 노약자에게 심각하게 유해하며, 일반인에게도 경미한 영향이 있습니다.'
            var statColor = {backgroundColor:'purple', color:'white'};
        }
        else if (pm25 >300){
            var statString = '위험';
            var meaning = '환자, 어린이, 노약자에게 응급상황이 발생하며, 일반인에게는 유해합니다.'
            var statColor = {backgroundColor:'#5e0000', color:'white'};
        }

        return (
            <tr style={statColor}> 
                <td> {statString} </td>
                <td> {meaning} </td>
            </tr>
        )
    }

    render() {
        
        return (
            <div className='status'>
                <table className='table'>
                    <tbody>
                        {this.props.mdust.map(this.renderStatus)}
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
  
export default connect(mapStateToProps)(Status);
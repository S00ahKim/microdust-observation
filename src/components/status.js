import React, { Component } from 'react';
import { connect } from 'react-redux';

class Status extends Component {
    renderStatus(data){
        const pm25 = data.data.iaqi.pm25.v;

        if (pm25 < 51) {
            var img = <img className='face' src={require('./img-component/st1.png')} />
            var statString = '좋음';
            var meaning = '가장 좋은 대기 상태입니다. 대기오염 관련 환자(호흡기 질환 등)에게도 영향이 거의 미치지 않습니다.'
            var star = <img className='star-rate' src={require('./img-component/st1s.png')} />
            var statColor = {backgroundColor:'rgb(53, 91, 0)', color:'white'};
        }
        else if (pm25 >=51 && pm25 <101){
            var img = <img className='face' src={require('./img-component/st2.png')} />
            var statString = '보통';
            var meaning = '환자에게 만성 노출시 경미한 영향이 있습니다. 일반적인 실외활동 시 행동에 특별한 제약을 받을 필요는 없습니다.'
            var star = <img className='star-rate' src={require('./img-component/st2s.png')} />
            var statColor = {backgroundColor:'rgb(255, 201, 0)', color:'black'};
        }
        else if (pm25 >=101 && pm25 <151){
            var img = <img className='face'  src={require('./img-component/st3.png')} />
            var statString = '민감군영향';
            var meaning = '환자 및 어린이와 노약자에게 유해할 수 있습니다. 환자, 어린이, 노약자의 경우 실외활동을 자제하는 것을 권장합니다.'
            var star = <img className='star-rate' src={require('./img-component/st3s.png')} />
            var statColor = {backgroundColor:'rgb(254, 112, 0)', color:'white'};
        }
        else if (pm25 >=151 && pm25 <201){
            var img = <img className='face'  src={require('./img-component/st4.png')} />
            var statString = '나쁨';
            var meaning = '환자, 어린이, 노약자에게 유해하며, 일반인도 불쾌감을 경험합니다. 장시간 실외활동을 자제하십시오.'
            var star = <img className='star-rate' src={require('./img-component/st4s.png')} />
            var statColor = {backgroundColor:'rgb(214, 2, 0)', color:'white'};
        }
        else if (pm25 >=201 && pm25 <300){
            var img = <img className='face'  src={require('./img-component/st5.png')} />
            var statString = '매우 나쁨';
            var meaning = '환자, 어린이, 노약자에게 심각하게 유해하며, 일반인에게도 기침 등의 경미한 영향이 있습니다. 장시간의 실외활동을 자제하십시오.'
            var star = <img className='star-rate' src={require('./img-component/st5s.png')} />
            var statColor = {backgroundColor:'rgb(92, 0, 74)', color:'white'};
        }
        else if (pm25 >300){
            var img = <img className='face'  src={require('./img-component/st6.png')} />
            var statString = '위험';
            var meaning = '환자, 어린이, 노약자에게 응급상황이 발생하며, 일반인에게는 유해합니다. 가급적 모든 실외활동을 자제하십시오.'
            var star = <img className='star-rate' src={require('./img-component/st6s.png')} />
            var statColor = {backgroundColor:'black', color:'white'};
        }

        return (
            <div className = 'container' style={statColor} id='status-view'>
                <div className='row'>
                    <div className='col-md-6' id='face-view'>
                        {img}
                    </div>
                    <div className='col-md-6' id='status-detail-view'>
                        <table className='table'>
                            <tr> <td> {star} </td></tr>
                            <tr> <td id='stat-string'> {statString} </td></tr>
                            <tr> <td id='meaning'> {meaning} </td></tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='status'>
                {this.props.mdust.map(this.renderStatus)}
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
  
export default connect(mapStateToProps)(Status);
/*global google*/
//- 참고: https://velopert.com/3631

import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.map = React.createRef();
  }
  componentDidMount() { //- 이것만 있으면 계속 처음에 호출된 대로만 뜬다.
    console.log('google', this.props);
    new google.maps.Map(this.map.current, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }

  shouldComponentUpdate(){ //- 변화를 감지해준다.
    return true;
  }

  componentWillUpdate(nextProps, nextState){ //- 이부분으로 계속 업데이트해준다.
    new google.maps.Map(this.map.current, {
      zoom: 12,
      center: {
        lat: nextProps.lat,
        lng: nextProps.lng
      }
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) { //- 이 API는 컴포넌트에서 render() 를 호출하고난 다음에 발생. this.props바뀌어있음.

  }

  render() {
    return <div style={{width:'100%', height:'300px'}} ref={this.map}></div>;
  }
}

export default GoogleMap;


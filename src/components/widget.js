import React from 'react';

//- 참고: http://aqicn.org/faq/2015-07-28/air-quality-widget-new-improved-feed/

const Widget = (props) => {
    return (
        <span id='city-aqi-container'>
            <small> {props.cityname} 대기 정보</small> 
            <div>
                _aqiFeed({  container:"city-aqi-container",  city:"beijing"  });
            </div> 
            {props.impact}
        </span>
    )
}

export default Widget;
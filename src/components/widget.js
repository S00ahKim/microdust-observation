import React from 'react';

//- 참고: http://aqicn.org/faq/2015-07-28/air-quality-widget-new-improved-feed/
//- 써치바에서 프롭스 주는듯?

const Widget = (props) => {
    return (
        <div>
            <small>{props.cityname} 대기 정보:</small> 
            <div>
                {props.aqiv}
            </div> 
            {props.impact}
        </div>
    )
}

export default Widget;
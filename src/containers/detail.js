import React, { Component } from 'react';
import Title from '../components/title';
import DetailView from '../components/detail_view';

//- TODO: 타이틀 스몰 부분에서 글자 작아지게 css
class Detail extends Component {
    render() {
        <div className='detail'>
            <div className = 'title-small'> 
                <Title />
            </div>
            <div className = 'detail-view'>
                <DetailView />
            </div>
        </div>
    }
}

export default Detail;
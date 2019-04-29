import React, { Component } from 'react';
import Map from '../components/map';
import DetailView from '../components/detail_view';
import Widget from '../components/widget';

//- 이거 수정 필요

class Detail extends Component {
    render() {
        return (
            <div className='detail'>
                <table>
                    <tbody>
                        <tr>
                            <td> <Widget /> </td>
                            <td> <DetailView /> </td>
                        </tr>
                        <tr>
                            <td> <Map /> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Detail;
import React from 'react';

const DetailView = (props) => {
    return (
        <div className='detail-view'>
            <table>
                <tr>
                    <td> 미세먼지 </td>
                    <td> {props.pm10} </td>
                </tr>
                <tr>
                    <td> 초미세먼지 </td>
                    <td> {props.pm25} </td>
                </tr>
                <tr>
                    <td> 일산화탄소 </td>
                    <td> {props.co} </td>
                </tr>
                <tr>
                    <td> 오존 </td>
                    <td> {props.o3} </td>
                </tr>
            </table>
        </div>
    )
}

export default DetailView;
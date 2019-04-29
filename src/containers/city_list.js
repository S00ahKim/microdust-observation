import React, { Component } from 'react';

class CityList extends Component {
    render (){
        return (
            <div className ='city-list'>
                <table className ='table'>
                    <tbody>
                        <tr>
                            <td> 서울 </td>
                            <td> 부산 </td>
                            <td> 인천 </td>
                            <td> 대구 </td>
                            <td> 대전 </td>
                        </tr>
                        <tr>
                            <td> 광주 </td>
                            <td> 수원 </td>
                            <td> 울산 </td>
                            <td> 창원 </td>
                            <td> 고양 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
};
  
export default CityList;
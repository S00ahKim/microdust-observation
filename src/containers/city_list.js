import React, { Component } from 'react';

class CityList extends Component {
    render (){
        return (
            <div className ='city-list'>
                <table className ='table table-hover'>
                    <tbody>
                        <tr>
                            <td> 서울특별시 </td>
                            <td> 부산광역시 </td>
                            <td> 인천광역시 </td>
                            <td> 대구광역시 </td>
                            <td> 대전광역시 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
};
  
export default CityList;
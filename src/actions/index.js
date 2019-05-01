import axios from 'axios';

const TOKEN = '51c05eb19f4ac4b5cbb7e2b56a73d8526f944e82';
const ROOT_URL = 'https://api.waqi.info/feed';

export const FETCH_CITY = 'FETCH_CITY'; 
export const FETCH_LIST = 'FETCH_LIST'; 


export function fetchCity(city){
    const url = `${ROOT_URL}/${city}/?token=${TOKEN}`
    const request = axios.get(url)

    return {
        type: FETCH_CITY,
        payload: request
    }
}

export function fetchList(city=['seoul']){
    const url = `${ROOT_URL}/${city}/?token=${TOKEN}`
    const request = axios.get(url)

    return {
        type: FETCH_LIST,
        payload: request
    }
}

//- 지역 이름을 받아서 정보를 가져옴
// //- 받게 되는 예시: 
// {
//     "status": "ok",
//     "data": {
//         "aqi": 78,
//         "idx": 5508,
//         "attributions": [
//             {
//                 "url": "https://www.airkorea.or.kr/",
//                 "name": "South Air Korea Environment Corporation (대기오염실시간공개시스템)"
//             },
//             {
//                 "url": "http://cleanair.seoul.go.kr/",
//                 "name": "Seoul Clean Air Pollution Information (서울특별시 기후대기환경정보)"
//             },
//             {
//                 "url": "http://www.airkorea.or.kr/",
//                 "name": "South Air Korea Environment Corporation (대기오염실시간공개시스템)"
//             },
//             {
//                 "url": "https://waqi.info/",
//                 "name": "World Air Quality Index Project"
//             }
//         ],
//         "city": {
//             "geo": [
//                 37.566535,
//                 126.9779692
//             ],
//             "name": "Seoul (서울)",
//             "url": "https://aqicn.org/city/seoul"
//         },
//         "dominentpol": "pm25",
//         "iaqi": {
//             "co": {
//                 "v": 5.6
//             },
//             "h": {
//                 "v": 43
//             },
//             "no2": {
//                 "v": 26.9
//             },
//             "o3": {
//                 "v": 27.2
//             },
//             "p": {
//                 "v": 1010.6
//             },
//             "pm10": {
//                 "v": 25
//             },
//             "pm25": {
//                 "v": 78
//             },
//             "r": {
//                 "v": 2.7
//             },
//             "so2": {
//                 "v": 5.8
//             },
//             "t": {
//                 "v": 16.6
//             },
//             "w": {
//                 "v": 1.9
//             },
//             "wd": {
//                 "v": 112.5
//             }
//         },
//         "time": {
//             "s": "2019-04-29 19:00:00",
//             "tz": "+09:00",
//             "v": 1556564400
//         },
//         "debug": {
//             "sync": "2019-04-29T19:15:04+09:00"
//         }
//     }
// }
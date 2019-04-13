import axios from 'axios';

const API_KEY = 'VoSpP%2FPaUjPn7B8m%2B5hnMpHKkzwzJ0jDBYn4RiRzJkgrAEHoA1okGnmCGgUtiLtaY0guUVZa%2Fth1ELdbegH5Rg%3D%3D';
const ROOT_URL = 'http://openapi.airkorea.or.kr/openapi/services/rest/';

export const FETCH_CITY = 'FETCH_CITY'; //- 측정소 위치
export const FETCH_MICRODUST = 'FETCH_MICRODUST'; //- 측정소의 미세먼지 정보

export function fetchStationList(city){
    const url = `${ROOT_URL}/MsrstnInfoInqireSvc/getMsrstnList?addr=${city}&pageNo=1&numOfRows=5&ServiceKey=${API_KEY}`
    const request = axios.get(url)

    return {
        type: FETCH_CITY,
        payload: request
    }
}

export function fetchMicrodust(stationName){ //- 한 달 정보
    const url =`${ROOT_URL}/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${stationName}&dataTerm=month&pageNo=1&numOfRows=10&ServiceKey=${API_KEY}&ver=1.3`
    const request = axios.get(url)

    return {
        type: FETCH_MICRODUST,
        payload: request
    }
}

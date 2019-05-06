import axios from 'axios';

const TOKEN = '51c05eb19f4ac4b5cbb7e2b56a73d8526f944e82';
const ROOT_URL = 'https://api.waqi.info/feed';

export const FETCH_CITY = 'FETCH_CITY'; 


export function fetchCity(city){
    const url = `${ROOT_URL}/${city}/?token=${TOKEN}`
    const request = axios.get(url)

    return {
        type: FETCH_CITY,
        payload: request
    }
}
import { FETCH_CITY } from '../actions';

export default function(state = {  
    loading: false, error: '', data: []
  }, action) {
    console.log(action);
    switch (action.type) {  
    case `${FETCH_CITY}_PENDING`:
      return {
        loading: true,
        error: '',
        data: [...state.data]
      };
    case `${FETCH_CITY}_FULFILLED`:
      if (action.payload.data.status === "error") {
        return {
          loading: false,
          error: '존재하지 않는 이름입니다.',
          data: [...state.data]
        };
      }
      else {
        return {
          loading: false,
          error: '',
          data: [action.payload.data, ...state.data]
        };
      }
    case `${FETCH_CITY}_REJECTED`:
      return {
        loading: false,
        error: '연결이 거부되었습니다.',
        data: [...state.data]
      };
    default:
      return state;
    }
  }
  
  //- 리젝티드로 안들어옴
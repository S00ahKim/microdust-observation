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
      return {
        loading: false,
        error: '',
        data: [action.payload.data, ...state.data]
      };
    case `${FETCH_CITY}_REJECTED`:
      return {
        loading: false,
        error: action.payload,
        data: [...state.data]
      };
    default:
      return state;
    }
  }
  
  
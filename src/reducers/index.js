import { combineReducers } from 'redux';
import microdust_reducer from './microdust_reducer';

const rootReducer = combineReducers({
    mdust: microdust_reducer,
});
  
export default rootReducer;
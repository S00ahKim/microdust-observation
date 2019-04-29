import { combineReducers } from 'redux';
import microdust_reducer from './microdust_reducer';

//- Re(act State Pro)ducer 리액트 스테이트 생성자 => Reducer 
//- 액션이 날아옴 -> 리듀서가 스토어의 스테이트를 변경 (여기에는 어떻게 바꿀지를 기술한다.)

const rootReducer = combineReducers({
    mdust: microdust_reducer,
});
  
export default rootReducer;
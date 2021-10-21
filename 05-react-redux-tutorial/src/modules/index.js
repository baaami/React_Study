import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 리듀서를 여러개 만든 상태에서 리듀서를 하나로 합쳐주기 위해서
// 리덕스에서 제공하는 combineReducers 유틸 함수를 사용하여 처리한다.
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

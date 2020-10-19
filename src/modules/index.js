
import { combineReducers } from "redux";
import counter from './counter';
import todos from './todos';

//나중에 createStore함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야합니다.
//우리는 counter, todos라는 리듀서를 2개만들었기 때문에 하나로 합쳐주어야 합니다.
//이 때 사용하는 유틸함수는 combineReducers입니다.

const rootReducer = combineReducers({
    counter,
    todos
});

//파일명이 이렇게 index.js라면 나중에 불러올 때 디렉터리 이름까지만 입력하면됩니다.
//ex: import root from './modules';
export default rootReducer;
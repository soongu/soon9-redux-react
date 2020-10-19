
//모듈의 액션타입 정의: 액션타입은 대문자로 정의하고 '모듈이름/액션이름' 관례 적용
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성 함수 정의
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//모듈의 초기상태 정의
const initialState = {
    number: 0
};

//모듈의 리듀서 함수 정의
function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return  {
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default counter;
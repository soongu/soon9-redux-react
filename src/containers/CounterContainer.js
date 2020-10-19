import React from 'react';
import Counter from "../components/Counter";
import {connect} from "react-redux";
import {increase, decrease} from "../modules/counter";

/*
 이 컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect함수를 사용해야 함.

 - connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
   - mapStateToProps: 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
   - mapDispatchToProps: 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수

  - 이렇게 connect를 호출하면 또 다른 함수를 반환하는데 그 함수의 매개값으로 연동할 컴포넌트를
    넣어주면 연동이 완료됩니다.
 */
const CounterContainer = ({number, increase, decrease}) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    );
};

/*
const mapStateToProps = state => ({
    number: state.counter.number
});

const mapDispatchToProps = dispatch => ({
    //임시 함수
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    }
});

 */

// const makeContainer = connect(mapStateToProps, mapDispatchToProps);
// const finishedConnect = makeContainer(CounterContainer);

/*
export default connect(
    state => ({
        number: state.counter.number
    }),
    dispatch => ({
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease())
    })
)(CounterContainer);

 */

//2번째 함수파라미터를 액션 생성함수를 가진 객체로 넣어도됨
export default connect(
    state => ({
        number: state.counter.number
    }),
    {
        increase,
        decrease
    }
)(CounterContainer);
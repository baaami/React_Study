import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <Counter
      number={number}
      // 컴포넌트 성능 최적화 상황에서는 useCallback으로 액션을 디스패치하는 함수를 감싸주는 것이 좋다. useDispatch 는 useCallback과 짝꿍
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    ></Counter>
  );
};

export default CounterContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
/**
 * CounterContainer 컴포넌트를 리덕스와 연동시키기 위해서는 react-redux에서 제공하는 connect함수를 사용해야 한다.
 * => 현재 리덕스는 액션 타입, 액션 생성 함수, 리듀서 함수를 포함하여
 *      rootReducer -> createStore(rootReducer, composeWithDevTools) -> store -> <Provider store={store}> -> App component를 Provider 태그로 감싼 상태
 *
 *      해당 리덕스가 현재 App component에 적용되어있고 그 리덕스와 연결하기 위해서 connect 함수를 사용하는 것이다.
 *
 * mapStateToProps와 mapDispatchProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다.
 *
 * mapStateToProps는 state를 파라미터로 받아옴 (현재 스토어가 지니고 있는 상태를 가리킨다.)
 * mapDispatchToProps의 경우 store의 내장 함수 dispatch를 파라미터로 받아온다.
 *
 * @returns     function             : 컴포넌트를 파라미터로 넘겨주면 리덕스와 연동된 컴포넌트가 만들어져서 반환된다.
 */

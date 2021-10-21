import React, { useReducer } from 'react'

/**
 *  reducer는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션 값을 전달 받아 새로운 상태를 반환하는 함수
 * reducer 함수에서 새로운 상태를 만들 대는 반드시 불변성을 지켜주어야 한다.
 *
 * 장점 : 업데이트 로직을 컴포넌트 바깥 쪽으로 뺄수 있다는 것
 */
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    case 'DECREMENT':
      return { value: state.value - 1 }
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state
  }
}

const DeCounter = () => {
  /**
   * useReducer
   * @param1 : 리듀서 함수
   * @param2 : param1의 기본값
   *
   * @return1 state     :   현재 가리키고 있는 상태
   * @return2 dispatch  :   액션을 발생시키는 함수
   */
  const [state, dispatch] = useReducer(reducer, { value: 0 })

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  )
}

export default DeCounter

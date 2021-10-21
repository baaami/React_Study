import React, { useState } from 'react'

const Counter = () => {
  // hook의 useState
  // value    :     첫번째 원소로 상태 값
  // setValue :     두번째 원소값 상태를 설정하는 함수
  //                이 함수에 상태 상태 변수 파라미터를 넣어서 호출하면 전달 받은 파라미터로 값이 바뀌고 component가
  //                rerendering 된다
  const [value, setvalue] = useState(0)

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b> 입니다.
      </p>
      <button onClick={() => setvalue(value + 1)}>+1</button>
      <button onClick={() => setvalue(value - 1)}>-1</button>
    </div>
  )
}

export default Counter

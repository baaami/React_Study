import React, { useState, useMemo, useCallback, useRef } from 'react'

const getAverage = numbers => {
  console.log('평균값 계산중 ...')
  if (numbers.length === 0) return 0
  const sum = numbers.reduce((a, b) => a + b)
  return sum / numbers.length
}

const Average = () => {
  const [list, setList] = useState([])
  const [number, setNumber] = useState('')
  const inputEl = useRef(null)

  // input 내용이 바뀔때마다 평균값을 계산하고 있다.
  // 기존 값을 조회하지 않고 바로 설정하기 때문에 두번째 파라미터인 []에 아무것도 넣지 않아도 된다.
  const onChange = useCallback(e => {
    setNumber(e.target.value)
  }, [])

  // 기존의 number, list를 조회해서 nextList를 생성하기 때문에 배열안에 number, list를 넣어준다.
  const onInsert = useCallback(() => {
    // parseInt : Convert string to int
    const nextList = list.concat(parseInt(number))
    setList(nextList)
    // 리스트에 넣은 값은 초기화 시켜준다.
    setNumber('')
    // ref를 참조하고 있는 DOM 에 대해서 focus 동작을 실행
    inputEl.current.focus()
  }, [number, list]) // number 혹은 list가 바뀌었을 때만 함수 생성

  // 렌더링 과정에서 특정 값 (두번째 인자인 list)이 바뀌었을 경우만 연산을 실행
  // 원하는 값이 바뀌지 않았다면 이전 연산 결과를 다시 사용
  const avg = useMemo(() => getAverage(list), [list])

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값: </b> {avg}
      </div>
    </div>
  )
}

export default Average

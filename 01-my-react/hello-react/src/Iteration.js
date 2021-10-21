import React, { useState } from 'react'

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ])
  const [inputText, setInputText] = useState('')
  const [nextId, setNextId] = useState(5) // 새로운 항목을 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value)
  const onClick = () => {
    // 배열 변형 : 추가
    // push가 아닌 concat을 사용하는 이유는 기존의 배열을 유지하기 위해서
    // => 컴포넌트 최적화 시에 불변성 유지가 필요하다.
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    })
    setNextId(nextId + 1)
    setNames(nextNames)
    setInputText('')
  }

  const onRemove = id => {
    // 배열 변형 : 제거
    // names 배열의 불변성 유지
    const nextNames = names.filter(name => name.id !== id)
    setNames(nextNames)
  }

  const nameList = names.map(name => (
    // onDoubleClick : HTML 요소를 더블클릭할 때 발생하는 이벤트
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ))
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  )
}

export default IterationSample

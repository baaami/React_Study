import React, { useState, useEffect } from 'react'

// useEffect
// 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
// 클래스 컴포넌트의 componentDidMount, componentDidUpdate를 합친 형태와 같다
const Info = () => {
  // hook의 useState
  // value    :     첫번째 원소로 상태 값
  // setValue :     두번째 원소값 상태를 설정하는 함수
  //                이 함수에 상태 상태 변수 파라미터를 넣어서 호출하면 전달 받은 파라미터로 값이 바뀌고 component가
  //                rerendering 된다
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  // 마운트 될때만 실행하고 싶을 경우
  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다')
  //     console.log({
  //       name,
  //       nickname,
  //     })
  //   }, [])

  // 특정 값이 업데이트될 때만 실행하고 싶을 때
  // useEffect의 두번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣는다. (ex, [name])
  //   useEffect(() => {
  //     console.log(name)
  //   }, [name])

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeNickname = e => {
    setNickname(e.target.value)
  }

  // UnMount, Update 직전에 어떠한 작업을 수행하고 싶을 경우
  // useEffect에서 뒷정리 cleanup 함수를 반환해주어야 한다.
  useEffect(() => {
    console.log('effect')
    console.log(name)
    return () => {
      console.log('cleanup')
      console.log(name)
    }
  }, [name])
  return (
    <div>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onChangeNickname} />
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  )
}

export default Info

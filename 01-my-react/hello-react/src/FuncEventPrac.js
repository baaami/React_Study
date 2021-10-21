import React, { useState } from 'react'

const FuncEventPrac = () => {
  /**
   * 첫번째 원소 form : 현재 상태
   * 두번째 원소 setForm : Setter 함수
   *
   * Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정해준다.
   */
  const [form, setForm] = useState({
    username: '',
    message: '',
  })

  const { username, message } = form

  const onChange = e => {
    const nextForm = {
      ...form, // spread 용법 : 기존의 form 내용을 복사
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    }
    setForm(nextForm)
  }

  const onClick = () => {
    alert(username + ': ' + message)
    setForm({
      username: '',
      message: '',
    })
  }
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick()
    }
  }
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  )
}
export default FuncEventPrac

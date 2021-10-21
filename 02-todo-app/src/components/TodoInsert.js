import React, { useState, useCallback } from 'react';
// https://react-icons.github.io/react-icons/icons?name=md 에서 사용하고 싶은 아이콘을 골라서 컴포넌트처럼 사용하면 된다
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    // 사용자가 Todo 목록을 입력 가능하도록 state값 변경
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value 값 초기화
      // submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
      // 이를 방지하기 위해서 사용
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd></MdAdd>
      </button>
    </form>
  );
};

export default TodoInsert;

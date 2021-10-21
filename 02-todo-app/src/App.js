import React, { useState, useRef, useCallback } from 'react';
import produce from 'immer';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

/**
 * @brief   함수 추가 이유 : 많은 데이터 렌더링 시키기 위함
 *
 * 컴포넌트가 렌더링 하는 경우
 *
 * 1. 자신이 전달받은 props가 변경될 때
 * 2. 자신의 state가 바뀔 때
 * 3. 부모 컴포넌트가 리렌더링될 때
 * 4. forceUpdate 함수가 실행될 때
 *
 * 지금 상황의 경우 '할 일 1' 항목을 체크하면 App 컴포넌트의 state가 변경되면서 App 컴포넌트가 리렌더링된다.
 * 그러므로 App 컴포넌트의 하위 컴포넌트인 TodoList, 2500개의 TodoListItem이 리렌더링된다.
 * -> 이 때 '할 일 1'만 리렌더링될 수 있도록 변경하자
 */
function createBulkTodos() {
  const array = [];
  for (let i = 0; i <= 3; i++) {
    array.push({
      id: i,
      text: `할 일  ${i}`,
      checked: false,
    });
  }

  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  /**
   * @param1 text:  todo 목록에 사용할 text
   */
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // nextId 1씩 더하기
  }, []);

  const onRemove = useCallback(
    (id) => setTodos((todos) => todos.filter((todo) => todo.id !== id)),
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        // immer 사용법
        produce(todos, (draft) => {
          const todo = draft.find((todo) => todo.id === id);
          todo.checked = !todo.checked;
        }),
      );
    },
    [todos],
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
        ></TodoList>
      </TodoTemplate>
    </div>
  );
};

export default App;

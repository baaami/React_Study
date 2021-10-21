import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        ></TodoListItem>
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    ></List>
  );
};

// React.memo 함수 사용 시 컴포넌트의 props가 바뀌지 않았다면, 리렌더링하지 않도록 설정된다.
// 즉, 이 케이스의 경우 todo, onRemove, onToggle이 바뀌지 않으면 리렌더링하지 않음
// 하지만 현재 todos 배열이 업데이트 되면 onRemove, onToggle 함수도 새롭게 바뀌므로 아직 문제가 있음.
//  => onRemove, onToggle 함수가 배열 상태를 업데이트하는 과정에서 최신 상태의 todos를 참조하기 때문
// 해결 방법
//  1. useState의 함수형 업데이트 기능을 사용  => 이 방법으로 구현
//  2. useReducer를 사용                 => 로직을 컴포넌트 밖으로 둘 수 있으니 별개로 확인해보기
export default React.memo(TodoList);

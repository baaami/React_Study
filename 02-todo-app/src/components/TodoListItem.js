import React, { useState } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  // TODO: cn 확인하기
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? (
            <MdCheckBox></MdCheckBox>
          ) : (
            <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
          )}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline></MdRemoveCircleOutline>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;

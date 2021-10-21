import React from 'react'
import { ColorConsumer } from '../contexts/color'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하시오.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map(color => {
              return (
                <div
                  key={color}
                  style={{
                    background: color,
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer',
                  }}
                  onClick={() => actions.setColor(color)}
                  // 오른쪽 마우스 클릭
                  onContextMenu={e => {
                    // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
                    e.preventDefault()
                    actions.setSubcolor(color)
                  }}
                ></div>
              )
            })}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  )
}

export default SelectColors

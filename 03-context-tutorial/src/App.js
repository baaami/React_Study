import React from 'react'
import { ColorProvider } from './contexts/color'
import Colorbox from './components/Colorbox'
import SelectColors from './components/SelectColors'

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors></SelectColors>
        <Colorbox></Colorbox>
      </div>
    </ColorProvider>
  )
}

export default App

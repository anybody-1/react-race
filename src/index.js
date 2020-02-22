import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
// ========================================
const App = function () {
  const [n, setN] = useState(0)
  const add = () => {
    setN(n + 1)
  }
  return (
    <div>
      <div>{n}</div>
      <button onClick={add}>+1</button>
    </div>
  )
}
render(
  <App />,
  document.getElementById('root')
)

import { useState } from 'react'
import './App.css'
import ItemList from './ItemList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ItemList/>
    </>
  )
}

export default App

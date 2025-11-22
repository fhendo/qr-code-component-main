import { useState } from 'react'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex justify-center items-center bg-fundo'>
      <Card />
    </div>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
  <Home/>
   </>
  )
}

export default App

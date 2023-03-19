import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PrimarySearchAppBar from './Components/AppBar'
import Trending from './Components/Trending'
import PopularNow from './Components/PopularNow'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main' >
      <div className="appbar">
        <PrimarySearchAppBar/>
        <Trending/>
        <PopularNow/>
        <div className="footer">
          
        </div>
        

      </div>
    </div>
  )
}

export default App

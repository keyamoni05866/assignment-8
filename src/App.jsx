import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <div className="header  m-auto mb-3 ">
   
     <Header></Header>
      </div>
    </div>
  )
}

export default App

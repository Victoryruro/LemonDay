import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-white'>
        <BrowserRouter >
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          <Footer/>
        </BrowserRouter> 
      </div>


    </>
  )
}

export default App
